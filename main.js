//Récupération des inputs

const inputs = document.querySelectorAll('input[type = "text"], input[type = "password"], input[type = "email"');
//Déclaration des variables pour chaque input
let pseudo, email, password, confirmPass;
// Récupération de la progress-bar pour le mot de passe
const progressBar = document.getElementById('progress-bar');
//Récupération du formulaire
const form = document.getElementById('form')



// Fonction générale pour toute la logique d'affichage des erreurs;
const errorDisplay = (tag, message, valid) => {
      const container = document.querySelector("." + tag + "-container")//récupération des div(-container) de façon dynamique;
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
      if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
            errorDisplay("email", "Le mail n'est pas valide!")
            email = null;
      } else {
            errorDisplay('email', "", true)
            email = value;
      }
}
const passwordChecker = (value) => {
      progressBar.classList = "";
      if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
            errorDisplay("password", " Minimum de 8 caractéres , une majuscule et un caractére spéciale");
            progressBar.classList.add("progressRed");
            password = null;
      } else if (value.length < 12) {
            progressBar.classList.add('progressBlue');
            errorDisplay('password', "", true);
            password = value;
      } else {
            progressBar.classList.add('progressGreen');
            errorDisplay('password', "", true)
            password = value;
      }
      if (confirmPass) confirmChecker(confirmPass)
}
const confirmChecker = (value) => {
      if (value !== password) {
            errorDisplay("confirm", "Les mots de passe ne correspondent pas");
            confirmPass = false
      } else {
            errorDisplay("confirm", "", true);
      }

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
});
// Envoie du formulaire
form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (pseudo && email && password && confirm) {
            data = {
                  pseudo,
                  email,
                  password

            };
            console.log(data)
            //Vider les inputs aprés envoie du formulaire
            inputs.forEach((input) => {
                  (input.value = "");
            })
            progressBar.classList = "";// Pour remmetre la progressBar à zéro;
            pseudo = null;
            email = null;
            password = null
      } else {
            alert("Veuillez remplir correctement le formulaire!")
      }
})