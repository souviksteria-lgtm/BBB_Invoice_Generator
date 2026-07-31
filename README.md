# 🎂 BBB Invoice Generator

A lightweight, single-file invoice generator for **Beyond Blissful Bakes** — a home bakery by Baisakhi.

Built with plain HTML, CSS, and JavaScript. No backend, no framework, no install.

---

## 🚀 Features

- **Product Catalogue** — 33 preset bakery items with auto-fill price
- **Smart Quantity Merging** — Adding the same item increments qty instead of duplicating rows
- **Dynamic QR Code** — UPI payment QR auto-updates with the invoice total (hidden when total = ₹0)
- **Stamp & Signature** — Merged stamp image with today's date at the bottom-right
- **Print / Save as PDF** — Clean print layout (QR hidden, buttons hidden)
- **Save as Image** — Full-page PNG export using html2canvas at 2× scale
- **FSSAI Badge** — Licence number prominently displayed in the header
- **Copyright Footer** — Auto-updating year

---

## 📁 Project Structure

```
BBB_Invoice_Generator/
├── index.html        # Single-file app (HTML + CSS + JS)
├── signature.png     # Merged stamp + signature image
├── README.md
└── Requirements.md
```

---

## 🛠️ How to Use

1. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
2. Fill in **Customer Name** and **Contact / Address** (optional).
3. Click **+ Add Item** to add products from the catalogue.
4. Review the **Grand Total** and **UPI QR code** for payment.
5. Click **🖨️ Print / Save as PDF** or **📸 Save as Image**.

---

## 🧾 Invoice Layout

| Section | Details |
|---|---|
| Header | Brand name, "By Baisakhi" byline, tagline, FSSAI badge |
| Invoice No. | Auto-generated: `INV-YYYYMMDD-HHMMSS` |
| Bill To | Customer name + contact/address |
| Items Table | #, Description, Unit, Qty, Price, Total |
| Grand Total | Sum of all line items |
| QR Code | UPI payment QR (visible in image, hidden in print) |
| Stamp | Signature stamp + date (bottom-right) |
| Footer | © Year Beyond Blissful Bakes • By Baisakhi |

---

## 💳 UPI Payment

The QR code encodes the UPI string:
```
upi://pay?pa=8826548216@mbkns&pn=Beyond%20Blissful%20Bakes&am=<TOTAL>&tn=BBB%20Invoice
```

To change the UPI ID, edit this line in `index.html`:
```js
const UPI_ID = '8826548216@mbkns';
```

---

## 📦 Dependencies (CDN)

| Library | Version | Purpose |
|---|---|---|
| [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | Save as Image (PNG export) |
| [qrcodejs](https://github.com/davidshimjs/qrcodejs) | 1.0.0 | UPI payment QR generation |

No npm, no build step required.

---

## 🏪 Business Details

- **Business:** Beyond Blissful Bakes
- **Owner:** Baisakhi
- **FSSAI Licence No.:** 22726694000028
- **Since:** 2020

---

## 📜 License

Private — for internal business use by Beyond Blissful Bakes.
