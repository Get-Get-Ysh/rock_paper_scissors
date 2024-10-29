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
    let computerChoice;
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    
    if (random == 1) {
        computerChoice = "pierre"
        console.log(computerChoice);
        
    } else if (random == 2) {
        computerChoice = "feuille"
        console.log(computerChoice);
        
    } else if (random == 3) {
        computerChoice = "ciseaux"
        console.log(computerChoice);
        
    }

    console.log(computerChoice);
    return computerChoice
}


function getHumanChoice() {
    let humanChoice = prompt("Choose : pierre / feuille / ciseaux");
    console.log(humanChoice)
    return humanChoice
}


function playRound(computerChoice, humanChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;

    for (i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
    if (computerChoice === humanChoice) {
        humanScore += 0;
        computerScore += 0;
        console.log("Draw")
    } else if (computerChoice === "feuille" && humanChoice === "pierre" || computerChoice === "ciseaux" && humanChoice === "feuille" || computerChoice === "pierre" && humanChoice === "ciseaux" ) {
        computerScore++
        console.log("Computer wins");
        
    } else {
        humanScore++
        console.log("You win");
        
    }
    }
    console.log("Human : " + humanScore)
    console.log("Computer : " + computerScore);
    
}

playRound()




