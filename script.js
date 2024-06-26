function ajouterFilm() {
    var formulaire = document.querySelector('form');
    var inputs = formulaire.getElementsByTagName('input');
    var select = formulaire.querySelector('select');
    var textarea = formulaire.querySelector('textarea');
  
    var nouvelElement = document.createElement("div");
  
    var nomFilm = inputs[0].value;
    var nomCinema = inputs[1].value;
    var categorie = select.value;
    var dateHeure = inputs[2].value;
    var critique = textarea.value;
  
    nouvelElement.innerHTML = `
      <h2>${nomFilm}</h2>
      <p><strong>Cinéma :</strong> ${nomCinema}</p>
      <p><strong>Catégorie :</strong> ${categorie}</p>
      <p><strong>Date et heure :</strong> ${dateHeure}</p>
      <p><strong>Critique :</strong> ${critique}</p>
    `;
  
    if (categorie === "aventure") {
      nouvelElement.style.border = "2px solid green";
    } else if (categorie === "comédie") {
      nouvelElement.style.border = "2px solid blue";
    } else if (categorie === "horreur") {
      nouvelElement.style.border = "2px solid red";
    }

    var filmDetails = document.getElementById("film-details");
    filmDetails.appendChild(nouvelElement);
    formulaire.reset();
  }


  var nomFilmInput = document.getElementById("nom-film");

nomFilmInput.addEventListener('keyup', function() {
  var inputValue = nomFilmInput.value;
  var inputLength = inputValue.length;

  if (inputLength < 5) {
    nomFilmInput.classList.remove('input-green');
    nomFilmInput.classList.add('input-red');
  } else {
    nomFilmInput.classList.remove('input-red');
    nomFilmInput.classList.add('input-green');
  }
});