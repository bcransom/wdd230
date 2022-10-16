// Hamburger Button Toggle Menu
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// Current Date
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

//Last Updated Date 
document.getElementById("last-modified").innerHTML = `<span class="highlight">Last Updated: ${document.lastModified}</span>`;

//Current Year Date
document.getElementById("current-year").innerHTML = new Date().getFullYear();