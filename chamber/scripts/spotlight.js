//fetch and return data from outside source
const requestURL = 'json/directory.json';
const goldmembers = document.querySelector('.gold-member');


async function getMembers() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.members.forEach(member => {displayMembers(member)});
}

const filterMembers = jsonObject ["members"].filter(member => member.membership === "gold");


function displayGold (member) {
    let spotlight = document.createElement('div');
    let h3  = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');


}

