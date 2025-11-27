// Adiciona a rolagem suave ao clicar nos links do menu

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão do link
        e.preventDefault();

        // Obtém o ID da seção alvo (ex: #about, #education)
        const targetId = this.getAttribute('href');
        
        // Encontra o elemento alvo
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Rola suavemente para o elemento
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Se você tiver um header fixo, talvez queira ajustar a posição final:
            /*
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            */
        }
    });
});

// Exemplo de código para lidar com o envio do formulário (apenas no Front-end)
const contactForm = document.getElementById('contact-form');//Seleciona e retorna o elemento HTML cujo atributo id é contact-form

if (contactForm) {
    contactForm.addEventLi/('submit', function(e) {//Anexa uma função de callback (o segundo argumento) a ser executada sempre que o evento submit ocorrer no elemento contactForm. O function (e) é a função principal que contém a lógica de manipulação do envio do formulário. Ela recebe o objeto de Evento (e) como argumento.
        e.preventDefault();//É o primeiro comando dentro da função anônima. Ele impede o comportamento padrão do navegador de recarregar ou navegar para outra página após o envio do formulário.
        alert('Mensagem enviada com sucesso!!');//Exibe uma caixa de diálogo de alerta com a mensagem especificada para o usuário.
        contactForm.reset();//Limpa todos os campos de entrada do formulário
    });
}