
//date and time
const d = new Date();
const todayDayNumber = d.getDay();

//array of dates
const weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

//getting JSON data
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=757fdffc94f2ce34d65cf1834a8f1c4c&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        //name of city
        document.getElementById("town-name").innerHTML = weatherInfo.city.name;
        
        //weather summary
        document.getElementById("desc").innerHTML = weatherInfo.list[0].weather[0].description;
        document.getElementById("current-temp").innerHTML = weatherInfo.list[0].main.temp;
        document.getElementById("high-temp").innerHTML = weatherInfo.list[0].main.temp_max;
        document.getElementById("humidity").innerHTML = weatherInfo.list[0].main.humidity;
        document.getElementById("windspeed").innerHTML = weatherInfo.list[0].wind.speed;
    
        let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;
            
            for (i=0; i < mylist.length; i++) {
                let time = mylist[i].dt_txt;
                
                if (time.includes("18:00:00")) {
                    console.log("Found an entry with 18:00:00 in the time. It was report "+i+" from the mylist of 40");
                
                    forecastDayNumber += 1;
                    if (forecastDayNumber === 7) {forecastDayNumber = 0;}
                    let theDayName = document.createElement("span");
                    theDayName.textContent = weekday[forecastDayNumber];

                    let theTemp = document.createElement("p");
                    theTemp.textContent = mylist[i].main.temp + "\xB0" + "F";

                    let iconcode = mylist[i].weather[0].icon;
                    let icondesc = mylist[i].weather[0].main;
                    let theIcon = document.createElement("img");
                    if (icondesc === "Clear") {
                        theIcon.setAttribute("src", "weather-images/sunny.png");
                    } else if (icondesc === "Clouds") {
                        theIcon.setAttribute("src", "weather-images/cloudy.png");
                    } else if (icondesc === "Drizzle") {
                        theIcon.setAttribute("src", "weather-images/rainy.png");
                    } else if (icondesc === "Rain") {
                        theIcon.setAttribute("src", "weather-images/rainy.png");
                    } else if (icondesc === "Thunderstorm") {
                        theIcon.setAttribute("src", "weather-images/rainy.png");
                    } else if (icondesc === "Snow") {
                        theIcon.setAttribute("src", "weather-images/snowy.png");
                    }
                        /*if (iconcode === "01d" || "01n") {
                            theIcon.setAttribute("src", "weather-images/sunny.png");
                        } else if (iconcode === "02d" || "02n") {
                            theIcon.setAttribute("weather-images/partly-cloudy.png");
                        } else if (iconcode === ("src", "03d" || "04d") || ("03n" || "04n")) {
                            theIcon.setAttribute("src", "weather-images/cloudy.png");
                        } else if (iconcode === ("09d" || "10d") || ("50d" || "11d")) {
                            theIcon.setAttribute("src", "weather-images/rainy.png");
                        } else if (iconcode === ("09n" || "10n") || ("50n" || "11n")) {
                            theIcon.setAttribute("src", "weather-images/rainy.png");
                        } else {
                            theIcon.setAttribute("src", "weather-images/snowy.png");
                        }*/
                    

                    let theDay = document.createElement("div");
                    theDay.appendChild(theDayName);
                    theDay.appendChild(theTemp);
                    theDay.appendChild(theIcon);

                    document.getElementById("weather-forecast").appendChild(theDay);
                }//if
            }//for
    
    
    });


