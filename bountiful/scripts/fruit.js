//fresh form drop down 
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// let dropdown = document.getElementById('fruit');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose fruit...';

// dropdown.addEventListener(defaultOption);
// dropdown.selectedIndex = 0;

localStorage.setItem("fname", "");

const cards = document.querySelector('.order-summary');

async function getFruit() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.fruit.forEach(fruit => {displayFruit(fruit)});
}

function displayFruit(fruit) {
    let card = document.createElement('section');
    let firstName = document.createElement('h3');
    let email = document.createElement('p');
    let phone = document.createElement('p');
    let fruit1 = document.createElement('p');
    let fruit2 = document.createElement('p');
    let fruit3 = document.createElement('p');
    // let carb = document.createElement('p');

    card.setAttribute('class', 'card');

    firstName.textContent = `${localStorage.getItem("fname")}`;
    fruit1.textContent = `${fruit.name}`
    // carb.textContent = `${fruit.nutritions.carbohydrates}`;

    card.appendChild(firstName);
    card.appendChild(fruit1);
    card.appendChild(carb);
   
    cards.appendChild(card);

};

let data = getFruit();
displayFruit(data);