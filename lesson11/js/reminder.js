let number = date.getDay();
let message = document.getElementById("message");
    if (number == 5) {
        message.classList.add("showme");
    } else {
        message.classList.add("hideme");
    }
