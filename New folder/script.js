// ===============================================
// INTERAKSI 1: Dark / Light Mode Toggle
// ===============================================
const themeToggleBtn = document.querySelector('#theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// ===============================================
// INTERAKSI 2: Menu Hamburger untuk Tampilan Ponsel
// ===============================================
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===============================================
// INTERAKSI 3: Filter Kategori Proyek
// ===============================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Ubah status tombol aktif
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Tampilkan atau sembunyikan kartu proyek
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===============================================
// INTERAKSI 4: Animasi Skill Bar saat di-Scroll
// ===============================================
const skillSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.skill-bar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => bar.classList.add('animate'));
        }
    });
}, { threshold: 0.3 });

observer.observe(skillSection);

// ===============================================
// INTERAKSI 5: Validasi Formulir Kontak
// ===============================================
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah halaman reload

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    const nameError = document.querySelector('#name-error');
    const emailError = document.querySelector('#email-error');
    const messageError = document.querySelector('#message-error');
    const formSuccess = document.querySelector('#form-success');

    // Reset pesan error sebelumnya
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.style.display = 'none';

    let isValid = true;

    // Cek input nama
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Nama tidak boleh kosong!';
        isValid = false;
    }

    // Cek input email
    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        emailError.textContent = 'Masukkan alamat email yang valid!';
        isValid = false;
    }

    // Cek input pesan
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Pesan wajib diisi!';
        isValid = false;
    }

    // Jika semua valid
    if (isValid) {
        formSuccess.style.display = 'block';
        contactForm.reset();
    }
});