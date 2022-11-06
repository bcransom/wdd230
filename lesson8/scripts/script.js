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

//form submission date
//using the Current date functions already created
document.querySelector("#submission-date").value = fulldate;

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

//local storage dates
function lastVisit(){
    let message = "";
    const currentDate = Date.now();
    const priorDate = localStorage.getItem("lastVisit");
    const calculateDate = ((currentDate - priorDate)/86400000).toFixed(0);
    if (!priorDate){
        message = "This is your first visit";
    } else {
        message = `It has been ${calculateDate} days since last visit`;
    }
    localStorage.setItem("lastVisit", currentDate);
    document.querySelector(".visits").innerHTML = message;
}
lastVisit();