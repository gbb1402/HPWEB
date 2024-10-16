document.addEventListener('DOMContentLoaded', () => {
	RecupererJson();
});

async function RecupererJson() {
	const reponse = await fetch('https://hp-api.onrender.com/api/characters');
	const listePersos = await reponse.json();
	afficherPersos(listePersos.slice(0, 10));
}

function afficherPersos(persos) {
	const htmlPersos = document.querySelector('.characters');
	htmlPersos.innerHTML = '';
	persos.forEach(perso => {
		const html = `
          <figure class="${getCouleur(perso.house)}">
              <img src="${perso.image}" alt="${perso.name}" />
              <figcaption>${perso.name}</figcaption>
          </figure>
      `;
		htmlPersos.insertAdjacentHTML('beforeend', html);
	});
}

function getCouleur(maison) {
	switch (maison) {
		case 'Gryffindor': return 'rouge';
		case 'Hufflepuff': return 'jaune';
		case 'Ravenclaw': return 'bleu';
		case 'Slytherin': return 'vert';
	}
}

document.querySelectorAll('.houses img').forEach(image => {
    image.addEventListener('click', () => {
        const maison = image.alt;
        filtreMaison(maison);
    });
});

function filtreMaison(maison) {
    fetch('https://hp-api.onrender.com/api/characters')
        .then(reponse => reponse.json())
        .then(persos => {
            const listePersos = persos.filter(perso => perso.house === maison);
            afficherPersos(listePersos.slice(0, 10));
        })
        .catch(error => console.error('Error filtering characters by house:', error));
}
