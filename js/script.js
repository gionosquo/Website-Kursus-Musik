document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dapatkan nama file saat ini untuk logika navigasi
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Mengambil 'index.html' atau 'kelas.html'
    const isKelasPage = page === 'kelas.html';
    const isHomePage = page === 'index.html' || page === '';

    // 2. Pilih semua elemen link (a) di halaman
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const text = this.innerText.trim(); // Mengambil teks tombol/link

            // --- LOGIKA UNTUK TOMBOL/NAVIGASI KE HALAMAN LAIN ---

            // A. Jika klik "Beranda" atau logo saat berada di halaman Kelas
            if ((href === '#home' || href === 'index.html' || text === 'Beranda') && isKelasPage) {
                e.preventDefault();
                window.location.href = 'index.html'; // Pindah ke halaman depan
            }

            // B. Jika klik "Kelas", "Lihat Kelas", atau "Cek Selengkapnya" saat di Beranda
            // Kita arahkan ke halaman kelas.html
            if ((text === 'Lihat Kelas' || text === 'Cek Selengkapnya') && isHomePage) {
                e.preventDefault();
                window.location.href = 'kelas.html';
            }

            // --- LOGIKA SCROLL HALAMAN (DAFTAR & PROGRAM) ---

            // C. Penanganan Tombol "Daftar" (Scroll ke Footer)
            // Karena di HTML tidak ada id="daftar", kita arahkan ke tag <footer>
            if (href === '#daftar') {
                e.preventDefault();
                const footer = document.querySelector('footer');
                if (footer) {
                    footer.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            // D. Penanganan Link Lokal (Scroll Halus)
            // Hanya berjalan jika target ID ada di halaman yang sama
            if (href.startsWith('#') && href !== '#') {
                const targetId = href.substring(1); // Hilangkan tanda #
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    // Sesuaikan offset minus header height (sekitar 80px)
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 3. Efek Aktif pada Navbar (Opsional - HTML kamu sudah menghandle ini, tapi ini untuk backup)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => {
        // Hapus kelas active dari semua, lalu tambahkan berdasarkan halaman
        if(isKelasPage && nav.innerText === 'Kelas') {
            document.querySelector('.nav-item.active')?.classList.remove('active');
            nav.classList.add('active');
        }
        if(isHomePage && nav.innerText === 'Beranda') {
            document.querySelector('.nav-item.active')?.classList.remove('active');
            nav.classList.add('active');
        }
    });
});