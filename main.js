//Récupération des inputs

const inputs = document.querySelectorAll('input[type = "text"], input[type = "password"], input[type = "email"');

// Je crée un évenement pour tous les inputs
// je crée des fonctions checker pour vérifier les données
const pseudoChecker = (value) => {
      const pseudoContainer = document.querySelector('.pseudo-container');

      const errorDisplay = document.querySelector('.pseudo-container > span');

      if (value.length > 0 && (value.length < 3 || value.length > 20)) {

            pseudoContainer.classList.add('error');

            errorDisplay.textContent = "Le pseudo doit contenir entre 3 et 20 caractéres !"

      } else if (!value.match(/^[a-zA-z0-9_.-]*$/)) {
            pseudoContainer.classList.add('error');
            errorDisplay.textContent = " Le pseudo ne dois pas contenir de caractéres spéciaux"
      } else {
            pseudoContainer.classList.remove('error');
            errorDisplay.textContent = "";
      }

};
const emailChecker = (value) => {
      console.log(value)
}
const passwordChecker = (value) => {
      console.log(value)
}
const confirmChecker = (value) => {
      console.log(value)
}

inputs.forEach((input) => {
      input.addEventListener('input', (e) => {
            switch (e.target.id) {
                  case "pseudo":
                        pseudoChecker(e.target.value)
                        break;
                  case "email":
                        emailChecker(e.target.value)
                        break;
                  case "password":
                        passwordChecker(e.target.value)
                        break;
                  case "confirm-password":
                        confirmChecker(e.target.value)
                        break;

                  default: null

            }

      })
})