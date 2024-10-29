
/* 
Jeu :
Côté ordi :
L'ordi "choisit" une valeur (Pierre ou Feuille ou Ciseaux)
Il retourne une des 3 valeurs AU HASARD

Cöté joueur :
A l'aide d'un prompt(), demander au joueur de jouer Pierre Feuille Ou Ciseau


Règles / Rules :

Pierre > Ciseaux / Rock > Scissors
Ciseaux > Feuille / Scissors > Paper
Feuille > Pierre / Paper > Rock

Le jeu se déroule en 5 manches

*/

function getComputerChoice() {
    let computerChoice;
    // var to obtain a random number between 1 and 3
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    // each random value is associated with a string (1 = rock, 2 = paper and 3 = scissors)
    if (random == 1) {
        computerChoice = "pierre"
        // console.log(computerChoice);
        
    } else if (random == 2) {
        computerChoice = "feuille"
        // console.log(computerChoice);
        
    } else if (random == 3) {
        computerChoice = "ciseaux"
        // console.log(computerChoice);
        
    }

    console.log(computerChoice);
    return computerChoice
}


function getHumanChoice() {
    let humanChoice = prompt("Choose : pierre / feuille / ciseaux");
    // lower case method applied to player's input
    return humanChoice.toLocaleLowerCase()
}

/* Instead of creating another function to play multiple rounds,
 I simply added a for loop to emulate rounds */
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
    } else if (computerChoice === "feuille" && humanChoice === "pierre" ||
         computerChoice === "ciseaux" && humanChoice === "feuille" || 
         computerChoice === "pierre" && humanChoice === "ciseaux" ) {
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




