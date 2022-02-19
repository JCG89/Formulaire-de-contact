//Récupération des inputs

const inputs = document.querySelectorAll('input[type = "text"], input[type = "password"], input[type = "email"');
// Fonction générale pour toute la logique d'affichage des erreurs;

let pseudo, email, password, confirm;

const errorDisplay = (tag, message, valid) => {
      const container = document.querySelector("." + tag + "-container")//récupération des tag de façon dynamique;
      const span = document.querySelector('.' + tag + '-container >span ');

      if (!valid) {
            container.classList.add('error');
            span.textContent = message;
      } else {
            container.classList.remove('error');
            span.textContent = message
      }

}

// Je crée un évenement pour tous les inputs
// je crée des fonctions checker pour vérifier les données
const pseudoChecker = (value) => {

      if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractéres");
            // Si les données sont invalides
            pseudo = null;

      } else if (!value.match(/^[a-zA-z0-9_.-]*$/)) {
            errorDisplay("pseudo", " Le pseudo ne doit pas contenir de caractéres spéciaux");
            pseudo = null;
      } else {
            errorDisplay("pseudo", "", true)
            // Si les données sont valides 
            pseudo = value;
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