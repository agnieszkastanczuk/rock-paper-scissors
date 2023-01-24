let rock = 0;
let paper = 1;
let scissors = 2;
let lizard = 3;
let spock = 4;

let wins = 0;
let draws = 0;
let losses = 0;



function play(choice){
 
    //User choise and result:
    if(document.querySelector('body').classList.contains('classic')){

       //Computer choice:
    let computerChoice = Math.floor(Math.random()*3);
    document.getElementById('computer-choice').innerHTML = computerChoice;    
   
        if(choice == computerChoice){
            draws++;
            document.getElementById('result').innerHTML = "Draw!";
        }else if (choice == rock && computerChoice == scissors) {
            wins++;
            document.getElementById('result').innerHTML = "Rock beats scissors!";
        }else if (choice == scissors && computerChoice == rock) {
            wins++;
            document.getElementById('result').innerHTML = "Rock beats scissors!";
        }else if (choice == paper && computerChoice == rock) {
            wins++;
            document.getElementById('result').innerHTML = "Paper beats rock!";
        }else if (choice == rock && computerChoice == paper) {
            losses++;
            document.getElementById('result').innerHTML = "Paper beats rock!";
        }else if (choice == paper && computerChoice == scissors) {
            losses++;
            document.getElementById('result').innerHTML = "Scissors beats paper!";
        }else {
            wins++;
            document.getElementById('result').innerHTML = "Scissors beats paper!";
        }    

        comp(computerChoice);


    }else{
            //Computer choice:
         let computerChoice = Math.floor(Math.random()*5);
         document.getElementById('computer-choice').innerHTML = computerChoice;    
        
        if(choice == computerChoice){
             draws++;
             document.getElementById('result').innerHTML = "Draw!";
        }else if (choice == scissors && computerChoice == paper) {
             wins++;
             document.getElementById('result').innerHTML = "Scissors cuts paper!";
        }else if (choice == paper && computerChoice == scissors) {
             losses++;
             document.getElementById('result').innerHTML = "Scissors cuts paper!";
        }else if (choice == paper && computerChoice == rock) {
             wins++;
             document.getElementById('result').innerHTML = "Paper covers rock!";
        }else if (choice == rock && computerChoice == paper) {
             losses++;
             document.getElementById('result').innerHTML = "Paper covers rock!";
        }else if (choice == rock && computerChoice == lizard) {
             wins++;
             document.getElementById('result').innerHTML = "Rock crushes lizard!";
        }else if (choice == lizard && computerChoice == rock) {
            losses++;
            document.getElementById('result').innerHTML = "Rock crushes lizard!";
        }else if (choice == lizard && computerChoice == spock) {
            wins++;
            document.getElementById('result').innerHTML = "Lizard poisons Spock!";
        }else if (choice == spock && computerChoice == lizard) {
            losses++;
            document.getElementById('result').innerHTML = "Lizard poisons Spock!";
        }else if (choice == spock && computerChoice == scissors) {
            wins++;
            document.getElementById('result').innerHTML = "Spock smashes scissors!";
        }else if (choice == scissors && computerChoice == spock) {
            losses++;
            document.getElementById('result').innerHTML = "Spock smashes scissors!";
        }else if (choice == scissors && computerChoice == lizard) {
            wins++;
            document.getElementById('result').innerHTML = "Scissors decapitates lizard!";
        }else if (choice == lizard && computerChoice == scissors) {
            losses++;
            document.getElementById('result').innerHTML = "Scissors decapitates lizard!";                         
        }else if (choice == lizard && computerChoice == paper) {
            wins++;
            document.getElementById('result').innerHTML = "Lizard eats paper!";
        }else if (choice == paper && computerChoice == lizard) {
            losses++;
            document.getElementById('result').innerHTML = "Lizard eats paper!";     
        }else if (choice == paper && computerChoice == spock) {
            wins++;
            document.getElementById('result').innerHTML = "Paper disproves Spock!";
        }else if (choice == spock && computerChoice == paper) {
            losses++;
            document.getElementById('result').innerHTML = "Paper disproves Spock!";
        }else if (choice == spock && computerChoice == rock) {
            wins++;
            document.getElementById('result').innerHTML = "Spock vaporizes rock!";            
        }else if (choice == rock && computerChoice == spock) {
            losses++;
            document.getElementById('result').innerHTML = "Spock vaporizes rock!";
        }else if (choice == scissors && computerChoice == rock) {
            wins++;
            document.getElementById('result').innerHTML = "Rock crushes scissors!";                                                          
        }else {
             losses++;
             document.getElementById('result').innerHTML = "Rock crushes scissors!";
         } 
        
         comp(computerChoice);
 
    }
    
    //Wins, draws and losses in HTML:
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('draws').innerHTML = draws;
    document.getElementById('losses').innerHTML = losses;
    

}


//Computer choice info:

function comp(computerChoice) {
    if(computerChoice == 0) {
        document.getElementById('computer-choice').innerHTML = 'Rock!';
    }else if(computerChoice == 1) {
        document.getElementById('computer-choice').innerHTML = 'Paper!';
    }else if(computerChoice == 2) {
        document.getElementById('computer-choice').innerHTML = 'Paper!';    
    }else if(computerChoice == 3) {
        document.getElementById('computer-choice').innerHTML = 'Lizard!';                
    }else {
        document.getElementById('computer-choice').innerHTML = 'Spock!';
    };
}


// //toggle button:

let toggle = document.querySelector('.toggle-button');
let toggleIdent = document.querySelector('.toggle-button-ident');

toggle.addEventListener('click', function(){
document.querySelector('body').classList.toggle('classic');
document.querySelector('body').classList.toggle('bbt');

if(toggleIdent.style.left === '25px'){
toggleIdent.style.left = '2px';
} else {
toggleIdent.style.left = '25px';
}

displayLizardSpock();
});


function displayLizardSpock(){
    if(document.querySelector('body').classList.contains('classic')){
    document.querySelector('#lizard').style.display= "none";
    document.querySelector('#spock').style.display= "none";
    document.querySelector('#rules').style.display= "none";
    }else{
    document.querySelector('#lizard').style.display= "inline";
    document.querySelector('#spock').style.display= "inline";
    document.querySelector('#rules').style.display= "grid";

    }
}