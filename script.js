
//defining variable
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
let characterImage = document.getElementById('char-img');
let charDescription = document.getElementById('char-description');
let skillOne = document.getElementById('skillOne');
let skillTwo = document.getElementById('skillTwo');
let skillThree = document.getElementById('skillThree');
let skillFour = document.getElementById('skillFour');

//button click effect
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
    charDescription.innerHTML = 'Casual Marius has his strengths in his empathy and creativity. He gets a power-up when listening to music.'
    skillOne.innerHTML = 'Open-minded';
    skillTwo.innerHTML = 'Creative';
    skillThree.innerHTML = 'Inspirable';
    skillFour.innerHTML = 'Musical';
}

buttonOne.onclick = () => {
    characterImage.src="imgs/Marius Sprite.gif";
    charDescription.innerHTML = 'Business Marius is an allrounder who can pick up any skill up to a certain level. Her performs best if supported by a teammate.'
    skillOne.innerHTML = 'Get things done mentality';
    skillTwo.innerHTML = 'Quick learner / High will to learn';
    skillThree.innerHTML = 'Teamplayer';
    skillFour.innerHTML = '100% committment to the company/product';
}
