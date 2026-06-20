# Undangan Pernikahan — Iqbal &amp; Pasangan

Website undangan pernikahan premium (Next.js) — tema **luxury sage green + cream**.
Responsif, animasi halus, RSVP &amp; ucapan tersimpan ke Google Sheets, dan
**semua konten cukup diedit di satu file: `data/config.js`.**

---

## 1. Menjalankan di komputer (development)

Butuh **Node.js 18+** (unduh di nodejs.org).

```bash
npm install      # sekali saja, untuk memasang dependensi
npm run dev      # jalankan di http://localhost:3000
```

Buka http://localhost:3000 di browser.

---

## 2. Mengganti konten (PALING SERING DIPAKAI)

Buka file **`data/config.js`**. Semua teks, nama, tanggal, foto, rekening, dll.
ada di sana. Cari tanda **`⬇️ TODO`** untuk bagian yang masih perlu diisi:

- Nama lengkap & panggilan mempelai wanita
- Nama orang tua kedua mempelai
- Jam akad & resepsi
- Alamat lengkap & link Google Maps
- Foto galeri (lihat poin 3)
- Rekening / QRIS (jika ingin amplop digital)

Setelah edit, simpan file. Saat `npm run dev` berjalan, halaman otomatis refresh.

### Mengganti foto
Taruh file foto di folder **`public/images/`** lalu sesuaikan path di `config.js`:
- `cover.jpeg` — foto sampul
- `gallery-1.jpeg`, `gallery-2.jpeg`, `gallery-3.jpeg` — galeri

### Menambahkan musik
Taruh file lagu (mp3) di **`public/music/song.mp3`**.
Jika ingin nama lain, ubah `config.music.src`.

### Link tamu personal
Bagikan link dengan parameter `?to=Nama`, contoh:
`https://situs-anda.com/?to=Budi%20Santoso` → nama "Budi Santoso" tampil di cover.

---

## 3. Setup Google Sheets (RSVP &amp; Ucapan)

1. Buat **Google Sheet** baru (sheets.new).
2. Menu **Extensions → Apps Script**. Hapus kode default, tempel isi file
   **`google-apps-script.gs`** (ada di project ini). Simpan.
3. Klik **Deploy → New deployment**. Pilih tipe **Web app**:
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
4. Klik **Deploy**, izinkan akses, lalu **salin Web app URL** (diakhiri `/exec`).
5. Salin file `.env.local.example` menjadi **`.env.local`** dan isi:
   ```
   APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
   ```
6. Restart `npm run dev`. RSVP &amp; ucapan kini tersimpan ke Sheet Anda.

> Jika belum diisi, form tetap tampil dan tamu bisa konfirmasi via tombol WhatsApp.

---

## 4. Deploy online (GRATIS)

### Opsi A — Vercel (paling cocok untuk Next.js, direkomendasikan)
1. Buat akun di vercel.com (login dengan GitHub).
2. Upload project ini ke sebuah repo GitHub.
3. Di Vercel: **Add New → Project → Import** repo tersebut.
4. Di bagian **Environment Variables**, tambahkan:
   `APPS_SCRIPT_URL` = URL Apps Script Anda.
5. Klik **Deploy**. Selesai — Anda dapat link `namaproyek.vercel.app`.

### Opsi B — Netlify
1. Buat akun netlify.com, hubungkan repo GitHub.
2. Build command: `npm run build` · Publish: otomatis (plugin Next.js).
3. Tambahkan environment variable `APPS_SCRIPT_URL` di Site settings.
4. Deploy.

### Pakai domain sendiri
Setelah deploy, buka **Settings → Domains** (Vercel/Netlify), tambahkan domain
Anda, dan ikuti instruksi DNS. Lalu update `config.meta.url` ke domain final.

---

## 5. Struktur project

```
data/config.js          ← SEMUA KONTEN DIEDIT DI SINI
app/
  layout.js             ← SEO / metadata / font
  page.js               ← perakitan semua section
  globals.css           ← tema & warna (ubah variabel di :root untuk re-theme)
  api/rsvp/route.js     ← endpoint simpan RSVP
  api/wishes/route.js   ← endpoint baca/tulis ucapan
components/             ← tiap bagian = 1 file (Cover, Countdown, dst.)
public/images/          ← foto
public/music/           ← lagu
google-apps-script.gs   ← kode backend Google Sheets
```

## 6. Ganti tema warna
Buka `app/globals.css`, ubah nilai variabel di blok `:root` (mis. `--sage`,
`--gold`, `--cream`). Seluruh situs ikut berubah tanpa menyentuh file lain.
