
//date and time
const d = new Date();
const todayDayNumber = d.getDay();

//array of dates
const weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

//getting JSON data
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=757fdffc94f2ce34d65cf1834a8f1c4c&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        //name of city
        //document.getElementById("town-name").innerHTML = weatherInfo.city.name; Not today, Bear Lake is not Fish Haven
        
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
                    let iconPath = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                    let theIcon = document.createElement("img");
                    theIcon.setAttribute("src", iconPath);

                    let theDay = document.createElement("div");
                    theDay.appendChild(theDayName);
                    theDay.appendChild(theTemp);
                    theDay.appendChild(theIcon);

                    document.getElementById("weather-forecast").appendChild(theDay);
                }
            }
    
    
    });




//getting JSON data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//fetching the URL and making a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        //Array function based off Virtual Lab example
         const townData = jsonObject["towns"];
        //Filter out relevant towns
        const rightTowns = townData.filter((town) => town.name === "Preston" || town.name === "Soda Springs" || town.name === "Fish Haven");
         rightTowns.forEach((town) => {
             if (town.name === "Fish Haven") {
                //Populating the card content
                let card = document.createElement("div");
                let h2 = document.createElement("h2");
                let para1 = document.createElement("p");
                let para2 = document.createElement("p");
                let para3 = document.createElement("p");

                //Adding values to the content
                h2.textContent = "Upcoming Events";
                para1.textContent = `${town.events[0]}`;
                para2.textContent = `${town.events[1]}`;
                para3.textContent = `${town.events[2]}`;
                
                
                //ordering the content
                card.appendChild(h2);
                card.appendChild(para1);
                card.appendChild(para2);
                card.appendChild(para3);

                //exporting the content to the cards div
                document.querySelector("section.events").appendChild(card);
             }
        });
    });