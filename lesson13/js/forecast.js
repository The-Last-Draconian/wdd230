
//date and time
const d = new Date();
const todayDayNumber = d.getDay();

//array of dates
const weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

//getting JSON data
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3170146&appid=757fdffc94f2ce34d65cf1834a8f1c4c&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

    
        let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;
            
            for (i=0; i < 24; i++) {
                let time = mylist[i].dt_txt;
                
                if (time.includes("18:00:00")) {
                    console.log("Found an entry with 18:00:00 in the time. It was report "+i+" from the mylist of 40");
                
                    forecastDayNumber += 1;
                    if (forecastDayNumber === 7) {forecastDayNumber = 0;}
                    let dayName = document.createElement("h3");
                    dayName.textContent = weekday[forecastDayNumber];

                    let temp = document.createElement("p");
                    temp.setAttribute("class", "temp")
                    temp.textContent = mylist[i].main.temp + "\xB0" + "F";

                    let iconcode = mylist[i].weather[0].icon;
                    let iconPath = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                    let icon = document.createElement("img");
                    icon.setAttribute("src", iconPath);

                    let desc = document.createElement("p");
                    desc.textContent = "Weather: " + mylist[i].weather[0].description;

                    let humidity = document.createElement("p");
                    humidity.textContent = "Humidity: " + mylist[i].main.humidity + "\45";

                    let theDay = document.createElement("div");
                    theDay.appendChild(dayName);
                    theDay.appendChild(temp);
                    theDay.appendChild(icon);
                    theDay.appendChild(desc);
                    theDay.appendChild(humidity);

                    document.getElementById("weather-forecast").appendChild(theDay);
                }
            }
    
    
    });