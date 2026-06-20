// =============================================================================
//  KONFIGURASI UNDANGAN  —  EDIT SEMUA KONTEN DI FILE INI SAJA
// =============================================================================
//  Cari tanda  ⬇️ TODO  untuk bagian yang masih perlu kamu lengkapi.
//  Setelah edit, simpan file ini lalu refresh halaman.
// =============================================================================

const config = {
  // ---------------------------------------------------------------------------
  // 1. META / SEO  (judul tab, preview saat link dibagikan ke WhatsApp)
  // ---------------------------------------------------------------------------
  meta: {
    title: "Pernikahan Iqbal & Siti",
    description:
      "Assalamu'alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan Iqbal Fathur Rakhman & Siti Rohmah.",
    // URL situs setelah deploy (untuk preview link).
    url: "https://undangan-pernikahan-one-gamma.vercel.app",
    ogImage: "/images/cover.jpeg", // gambar preview saat link dibagikan
  },

  // ---------------------------------------------------------------------------
  // 2. MEMPELAI
  // ---------------------------------------------------------------------------
  couple: {
    // Tampil duluan di banyak tempat = "groom" (pria) sesuai data Anda
    groom: {
      fullName: "Iqbal Fathur Rakhman, S.Pd.",
      nickName: "Iqbal",
      order: "Putra kedua dari",
      father: "Bapak Tisna Sumarna, S.Pd",
      mother: "Ibu Sriyustina Kadariah, S.Pd.SD.",
      instagram: "", // ⬇️ TODO: isi jika ada, contoh "iqbal.fr"
      photo: "/images/couple-profile.jpeg",
    },
    bride: {
      fullName: "Siti Rohmah",
      nickName: "Siti",
      order: "Putri ke-empat dari",
      father: "Bapak Wandi",
      mother: "Ibu Rohanah",
      instagram: "", // ⬇️ TODO: isi jika ada
      photo: "/images/couple-profile.jpeg",
    },
  },

  // ---------------------------------------------------------------------------
  // 3. COVER / PEMBUKA
  // ---------------------------------------------------------------------------
  cover: {
    eyebrow: "The Wedding Of",
    coverImage: "/images/cover.jpeg",
    // Kalimat ayat / quote pembuka (boleh dikosongkan)
    verse:
      "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu mendapat ketenangan, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    verseSource: "QS. Ar-Rum: 21",
  },

  // ---------------------------------------------------------------------------
  // 4. MUSIK  (taruh file mp3 Anda di  public/music/song.mp3)
  // ---------------------------------------------------------------------------
  music: {
    src: "/music/song.mp3",
    title: "Beautiful in White (Instrumental) — Neena Goh",
  },

  // ---------------------------------------------------------------------------
  // 5. TANGGAL  (format ISO: "YYYY-MM-DDTHH:mm:ss" — dipakai untuk countdown)
  // ---------------------------------------------------------------------------
  date: {
    // Patokan countdown, mengikuti jam mulai acara di undangan fisik
    iso: "2026-06-27T09:00:00+07:00",
    displayDate: "Sabtu, 27 Juni 2026",
    timezone: "WIB",
  },

  // ---------------------------------------------------------------------------
  // 6. DETAIL ACARA  (boleh tambah/hapus item di dalam array events)
  // ---------------------------------------------------------------------------
  events: [
    {
      name: "Akad & Resepsi",
      date: "Sabtu, 27 Juni 2026",
      time: "09.00 - 17.00 WIB",
      venue: "Masjid Nurul Jannah",
      address:
        "5JM2+HV9, Sukajaya, Kecamatan Lembang, Kabupaten Bandung Barat, Jawa Barat 40391",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=5JM2%2BHV9+Sukajaya+Lembang+Bandung+Barat",
    },
  ],

  // ---------------------------------------------------------------------------
  // 7. GALERI  (Anda punya 3 foto — ganti file di public/images/)
  // ---------------------------------------------------------------------------
  gallery: [
    "/images/gallery-1.jpeg",
    "/images/gallery-2.jpeg", // ⬇️ TODO: ganti dgn foto kedua
    "/images/gallery-3.jpeg", // ⬇️ TODO: ganti dgn foto ketiga
  ],

  // ---------------------------------------------------------------------------
  // 8. RSVP  (form konfirmasi kehadiran — tersimpan ke Google Sheets)
  // ---------------------------------------------------------------------------
  rsvp: {
    enabled: true,
    attendanceOptions: ["Hadir", "Tidak Hadir", "Masih Ragu"],
  },

  // ---------------------------------------------------------------------------
  // 9. UCAPAN & DOA  (guestbook)
  // ---------------------------------------------------------------------------
  wishes: {
    enabled: true,
    // Ucapan contoh yang tampil sebelum ada kiriman tamu (boleh dikosongkan: [])
    seed: [
      {
        name: "Keluarga Besar",
        message:
          "Barakallahu lakuma wa baraka 'alaikuma. Semoga Iqbal & Siti menjadi keluarga sakinah, mawaddah, wa rahmah.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. AMPLOP DIGITAL / HADIAH  (set enabled:false untuk menyembunyikan)
  // ---------------------------------------------------------------------------
  gift: {
    enabled: true,
    note: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.",
    banks: [
      { bank: "BCA", number: "1370011709", holder: "Iqbal Fathur Rakhman" },
    ],
    qris: "", // ⬇️ TODO: path gambar QRIS, contoh "/images/qris.jpeg" (kosongkan jika tidak ada)
    address: {
      // Untuk kirim kado fisik (kosongkan recipient untuk menyembunyikan)
      recipient: "",
      detail: "",
    },
  },

  // ---------------------------------------------------------------------------
  // 11. WHATSAPP  (tombol konfirmasi via WA)
  // ---------------------------------------------------------------------------
  whatsapp: {
    // Nomor format internasional tanpa "+" dan tanpa spasi
    number: "6285921690985",
    contactName: "Iqbal Faturahman",
  },

  // ---------------------------------------------------------------------------
  // 12. FOOTER / PENUTUP
  // ---------------------------------------------------------------------------
  footer: {
    closing:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu.",
    thanks: "Atas kehadiran dan doa restunya, kami ucapkan terima kasih.",
    signOff: "Hormat kami, kedua mempelai beserta keluarga besar Bapak Sriwiyono dan keluarga besar Bapak Tjutju (Alm).",
  },
};

export default config;
