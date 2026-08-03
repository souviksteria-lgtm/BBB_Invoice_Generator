// One-time migration: imports catalogue.json items into the Firestore "catalogueItems" collection.
// Usage:
//   1. In Firebase Console > Project settings > Service accounts > Generate new private key.
//      Save the downloaded file as service-account-key.json next to this script (do NOT commit it).
//   2. npm install firebase-admin --no-save
//   3. node scripts/migrate-catalogue-to-firestore.mjs
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(
  await readFile(path.join(__dirname, 'service-account-key.json'), 'utf8')
);
const catalogue = JSON.parse(
  await readFile(path.join(__dirname, '..', 'catalogue.json'), 'utf8')
);

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

let count = 0;
for (const item of catalogue.items) {
  await db.collection('catalogueItems').add(item);
  count++;
}
console.log(`Migrated ${count} items into Firestore collection "catalogueItems".`);
