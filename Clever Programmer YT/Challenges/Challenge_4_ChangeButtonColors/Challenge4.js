var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for(let i=0;i<all_buttons.length;i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if(buttonThingy.value === "red") {
        buttonRed();
    } else if(buttonThingy.value === "green") {
        buttonGreen();
    } else if(buttonThingy.value === "reset") {
        buttonColorReset();
    } else if(buttonThingy.value === "random") {
        buttonrandomColors();
    }
    // console.log(buttonThingy.value);
}

function buttonRed() {
    for(let i=0;i<all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);       //classList.remove("btn-primary") it will remove the primary btn 
        all_buttons[i].classList.add("btn-danger");                         //this line will change all the btns into red color
    }
}

function buttonGreen() {
    for(let i=0;i<all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);       //classList.remove("btn-primary") it will remove the primary btn 
        all_buttons[i].classList.add("btn-success");                         //this line will change all the btns into red green
    }
}

function buttonColorReset() {
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);                //this is reverting back all the orignial colors 
    }
}

function buttonrandomColors() {
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    
    for(let i=0;i<all_buttons.length;i++){
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}