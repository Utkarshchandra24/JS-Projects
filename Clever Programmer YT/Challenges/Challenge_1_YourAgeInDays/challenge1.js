//alert("Hello");
//console.log("Hello");

//Challenge 1: Your age in Days


function ageindays()
{
    
var birthyear = prompt("What year were you born...  Good friend?")
var ageindayss = (2018 - birthyear)*365;
var h1 = document.createElement("h1");
var textAnswer = document.createTextNode("You are " + ageindayss + " Days Old")

h1.setAttribute('id','ageindays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

//console.log(ageindayss);


}

function reset()
{
    document.getElementById('ageindays').remove();

}




