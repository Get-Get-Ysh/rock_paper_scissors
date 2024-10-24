// console.log("Hello, world!");
/* 
Jeu :
Côté ordi :
L'ordi "choisit" une valeur (Pierre ou Feuille ou Ciseaux)
Il retourne une des 3 valeurs AU HASARD

Cöté joueur :
A l'aide d'un prompt(), demander au joueur de jouer Pierre Feuille Ou Ciseau

Règles :

Pierre > Ciseaux
Ciseaux > Feuille
Feuille > Pierre

*/




function getComputerChoice() {
    let min = 1;
    let max = 4;
    let random = Math.floor(Math.random() * (max - min)) + min;
if (random === 1) {
    console.log("Pierre");
} else if (random === 2) {
    console.log("Feuille");
} else {
    console.log("Ciseaux");
}    
}

function getUserChoice() {
    let userChoice = prompt("Pierre Feuille Ciseaux ?");
    console.log(userChoice);
    return userChoice
}

function compareChoices() {
    if (random === 1 && userChoice === 1) {
        console.log("Draw");
    }
}


getComputerChoice()
getUserChoice()



