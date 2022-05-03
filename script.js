
//defining variable
const arrowOne = document.getElementById('arrowGifOne');
const arrowTwo = document.getElementById('arrowGifTwo');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
//Menulogo
const logo = document.getElementById('navLogo');
const home = document.getElementById('homeMenu');
//character
let characterImage = document.getElementById('char-img');
let charDescription = document.getElementById('char-description');
//skills
let skillOne = document.getElementById('skillOne');
let skillTwo = document.getElementById('skillTwo');
let skillThree = document.getElementById('skillThree');
let skillFour = document.getElementById('skillFour');
let traitOne = document.getElementById('traitOne');
let traitTwo = document.getElementById('traitTwo');
let traitThree = document.getElementById('traitThree');
let traitFour = document.getElementById('traitFour');
let traitFive = document.getElementById('traitFive');
let traitSix = document.getElementById('traitSix');
let coinOne = document.getElementById('coinOne');
let coinTwo = document.getElementById('coinTwo');
let coinThree = document.getElementById('coinThree');
let coinFour = document.getElementById('coinFour');
let coinFive = document.getElementById('coinFive');
let coinSix = document.getElementById('coinSix');


//logo hover effect

logo.onmouseover = () => {
    homeMenu.style.display = "inline";
}

logo.onmouseout = () => {
    homeMenu.style.display = "none";
}


//button click effect
buttonOne.onmouseover = () => {
    arrowOne.style.visibility = 'visible';
}

buttonOne.onmouseleave = () => {
    arrowOne.style.visibility = 'hidden';
}

buttonTwo.onmouseover = () => {
    arrowTwo.style.visibility = 'visible';
}

buttonTwo.onmouseleave = () => {
    arrowTwo.style.visibility = 'hidden';
}

buttonOne.onmousedown = () => {
    buttonOne.style.backgroundColor = "grey";
}

buttonOne.onmouseup = () => {
    buttonOne.style.backgroundColor = "#99A799";
}

buttonTwo.onmousedown = () => {
    buttonTwo.style.backgroundColor = "grey";
}

buttonTwo.onmouseup = () => {
    buttonTwo.style.backgroundColor = "#99A799";
}

//Content switch between Business and Casual Marius
buttonTwo.onclick = () => {
    characterImage.src="imgs/Marius Sprite 2.gif";
    charDescription.innerHTML = 'Casual Marius has his strengths in his empathy and creativity. He gets a power-up when listening to music. He has the ability to hyperfocus on a topic which he loves.'
    skillOne.innerHTML = 'Open-minded and curious';
    skillTwo.innerHTML = 'Creative and imaginative';
    skillThree.innerHTML = 'Fits into every team';
    skillFour.innerHTML = 'Easily inspirable';
    traitOne.innerHTML = 'Communication';
    coinOne.src = 'imgs/three_coins.png';
    traitTwo.innerHTML = 'Structured Workflow';
    coinTwo.src = 'imgs/two_coins.png';
    traitThree.innerHTML = 'Relationship Building';
    coinThree.src = 'imgs/two_coins.png';
    traitFour.innerHTML = 'Initiative';
    coinFour.src = 'imgs/three_coins.png';
    traitFive.innerHTML = 'Persuasion';
    coinFive.src = 'imgs/three_coins.png';
    traitSix.innerHTML = 'Time Management';
    coinSix.src = 'imgs/two_coins.png';
}

buttonOne.onclick = () => {
    characterImage.src="imgs/Marius Sprite.gif";
    charDescription.innerHTML = 'Business Marius is an allrounder who can pick up any skill in a short amount of time. He performs best if supported by a teammate. Strategic topics give him a boost while repeating to Dos slow him down.'
    skillOne.innerHTML = 'Get things done mentality';
    skillTwo.innerHTML = 'Quick learner / High will to learn';
    skillThree.innerHTML = 'Teamplayer';
    skillFour.innerHTML = '100% committment to the company/product';
    traitOne.innerHTML = 'Project Management';
    coinOne.src = 'imgs/three_coins.png';
    traitTwo.innerHTML = 'Business Development';
    coinTwo.src = 'imgs/three_coins.png';
    traitThree.innerHTML = 'Strategic Planning';
    coinThree.src = 'imgs/two_coins.png';
    traitFour.innerHTML = 'Marketing / Sales';
    coinFour.src = 'imgs/three_coins.png';
    traitFive.innerHTML = 'Analytical Methods';
    coinFive.src = 'imgs/two_coins.png';
    traitSix.innerHTML = 'Team Lead';
    coinSix.src = 'imgs/two_coins.png';
}

