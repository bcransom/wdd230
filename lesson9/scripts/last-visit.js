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