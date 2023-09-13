function rpsGame(yourChoice) {
    console.log(yourChoice);

    // console.log(yourChoice.src);    //This give the reference to the object it's source

    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer Choice=",botChoice);
    
    // console.log(botChoice);
    // alert(botChoice);
    //console.log(humanChoice);           //This gives the id of the image
    
    results = decideWinner(humanChoice,botChoice);  //returns to us an array eg: [0,1] or [1,0] or [0.5,1]
    console.log(results);
    
    message = finalMessage(results);    // it will return "You Won" or "You Lost" or "You Tied"
    console.log(message);
    
    rpsFrontEnd(yourChoice.id,botChoice,message);               //message will need to return a dictionary {'message': 'You won','color':'green'}
}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourChoice,compChoice) {
    var rpsDatabase = {
        'rock': {'rock':0.5,'paper':0,'scissors':1},
        'paper': {'rock':1,'paper':0.5,'scissors':0},
        'scissors': {'rock':0,'paper':1,'scissors':0.5}
    };

    var yourScore = rpsDatabase[yourChoice][compChoice];
    var compScore = rpsDatabase[compChoice][yourChoice];

    return [yourScore,compScore];
}

function finalMessage([yourScore,compScore]) {
    if(yourScore===0) {
        return {'message':"You Lost", "color":"red"};
    } else if(yourScore===0.5) {
        return {"message":"You Tied", "color":"yellow"};
    } else {
        return {"message":"You Won","color":"green"};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage) {
    var imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    }

    //removing all the images 
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);

}