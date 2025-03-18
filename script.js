const menuIcon = document.getElementById('menu-icon');  // Acessa o ícone de menu
const menu = document.getElementById('menu');  // Acessa o menu

// Evento para mostrar ou esconder o menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show'); // Alterna a classe 'show' para mostrar ou esconder o menu
});

// Ação para rolar suavemente até as seções ao clicar nos links
const menuLinks = document.querySelectorAll('.menu-link');  // Seleciona todos os links de menu
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão de navegação

        const targetId = e.target.getAttribute('href').substring(1); // Obtém o ID do destino
        const targetElement = document.getElementById(targetId); // Encontra o elemento com o ID correspondente
        
        const navHeight = document.querySelector('.navegacao').offsetHeight; // Obtém a altura da barra de navegação

        // Rola suavemente até a seção correspondente, considerando a altura da barra de navegação
        window.scrollTo({
            top: targetElement.offsetTop - navHeight, // Ajuste de acordo com a altura da barra de navegação
            behavior: 'smooth'  // Rolagem suave
        });

        // Fecha o menu após clicar em um link
        menu.classList.remove('show');
    });
});


function enviarMensagem(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value; 
    const mensagem = document.getElementById('mensagem').value;  
    const telefone = '5541997231866'; 
    
    const texto = `Olá, meu nome é ${nome} e ${mensagem}.`; 
    const mgsFormatada = encodeURIComponent(texto); 
    
    const url = `https://wa.me/${telefone}?text=${mgsFormatada}`;  
    
    window.open(url, '_blank'); 
}
