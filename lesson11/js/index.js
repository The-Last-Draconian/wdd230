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


//Last Visited code
localStorage.setItem("lastDate", day);
let lastDate = localStorage.getItem("lastDate");
let lastVisit = day - lastDate;
document.getElementById("last-visit").textContent = `Last visited ${lastVisit} days ago`;



function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}