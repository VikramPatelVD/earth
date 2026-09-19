document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Close all other open answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer) {
                    ans.style.maxHeight = null;
                    ans.previousElementSibling.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });

            // Toggle current answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        });
    });

    // --- Go to Top and Go to Bottom Buttons ---
    const btnTop = document.getElementById('btnTop');
    const btnBottom = document.getElementById('btnBottom');

    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    btnBottom.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    // Show/Hide Top Button based on scroll position
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTop.style.opacity = "1";
            btnTop.style.pointerEvents = "auto";
        } else {
            btnTop.style.opacity = "0.5";
        }
    });

});