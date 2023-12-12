


let randomNumber1=Math.floor(Math.random() * 6)+1;
let randomNumber2=Math.floor(Math.random() * 6)+1;


let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')

let newSrc1 = `./images/dice${randomNumber1}.png`;
let newSrc2 = `./images/dice${randomNumber2}.png`;

img1.setAttribute('src', newSrc1);
img2.setAttribute('src', newSrc2);

let h1 = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    h1.textContent = '🚩Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    h1.textContent = 'Player 2 Wins!🚩';
} else {
    h1.textContent = 'It\'s a tie 🪢!';
}
