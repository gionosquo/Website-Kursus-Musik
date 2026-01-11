# 🎵 Sol La Si Music Course Website

## 1. Judul Project
**Sol La Si Music Course Website**

---

## 2. Deskripsi Singkat
**Sol La Si Music Course** adalah sebuah *static website* responsif yang dirancang untuk lembaga kursus musik modern. Website ini bertujuan untuk memberikan informasi komprehensif mengenai program kursus (Piano, Vokal, Gitar, Saxophone, Drum), profil instruktur berpengalaman, jadwal latihan, serta memfasilitasi pendaftaran siswa baru secara online.

Proyek ini dikembangkan sebagai tugas akhir untuk mendemonstrasikan kemampuan *Front-End Web Development* dengan fokus pada desain antarmuka (UI/UX) yang bersih, interaktivitas pengguna (JavaScript DOM), dan struktur kode yang rapi.

---

## 3. Daftar Anggota Tim

| Nama Lengkap | NIM | Username GitHub | Peran / Tugas |
| :--- | :--- | :--- | :--- |
| [Gionosquo Marthzkiel] | [ISI_NIM] | [@gionosquo](https://github.com/gionosquo) | Project Manager, JS, UI Design (web prototype design) ,  HTML Structure (all pages), CSS Styling (all pages), Asset Managemen, |
| [Arnoldus F. U. Borung] | [240040073] | [@arnoldborung](https://github.com/arnoldborung-rgb) | - |
| [Nama Anggota 3] | [240040128] | [@atayakumara447] https://github.com/atayakumara447-source | - |


---

## 4. Teknologi yang Digunakan

Website ini dibangun menggunakan teknologi *native* untuk performa maksimal tanpa framework berat:

* **HTML5:** Struktur semantik untuk SEO dan aksesibilitas.
* **CSS3:** Flexbox, Grid, CSS Variables, dan Media Queries untuk responsivitas.
* **JavaScript (ES6+):** DOM Manipulation, Event Handling, dan `localStorage`.
* **Library & Aset Eksternal:**
    * [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Library animasi saat elemen di-scroll.
    * [Font Awesome 6](https://fontawesome.com/) - Ikon vektor untuk UI.
    * [Google Fonts](https://fonts.google.com/) - Tipografi (*Poppins* & *Playfair Display*).

---

## 5. Fitur Utama

1.  **Simulasi Login & Session (User Experience):**
    * Menggunakan `localStorage` browser untuk menyimpan nama pengguna.
    * Fitur *Greeting* personal ("Halo, [Nama]") di navbar setelah login.
    * Tombol Logout yang berfungsi.
2.  **Audio Player Interaktif:**
    * Fitur pemutar sampel suara alat musik (Piano, Gitar, Vokal, Saxophone, Drum) di halaman Kelas.
3.  **Informasi Jadwal Dinamis:**
    * Tabel jadwal latihan yang detail dengan pembagian sesi waktu.
    * Tampilan responsif (tabel berubah menjadi list kartu saat dibuka di HP).
4.  **Halaman Pendaftaran:**
    * Formulir input data siswa.
    * Notifikasi *pop-up* (alert) yang memanggil nama pendaftar secara personal setelah submit.
5.  **Navigasi & UI:**
    * *Active State* otomatis pada navbar.
    * Animasi halus (*fade-up*, *zoom-in*) pada setiap elemen halaman.

---

## 6. Struktur Folder

# Struktur Proyek Web Kursus Musik - Sollasi

```text
/Web Kursus Musik
│
├── index.html               # Halaman utama website (Wajib ada)
├── daftar.html              # Halaman pendaftaran
├── instruktur.html          # Halaman profil tim pengajar
├── kelas.html               # Halaman katalog kursus musik
├── login.html               # Halaman masuk akun
├── README.md                # Dokumentasi project di GitHub
│
├── /css                     # Folder untuk file CSS
│   ├── index-style.css      # Style utama halaman Beranda
│   ├── daftar-style.css     # Style khusus pendaftaran
│   ├── instruktur-style.css # Style khusus profil pengajar
│   ├── kelas-style.css      # Style khusus katalog kelas
│   └── login-style.css      # Style khusus halaman login
│
├── /js                      # Folder untuk file JavaScript
│   └── script.js            # File utama interaktivitas & navigasi
│
├── /media                   # Folder untuk gambar dan aset media
│   ├── /audio               # Sampel suara alat musik
│   │   ├── drum.mp3         # Audio sampel drum
│   │   ├── gitar.mp3        # Audio sampel gitar
│   │   ├── piano.mp3        # Audio sampel piano
│   │   ├── saxophone.mp3    # Audio sampel saxophone
│   │   └── vokal.mp3        # Audio sampel vokal
│   │
│   ├── /kelas               # Aset gambar instruktur & materi
│   │   ├── gambar-drum.jpg      # Foto profil kelas drum
│   │   ├── gambar-gitar.png.jpg # Foto profil kelas gitar
│   │   ├── gambar-piano.jpg     # Foto profil kelas piano
│   │   ├── gambar-saxophone.jpg # Foto profil kelas saxophone
│   │   ├── gambar-vocal.jpg     # Foto profil kelas vokal
│   │   ├── mr-abraham.png       # Foto instruktur Abraham
│   │   ├── mr-jacob.png         # Foto instruktur Jacob
│   │   ├── mr-randy.png         # Foto instruktur Randy
│   │   ├── mr-sam.png           # Foto instruktur Sam
│   │   ├── mr-varajh.png        # Foto instruktur Varajh
│   │   ├── ms-claren.png        # Foto instruktur Claren
│   │   ├── ms-lauren.png        # Foto instruktur Lauren
│   │   ├── ms-rose.png          # Foto instruktur Rose
│   │   └── ms-samantha.png      # Foto instruktur Samantha
│   │
│   ├── About_us.png         # Ilustrasi bagian Tentang Kami
│   ├── Logo-Atas-Bawah.png  # Logo untuk area footer
│   ├── Logo-Samping.png     # Logo untuk area header
│   └── Sollasi-Logo-White.png # Logo putih untuk hero banner
│
└── /lib                     # Folder untuk library eksternal
    └── (Kosong)
---
## 7. Cara Menjalankan Website
A. Akses Langsung (Online)
Website ini telah di-deploy menggunakan GitHub Pages dan dapat diakses melalui browser apapun tanpa instalasi.

Link: Lihat bagian "Tautan GitHub Pages" di bawah.

B. Menjalankan di Lokal (Localhost)
Untuk pengembangan atau pemeriksaan kode:

Pastikan Git dan Visual Studio Code sudah terinstall.

Clone repositori ini ke komputer Anda:

Bash
git clone [https://gionosquo.github.io/Website-Kursus-Musik/] (https://gionosquo.github.io/Website-Kursus-Musik/)
Buka folder proyek di VS Code.

Install ekstensi Live Server (oleh Ritwick Dey) di VS Code.

Klik kanan pada file index.html lalu pilih "Open with Live Server".

---
## 8. Tautan GitHub Pages
Klik tautan di bawah ini untuk melihat hasil akhir website:

👉 https://gionosquo.github.io/Website-Kursus-Musik/
