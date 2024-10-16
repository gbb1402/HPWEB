document.addEventListener('DOMContentLoaded', () => {
	RecupererJson();
});

async function RecupererJson() {
	const reponse = await fetch('https://hp-api.onrender.com/api/characters');
	const persos = await reponse.json();
	afficherPersos(persos.slice(0, 10));
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
