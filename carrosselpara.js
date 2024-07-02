// Seleciona todas as imagens do carrossel
const images = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

// Função para exibir a próxima imagem no carrossel
function showNextImage() {
  // Esconde a imagem atual
  images[currentImageIndex].style.display = 'none';
  // Incrementa o índice para mostrar a próxima imagem
  currentImageIndex = (currentImageIndex + 1) % images.length;
  // Exibe a próxima imagem
  images[currentImageIndex].style.display = 'block';
}

// Exibe a primeira imagem
images[currentImageIndex].style.display = 'block';

// Define intervalo para trocar as imagens a cada 3 segundos (3000 milissegundos)
setInterval(showNextImage, 3000);