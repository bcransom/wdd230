//fetch and return data from outside source
const requestURL = 'https://bcransom.github.io/wdd230/lesson9/json/directory.json';
const cards = document.querySelector('.directory-cards');

async function getMembers() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.members.forEach(member => {displayMembers(member)});
}

//use fetched data in card/grid element on page
function displayMembers(member) {
     // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');


    // Change the textContent property of the elements to contain the appropriate information from the json data file
    h2.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
   logo.setAttribute('src', member.logo);
   logo.setAttribute('alt', `Logo of ${member.name}`);
   logo.setAttribute('loading', 'lazy');

   // Add/append the section(card) with the h2 element
   card.appendChild(h2);
   card.appendChild(logo);
   card.appendChild(address);
   card.appendChild(phone);
   card.appendChild(website);

   cards.appendChild(card);
};

let data = getMembers();
displayMembers(data);