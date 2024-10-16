// script.js
const charactersContainer = document.querySelector('.characters');

const fetchCharacters = async () => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const characters = await response.json();
    
    // Limiter aux 12 premiers personnages
    const limitedCharacters = characters.slice(0, 12);
    
    // Nettoyer l'affichage des personnages statiques
    charactersContainer.innerHTML = '';
    
    // Insérer les personnages dynamiques
    limitedCharacters.forEach(character => {
      const characterElement = `
        <figure class="perso__left">
          <img src="${character.image}" alt="${character.name}" />
          <figcaption>${character.name}</figcaption>
        </figure>
      `;
      charactersContainer.innerHTML += characterElement;
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des personnages :', error);
  }
};

// Appeler la fonction pour charger les personnages au chargement de la page
fetchCharacters();
