document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a[href^='#']"); 
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

function enviarMensagem(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value; 
    const mensagem = document.getElementById('mensagem').value;  
    const telefone = '5541997525244'; 
    
    const texto = `Olá, meu nome é ${nome} e ${mensagem}.`; 
    const mgsFormatada = encodeURIComponent(texto); 
    
    const url = `https://wa.me/${telefone}?text=${mgsFormatada}`;  
    
    window.open(url, '_blank'); 
}
