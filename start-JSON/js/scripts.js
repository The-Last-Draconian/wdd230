//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5821086&units=imperial&appid=757fdffc94f2ce34d65cf1834a8f1c4c";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((cheyenne) => {
    //Once it comes back, display it to the console.
    console.log(cheyenne);
    
    document.getElementById("place").innerHTML = cheyenne.name;
    document.getElementById("currentTemp").innerHTML = cheyenne.main.temp;
    document.getElementById("windSpeed").innerHTML = cheyenne.wind.speed;

    const iconcode = cheyenne.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/"+ iconcode + ".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src = icon_path;


 }); //end of "then" fat arrow function

 


 //appid=757fdffc94f2ce34d65cf1834a8f1c4c
 //city key we're using is Cheyenne: id=5821086



