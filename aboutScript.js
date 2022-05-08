const logo = document.getElementById('navLogo');
const homeMenu = document.getElementById('homeMenu');

const buttonThree = document.getElementById('button-three');
const buttonFour = document.getElementById('button-four');

const arrowOne = document.getElementById('arrowGifOne');
const arrowTwo = document.getElementById('arrowGifTwo'); 

const realMarius = document.getElementById('realMarius');

logo.onmouseover = () => {
    homeMenu.style.display = "inline";
}

logo.onmouseout = () => {
    homeMenu.style.display = "none";
}

buttonThree.onmousedown = () => {
    buttonThree.style.backgroundColor = "grey";
}

buttonThree.onmouseup = () => {
    buttonThree.style.backgroundColor = "#99A799";
}

buttonFour.onmousedown = () => {
    buttonFour.style.backgroundColor = "grey";
}

buttonFour.onmouseup = () => {
    buttonFour.style.backgroundColor = "#99A799";
}

buttonThree.onmouseover = () => {
    arrowOne.style.visibility = 'visible';
}

buttonThree.onmouseleave = () => {
    arrowOne.style.visibility = 'hidden';
}

buttonFour.onmouseover = () => {
    arrowTwo.style.visibility = 'visible';
}

buttonFour.onmouseleave = () => {
    arrowTwo.style.visibility = 'hidden';
}

buttonThree.onclick = () => {
    realMarius.src = "imgs/Bewerbungsfoto Marius.jpg";
}

buttonFour.onclick = () => {
    realMarius.src = "imgs/Marius mit Hund.jpg";
}