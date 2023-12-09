const animationContainer = document.querySelector('.animation-container');
const mainSection = document.getElementById('main-section');

document.addEventListener('DOMContentLoaded', function () {

    //checa se a animação ja foi executada uma vez para o usuario

    if(localStorage.getItem('animationPlayed') === null) {

        // evento que aciona a animaçao quando a pagina carrega
        animationContainer.classList.add('show');
        
        // definindo funçao pra rolar a pagina de forma lenta e suave
        function scrollTo(element, to, duration) {
            if (duration <= 0) return;
            const difference = to - window.scrollY;
            const perTick = difference / duration * 10;

            setTimeout(function () {
                window.scroll(0, window.scrollY + perTick);
                if (window.scrollY === to) return;
                scrollTo(element, to, duration - 10);
            }, 1);
        }
        
        // da um fade no container depois de um certo tempo
        setTimeout(() => {
            animationContainer.classList.remove('show');
            
            // rola pra baixo da tela em um elemento especifico, mas rola lentamente
            scrollTo(mainSection, window.innerHeight, 2000); // Adjust the duration (e.g., 3000 milliseconds) for slower scrolling
            setTimeout(() => {animationContainer.style.maxHeight = 0}, 3000);
        }, 3000);

        /*
        seta um item no localStorage depois que a animação foi executada uma vez, 
        desta forma, quando o usuario voltar a pagina,
        não vai precisar ver a animação novamente
        */

        localStorage.setItem('animationPlayed', JSON.stringify(true));

    } else {
        // se a animação ja foi executada uma vez, esconde o container da animação
        animationContainer.style.display = 'none';
    }
});


