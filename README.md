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
| **Gion** (Kamu) | [ISI_NIM] | [@gionosquo](https://github.com/gionosquo) | Project Manager, Fullstack Logic (JS), UI Design |
| [Nama Anggota 2] | [ISI_NIM] | [@username] | Content Writer, HTML Structure (Instruktur & Kelas) |
| [Nama Anggota 3] | [ISI_NIM] | [@username] | CSS Styling (Layouting & Responsive), Asset Management |
| [Nama Anggota 4] | [ISI_NIM] | [@username] | Quality Assurance, Testing, Documentation |

> *Catatan: Silakan sesuaikan peran di atas dengan pembagian tugas tim yang sebenarnya.*

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

Berikut adalah susunan direktori proyek berdasarkan kondisi repository saat ini:

```text
/ (Root Directory)
│
├── css/                      # Folder untuk file CSS
│   ├── daftar-style.css      # Style halaman Pendaftaran
│   ├── index-style.css       # Style halaman Beranda
│   ├── instruktur-style.css  # Style halaman Instruktur
│   ├── kelas-style.css       # Style halaman Kelas
│   └── login-style.css       # Style halaman Login
│
├── js/                       # Folder untuk file JavaScript
│   └── script.js             # File utama interaktivitas (Navigasi, Session, Animasi)
│
├── lib/                      # Folder untuk library eksternal (jika ada)
│
├── media/                    # Folder untuk gambar dan aset media
│   ├── audio/                # Sampel audio alat musik
│   │   ├── drum.mp3
│   │   ├── gitar.mp3
│   │   ├── piano.mp3
│   │   ├── saxophone.mp3
│   │   └── vokal.mp3
│   │
│   ├── kelas/                # Aset gambar untuk halaman Kelas & Instruktur
│   │   ├── gambar-drum.jpg
│   │   ├── gambar-gitar.png.jpg
│   │   ├── gambar-piano.jpg
│   │   ├── gambar-saxophone.jpg
│   │   ├── gambar-vocal.jpg
│   │   ├── mr-abraham.png
│   │   ├── mr-jacob.png
│   │   ├── mr-randy.png
│   │   ├── mr-sam.png
│   │   ├── mr-varajh.png
│   │   ├── ms-claren.png
│   │   ├── ms-lauren.png
│   │   ├── ms-rose.png
│   │   └── ms-samantha.png
│   │
│   ├── About_us.png          # Gambar ilustrasi About
│   ├── Logo-Atas-Bawah.png   # Logo untuk Footer
│   ├── Logo-Samping.png      # Logo untuk Header
│   └── Sollasi-Logo-White.png# Logo putih untuk Hero Banner
│
├── daftar.html               # Halaman Pendaftaran
├── index.html                # Halaman Utama (Wajib ada)
├── instruktur.html           # Halaman Profil Instruktur
├── kelas.html                # Halaman Daftar Kelas
├── login.html                # Halaman Login
└── README.md                 # Dokumentasi Project di GitHub

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
