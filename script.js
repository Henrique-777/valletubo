document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Obtém o ID do link (remove o "#" do href)
        const targetId = this.getAttribute('href').substring(1);
        
        // Verifica se o elemento alvo existe na página
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Ajusta o scroll suave, considerando a altura da navbar fixa
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Deslocamento para o topo da seção
                behavior: 'smooth'
            });
        }
    });
});

