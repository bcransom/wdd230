//fresh form drop down 
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let dropdown = document.getElementById('fruit');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose fruit...';

dropdown.addEventListener(defaultOption);
dropdown.selectedIndex = 0;

async function getFruit() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.fruit.forEach(fruit => {displayFruit(fruit)});
}

