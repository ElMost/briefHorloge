// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let curentTime = new Date();

//Stocker l'heure , minute , seconde  dans des variables
let hours = curentTime.getHours();
let minutes = curentTime.getMinutes();
let seconds = curentTime.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let hr = (hours * 60 * 60 + minutes * 60 + seconds) * (360 / 43200);
let min = (minutes * 60 + seconds) * 0.1;
let sec = seconds * 6;

AIGUILLESEC.style.transform = `rotate(` + sec + `deg)`;
AIGUILLEMIN.style.transform = `rotate(` + min + `deg)`;
AIGUILLEHR.style.transform = `rotate(` + hr + `deg)`;

// Déplacer les aiguilles
function demarrerLaMontre() {
  sec += 6;
  min += 0.1;
  hr += 360 / 43200;

  AIGUILLESEC.style.transform = `rotate(` + sec + `deg)`;
  AIGUILLEMIN.style.transform = `rotate(` + min + `deg)`;
  AIGUILLEHR.style.transform = `rotate(` + hr + `deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
