document.addEventListener("DOMContentLoaded", function () {
    // Código para controle de áudio
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");

    // Tenta tocar a música assim que a página é carregada
    audio.play().catch(error => {
        console.log('Autoplay foi bloqueado pelo navegador.');
    });

    playButton.addEventListener("click", function () {
        audio.play();
    });

    pauseButton.addEventListener("click", function () {
        audio.pause();
    });

    // Código para controle do campo de email
    const emailInput = document.getElementById('email');
    const emailLabel = document.getElementById('label-email');

    emailInput.addEventListener('focus', () => {
        emailLabel.style.display = 'none';
    });

    emailInput.addEventListener('blur', () => {
        if (!emailInput.value) {
            emailLabel.style.display = 'block';
        }
    });
});

//Botão do topo

window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 150) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }

        // Função para rolar suavemente para o topo da página quando o botão é clicado
        function topFunction() {
            document.body.scrollTop = 0; // Para navegadores da web
            document.documentElement.scrollTop = 0; // Para IE e Edge
        }