document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('bg-video');
    video.oncanplaythrough = function() {
        document.body.style.visibility = 'visible';
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const iconPath = document.querySelector('#icon-path');
    
    // Caminhos dos ícones
    const pathHamburger = "M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"; // Caminho do hambúrguer
    const pathClose = "M18 6L6 18M6 6L18 18"; // Caminho do X
    
    // Inicializar ícone de hambúrguer com caminho padrão
    iconPath.setAttribute('d', pathHamburger);
    
    // Toggle do menu mobile
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            iconPath.setAttribute('d', pathClose);
        } else {
            iconPath.setAttribute('d', pathHamburger);
        }
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                iconPath.setAttribute('d', pathHamburger);
            }
        });
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            iconPath.setAttribute('d', pathHamburger);
        }
    });
});
