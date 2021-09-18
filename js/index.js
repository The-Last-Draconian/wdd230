let date = new Date();
let year = date.getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("lastUpdate").textContent = "Last Updated: " + document.lastModified;