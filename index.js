var randomNumber1 = Math.floor(Math.random()*6)+1;

// another way to set the value ; 
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 === randomNumber2 )
{
  document.querySelector("h1").textContent="DRAW !! 🎲";
}
else if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Win 🎲";
}
else {
document.querySelector("h1").textContent="Player 2 Win 🎲";
}
