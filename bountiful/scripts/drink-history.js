//local storage drink history
function drinkHistory(){
    let message = "";
    const formSubmission = document.getElementById("email");
    const drinks = localStorage.length
    if (drinks === 0){
        message = "This is your first visit! Be sure to order one of our specialty drinks!";
    } else {
        message = `You have ordered #${drinks} of our specialty drinks!`;
    }
    localStorage.setItem("submission-date", formSubmission);
    document.querySelector(".drinks-ordered").innerHTML = message;
}
drinkHistory();