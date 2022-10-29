// Hamburger Button Toggle Menu
function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("open");
    document.getElementById('hamburger-btn').classList.toggle("open");
}

const x = document.getElementById('hamburger-btn')
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

//Banner show and hide 
const newDate = new Date();
const dateName = newDate.getDay();
console.log(dateName)
if (dateName === 1 || dateName === 2) {
    document.querySelector(".banner").classList.add("showbanner");
    console.log(dateName);
} else {
    if (document.querySelector(".banner").classList.contains("showbanner")){
        document.querySelector(".banner").classList.remove("showbanner");
        document.querySelector(".banner").classList.add("hidebanner")
    } else {
        document.querySelector(".banner").classList.add("hidebanner");
    }
    console.log(dateName);
};

