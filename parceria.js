document.addEventListener('DOMContentLoaded', () => {
    const cardContainers = document.querySelectorAll('.card-container2');
  
    let cardsData = [
      {
        imgSrc1: './assets/cards/cruzeirinho.png',
        imgSrc2: './assets/cards/release.png',
        link1: '',
        link2: '#',
      },
      {
        imgSrc1: './assets/cards/tambores.png',
        imgSrc2: './assets/cards/release.png',
        link1: '#',
        link2: '#',
      },


      {
        imgSrc1: './assets/cards/mestreamelia.png',
        imgSrc2: './assets/cards/release.png',
        link1: '#',
        link2: '#',
      },
      {
        imgSrc1: './assets/cards/guto.png',
        imgSrc2: './assets/cards/release.png',
        imgAlt1: 'Image for Card 2',
        imgAlt2: 'Image 2 for Card 2',
        link1: '#',
        link2: '#',
      },
    ];
  
    // Ordena as imagens em ordem alfabética com base no imgSrc1

    cardsData.sort((a, b) => {
      const imgSrcA = a.imgSrc1.toLowerCase();
      const imgSrcB = b.imgSrc1.toLowerCase();
      return imgSrcA.localeCompare(imgSrcB);
    });
  
    function createCard(cardData) {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.background = '#000'; // Aplica fundo preto a todos os cards
  
      const imgLink1 = document.createElement('a');
      imgLink1.href = cardData.link1;
  
      const img1 = document.createElement('img');
      img1.src = cardData.imgSrc1;
      img1.alt = cardData.imgAlt1 || 'Image 1';
      imgLink1.appendChild(img1);
      card.appendChild(imgLink1);
  
      const imgLink2 = document.createElement('a');
      imgLink2.href = cardData.link2;
  
      const img2 = document.createElement('img');
      img2.src = cardData.imgSrc2;
      img2.alt = cardData.imgAlt2 || 'Image 2';
      img2.style.width = '80px';
      img2.style.paddingLeft = '20px';
      imgLink2.appendChild(img2);
      card.appendChild(imgLink2);
  
      return card;
    }
  
    function renderCards(container) {
      container.innerHTML = '';
  
      const windowWidth = window.innerWidth;
      let cardsPerRow = 3;
  
      if (windowWidth <= 768) {
        cardsPerRow = 1;
      } else if (windowWidth <= 1200) {
        cardsPerRow = 2;
      }
  
      const cardChunks = chunkArray(cardsData, cardsPerRow);
  
      cardChunks.forEach(chunk => {
        const row = document.createElement('div');
        row.className = 'card-row';
  
        chunk.forEach(cardData => {
          const card = createCard(cardData);
          row.appendChild(card);
        });
  
        container.appendChild(row);
      });
    }
  
    function chunkArray(array, chunkSize) {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    }
  
    cardContainers.forEach(container => renderCards(container));
  
    window.addEventListener('resize', () => {
      cardContainers.forEach(container => renderCards(container));
    });
  });
  