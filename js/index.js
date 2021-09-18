let date = new Date();
let year = date.getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("lastUpdate").textContent = "Last Updated: " + document.lastModified;

//this is copied from the Lab video. I don't quite understand it but I think I get the gist of how it works.