document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const nav = document.querySelector('.navegacao');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        menu.classList.toggle('show');
        overlay.classList.toggle('show'); 

        if (menu.classList.contains('show')) {
            menuIcon.innerHTML = '&times;'; 
        } else {
            menuIcon.innerHTML = '&#9776;';
        }
    }

    menuIcon.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);  

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const navHeight = nav.offsetHeight; 

                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });

                if (window.innerWidth <= 768) {
                    toggleMenu(); 
                }
            }
        });
    });
    overlay.addEventListener('click', () => {
        toggleMenu();
    });
});

function enviarMensagem(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value; 
    const mensagem = document.getElementById('mensagem').value;  
    const telefone = '5541997231866'; 
    
    const texto = `Olá, meu nome é ${nome}. ${mensagem}.`; 
    const mgsFormatada = encodeURIComponent(texto); 
    
    const url = `https://wa.me/${telefone}?text=${mgsFormatada}`;  
    
    window.open(url, '_blank'); 
}
