var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result > p");
const r_div = document.getElementById("rock");
const p_div = document.getElementById("paper");
const s_div = document.getElementById("scissor");

function getCompChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}  
function conv(userChoiceret){
    if(userChoiceret=='r')
        userChoiceret = "Rock";
    else if(userChoiceret=='p')
        userChoiceret = "Paper";
    else 
        userChoiceret = "Scissor";
    return userChoiceret;
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = conv(userChoice) + " beats " + conv(compChoice) + ". You won!"
}
function lose(userChoice,compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = conv(userChoice) + " loses to " + conv(compChoice) + ". You lost!"
}
function draw(userChoice,compChoice){
    result_p.innerHTML =  "It is a draw!"
}
function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
                                
    }
}
r_div.addEventListener('click',function(){
    game("r");
})
p_div.addEventListener('click',function(){
    game("p");
})
s_div.addEventListener('click',function(){
    game("s");
})