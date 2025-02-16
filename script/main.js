document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('bg-video');
    video.oncanplaythrough = function() {
        document.body.style.visibility = 'visible';
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelectorAll('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const activeLink = document.querySelector('.nav-item.active');

    const esconder = () => {
        const links = document.querySelectorAll('.nav-item');
        let hide = true;

        links.forEach(link => {
            if (link === activeLink) {
                hide = false;
            }
            if (hide) {
                link.classList.add('hidden');
            }
        });
    }

    esconder();

    navToggle.forEach(toggle => {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('active');

            if (navbar.classList.contains('active')) {
                document.querySelectorAll('.nav-item').forEach(link => {
                    link.classList.remove('hidden');
                });
            } else {
                esconder();
            }
        });
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                esconder();
            }
        });
    });

    // Manter o estado ao redimensionar a janela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            document.querySelectorAll('.nav-item').forEach(link => {
                link.classList.remove('hidden');
            });
        } else {
            esconder();
        }
    });
});


