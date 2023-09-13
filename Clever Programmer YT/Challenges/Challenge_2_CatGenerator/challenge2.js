//Challenge 2:Cat Generator

function generateCat()
{
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    // image.src = "https://thecatapi.com/";
    // image.src = "x-api-key=live_93fZcHQIkYwoi1C4IBrOov4pdKIuR1I1NGN0eo57hUKmOp3Sp84ALnBa26XuJQBD";
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=";
    div.appendChild(image);


    // alert("Hello test");

}