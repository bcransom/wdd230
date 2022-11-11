//fetch and return data from outside source
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.prophets.forEach(prophet => {displayProphets(prophet)});
}


//use fetched data in card element on page
function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthplace = document.createElement('p');
    let birthdate = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Change the textContent property of the p elements to contain the prophet's birthplace and birthdate
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
   portrait.setAttribute('src', prophet.imageurl);
   portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - #${prophet.order} Latter-day President`);
   portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthplace);
    card.appendChild(birthdate);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    // document.querySelector('div.cards').appendChild(card);
    cards.appendChild(card);
  };

  let data = getProphets();
  displayProphets(data);