# 📋 Requirements — BBB Invoice Generator

This document captures all functional and non-functional requirements for the Beyond Blissful Bakes Invoice Generator.

---

## ✅ Functional Requirements

### 1. Header / Branding
- [x] Display **"Beyond Blissful Bakes"** as the brand name in Cooper BT / Cooper Black font
- [x] Display **"By Baisakhi"** below the brand name
- [x] Display tagline *"your happiness our priority"* in cursive style
- [x] Show FSSAI badge with licence number **22726694000028**
- [x] FSSAI text must be visible in both print and image snapshots

### 2. Invoice Number
- [x] Auto-generate invoice number in format `INV-YYYYMMDD-HHMMSS`
- [x] Narrow ribbon style with smaller font

### 3. Customer Information
- [x] Customer Name field (optional)
- [x] Contact / Address field (optional)
- [x] Both fields displayed side by side on a single line

### 4. Items Management
- [x] **+ Add Item** button placed above the Items section header
- [x] Product dropdown with 33 catalogue items (name, unit, price)
- [x] Auto-fill price when item is selected from dropdown
- [x] Auto-fill Qty = 1 when item is selected
- [x] Custom item entry via "✏️ Other / Custom item…" option
- [x] Maximum 20 items per invoice
- [x] Item counter showing `X / 20 items`
- [x] Selecting the same item increments quantity in existing row (no duplicate rows)
- [x] Remove individual items with ✕ button
- [x] Enter key in Qty/Price fields triggers add action

### 5. Items Table
- [x] Columns: #, Description, Unit, Qty, Price, Total
- [x] Line total = Qty × Price
- [x] Remove button column (hidden in print/image)

### 6. Grand Total
- [x] Automatically calculated from all line totals
- [x] Displayed prominently at the bottom of the table

### 7. Payment QR Code
- [x] UPI QR code generated dynamically with the invoice total amount
- [x] QR size: 100×100 px
- [x] Visible only when grand total > ₹0 (hidden when no items)
- [x] Hidden during Print / Save as PDF
- [x] Visible in "Save as Image" export
- [x] UPI format: `upi://pay?pa=<UPI_ID>&pn=<NAME>&am=<AMOUNT>&tn=BBB%20Invoice`
- [x] QR and stamp/signature aligned on the same horizontal line

### 8. Stamp & Signature
- [x] Merged stamp+signature image (`signature.png`) displayed at bottom-right
- [x] Size: 75×75 px
- [x] Today's date displayed below the stamp
- [x] Date format: `DD Mon YYYY` (e.g., 01 Aug 2026)

### 9. Print / Save as PDF
- [x] Hides: buttons, Add Item panel, QR code section
- [x] Preserves brand colours (print-color-adjust: exact)
- [x] FSSAI badge visible in black text
- [x] Clean output without UI chrome

### 10. Save as Image
- [x] Captures full `.container` as PNG at 2× scale
- [x] Filename: `<InvoiceNumber>.png`
- [x] QR code visible in exported image
- [x] Buttons and form chrome hidden

### 11. Copyright Footer
- [x] Text: `© <YEAR> Beyond Blissful Bakes • By Baisakhi`
- [x] Auto-updating year

---

## 🔧 Non-Functional Requirements

### Performance
- App loads instantly — no server, no build step
- All processing is client-side (browser only)

### Compatibility
- Works in modern browsers: Chrome, Edge, Firefox, Safari
- Responsive layout (collapses on screens ≤ 480px)

### Portability
- Single `invoice.html` file (except image assets)
- No npm, no Node.js, no dependencies to install
- CDN-loaded libraries (html2canvas 1.4.1, qrcodejs 1.0.0)

### Maintainability
- Product catalogue stored in a JavaScript array — easy to update
- UPI ID configurable via single constant `UPI_ID`
- Business name configurable via `BUSINESS_NAME` constant

---

## 📦 Product Catalogue

| Category | Items | Unit | Price |
|---|---|---|---|
| Cookies/Biscuits | Atta Biscuits, Oats Cookies, Chocolate Cookies, Rose Pista, Digestive, Ragi Chocochips, Coconut, Jowar Kaju, Almond Sticks, Mixed Seeds | 150g | ₹50 |
| Sliced Cakes | Tutti Frutti, Vanilla Butter, Chocolate Walnut, Pineapple, Fruit Sliced, Marble, Chocolate Sliced | 500g | ₹250 |
| Muffins | Vanilla, Chocolate, Pineapple, Butterscotch, Dryfruits Chocochip, Kesar Pista | 4 pcs. | ₹120 |
| Muffins with Frosting | — | 4 pcs. | ₹200 |
| Energy Bar | — | 250g | ₹200 |
| Crackers | Ajwan, Jeera, Spicy Masala, Curry Leaves | 150g | ₹50 |
| B/A Cakes (Plain Vanilla) | 500g, 1kg | 500g/1kg | ₹350/₹700 |
| B/A Cakes (Chocolate) | 500g, 1kg | 500g/1kg | ₹400/₹800 |

---

## 🔮 Future Enhancements (Planned / Optional)

- [ ] Add phone number field to Bill To section
- [ ] Export invoice as PDF directly (without browser print dialog)
- [ ] Invoice history / local storage of past invoices
- [ ] Discount field per item or on grand total
- [ ] WhatsApp share button for sending invoice image
- [ ] Date picker for invoice date (currently uses auto-generated timestamp)
