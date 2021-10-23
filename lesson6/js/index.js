function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}


let date = new Date();
let day = date.getDate();
    let monthName = ["Jan", "Feb", "Mar", "April", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = monthName[date.getMonth()]; //got this code from the internet
let year = date.getFullYear();
document.getElementById("date").textContent = `${day} ${month}, ${year}`;



let dayNumber = date.getDay();
let element = document.getElementById("message");
    if (dayNumber == 5) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme")
    }