//Last Updated Date 
document.getElementById("last-modified").innerHTML = `<span class="highlight">Last Updated: ${document.lastModified}</span>`;

//Current Year Date
document.getElementById("current-year").innerHTML = new Date().getFullYear();

//Create three variables that hold references to the input, button, 
//and list elements using const.
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Create an click event listener for the Add Chapter button using 
//addEventListener and an anonymous function.
button.addEventListener('click', function() {

    //if block to check if the input is blank then do nothing
    if (input.value === ""){
        return false;
    } else {
        const myItem = input.value;
        input.value = '';
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
        
        listItem.appendChild(listText);
        listItem.appendChild(listBtn);

        listText.textContent = myItem;
        listBtn.textContent = `✗ Remove ${listText.textContent}`;

        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        })

        input.focus();
        
        return true;
    }

})