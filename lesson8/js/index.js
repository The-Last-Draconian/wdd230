/* Menu code */
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}



/* Date code */
let date = new Date();
let day = date.getDate();
    let monthName = ["Jan", "Feb", "Mar", "April", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = monthName[date.getMonth()]; //got this code from the internet
let year = date.getFullYear();
document.getElementById("date").textContent = `${day} ${month}, ${year}`;

/*let dayNumber = date.getDay();
let element = document.getElementById("message");
    if (dayNumber == 5) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    }*/

/* Last Visited code */

localStorage.setItem("lastDate", day);
let lastDate = localStorage.getItem("lastDate");
let lastVisit = day - lastDate;
document.getElementById("last-visit").textContent = `Last visited ${lastVisit} days ago`;



/* Lazy Loading code */

let images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    let src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

let imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 150px 0px"
};

let imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            entry.target.src = entry.target.dataset.src;
            entry.target.removeAttribute("data-src");
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});





