document.addEventListener('DOMContentLoaded', function() {

    /* --- PAGE IDENTIFICATION & SESSION CHECK --- */
    const path = window.location.pathname;
    let page = path.split("/").pop() || 'index.html';
    console.log("Sol La Si System: Page " + page + " active.");

    const savedUser = localStorage.getItem('sollasi_user');
    const loginBtnText = document.querySelector('.btn-login-text');

    if (savedUser && loginBtnText) {
        loginBtnText.innerHTML = `<i class="fa-solid fa-user-circle"></i> ${savedUser}`;
        loginBtnText.href = "#";
        
        loginBtnText.addEventListener('click', function(e) {
            e.preventDefault();
            if(confirm("Halo " + savedUser + ", apakah kamu ingin keluar (Logout)?")) {
                localStorage.removeItem('sollasi_user');
                window.location.reload();
            }
        });
    }

    /* --- GLOBAL NAVIGATION HANDLER --- */
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href') || '';
        const text = link.innerText.trim().toLowerCase();

        // Home / Logo Logic
        if (link.classList.contains('btn-back') || text.includes('beranda') || href === 'index.html') {
            if (page !== 'index.html') {
                e.preventDefault();
                window.location.href = 'index.html';
            }
            return;
        }

        // Login Logic
        if (href.includes('login.html') || text === 'masuk') {
            if (!localStorage.getItem('sollasi_user') && page !== 'login.html') {
                e.preventDefault();
                window.location.href = 'login.html';
            }
            return;
        }

        // Registration Logic
        if (href.includes('daftar.html') || text.includes('daftar')) {
            if (page !== 'daftar.html') {
                e.preventDefault();
                window.location.href = 'daftar.html';
            }
            return;
        }

        // Classes Logic
        if (href.includes('kelas.html') || text.includes('lihat kelas')) {
            if (page !== 'kelas.html') {
                e.preventDefault();
                window.location.href = 'kelas.html';
            }
            return;
        }

        // Smooth Scroll Logic
        if (href.startsWith('#') && href !== '#') {
            const target = document.getElementById(href.substring(1));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });

    /* --- LOGIN FORM HANDLER --- */
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const usernameInput = document.getElementById('username');
            const nickname = usernameInput ? usernameInput.value.split(' ')[0] : "Sobat Musik";

            const btn = this.querySelector('button');
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Menghubungkan...';
            
            setTimeout(() => {
                localStorage.setItem('sollasi_user', nickname);
                alert('Berhasil Masuk! Selamat datang, ' + nickname);
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    /* --- REGISTRATION FORM HANDLER --- */
    const regForm = document.querySelector('.form-card form');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const namaPendaftar = this.querySelector('input[type="text"]').value;
            const btn = this.querySelector('button');
            
            btn.disabled = true;
            btn.innerHTML = 'Mengirim...';
            
            setTimeout(() => {
                alert('Halo ' + namaPendaftar + '!\n\nPendaftaran kamu di Sol La Si Music Course BERHASIL.\nAdmin kami akan segera menghubungi kamu untuk jadwal kelas.');
                this.reset();
                btn.disabled = false;
                btn.innerHTML = 'Daftar Sekarang';
            }, 1500);
        });
    }
});

/* --- GLOBAL INSTRUMENT PLAYER --- */
function playInstrument(audioId, btn) {
    const allAudios = document.querySelectorAll('audio');
    const targetAudio = document.getElementById(audioId);
    const icon = btn.querySelector('i');
    
    const progressId = "progress" + audioId.replace("audio", "");
    const progressBar = document.getElementById(progressId);

    allAudios.forEach(aud => {
        if (aud !== targetAudio) {
            aud.pause();
            aud.currentTime = 0;
            const otherIcons = document.querySelectorAll('.play-icon i');
            otherIcons.forEach(i => i.classList.replace('fa-pause', 'fa-play'));
        }
    });

    if (targetAudio.paused) {
        targetAudio.play();
        icon.classList.replace('fa-play', 'fa-pause');
    } else {
        targetAudio.pause();
        icon.classList.replace('fa-pause', 'fa-play');
    }

    targetAudio.ontimeupdate = function() {
        if (progressBar && targetAudio.duration) {
            const percentage = (targetAudio.currentTime / targetAudio.duration) * 100;
            progressBar.style.width = percentage + "%";
        }
    };

    targetAudio.onended = function() {
        icon.classList.replace('fa-pause', 'fa-play');
        if (progressBar) progressBar.style.width = "0%";
    };
}