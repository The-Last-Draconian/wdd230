let dayNumber = date.getDay();
let element = document.getElementById("message");
    if (dayNumber == 5) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    }
