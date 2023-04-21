let randomNumber1 = Math.floor(Math.random() * 6)+ 1;
let randomImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomImage;
document.getElementsByClassName("left-dice")[0].setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("right-dice")[0].setAttribute("src", randomImageSource2);


if (randomNumber2 > randomNumber1)
    document.getElementsByTagName("h2")[0].innerHTML = 'Player 2 wins';
else if (randomNumber2 < randomNumber1)
    document.getElementsByTagName("h2")[0].innerHTML = 'Player 1 wins';
else
    document.getElementsByTagName("h2")[0].innerHTML = 'draw';