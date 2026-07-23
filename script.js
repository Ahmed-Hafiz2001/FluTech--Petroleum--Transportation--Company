// ============================================
// script.js - الملف الرئيسي
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ====== تفعيل الرابط النشط ======
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // ====== تأثير التمرير على النافبار ======
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(6, 14, 24, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 22, 40, 0.95)';
            }
        });
    }

    console.log('🚀 FluTech Website Loaded!');
});