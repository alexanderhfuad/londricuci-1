# Hostinger Shared Hosting Deploy

Project ini cocok dijalankan sebagai static site hasil build Vite, bukan Node app yang hidup terus.

## Opsi yang disarankan

1. Pakai Node.js `20.x` di Hostinger.
2. Jalankan install dan build dari root repo:
   - `npm install`
   - `npm run build`
3. Upload isi folder `artifacts/cuci-cuci/dist` ke `public_html`.

## Jika deploy dari Git di Hostinger

Set command seperti ini:

```bash
npm install
npm run build
```

Lalu publish hasil build dari:

```text
artifacts/cuci-cuci/dist
```

ke:

```text
public_html
```

## Jika upload manual

1. Build project di lokal:

```bash
npm install
npm run build
```

2. Upload semua isi `artifacts/cuci-cuci/dist` ke `public_html`.

## Routing SPA

File `.htaccess` sudah disiapkan di `artifacts/cuci-cuci/public/.htaccess`.
Vite akan menyalinnya ke dalam `dist`, jadi refresh atau buka route langsung tetap diarahkan ke `index.html`.

## Jika site dipasang di subfolder

Contoh jika dipasang di `https://domain.com/londri/`, build dengan base path:

```bash
$env:BASE_PATH='/londri/'
npm run build
```

Di Linux shell:

```bash
BASE_PATH=/londri/ npm run build
```

Kalau dipasang di root domain, tidak perlu set `BASE_PATH`.
