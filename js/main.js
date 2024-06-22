document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active-menu');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const cardTemplate = document.getElementById('card-template').content;
  
    // Number of cards to repeat
    const numberOfCards = 3; // Adjust as needed
  
    for (let i = 0; i < numberOfCards; i++) {
      const newCard = cardTemplate.cloneNode(true);
      cardContainer.appendChild(newCard);
    }
  });
  