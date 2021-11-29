//Town Data for Homepage
//storing the JSON file
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
             //Populating the card content
             let card = document.createElement("section");
             let text = document.createElement("section");
             let h2 = document.createElement("h2");
             let motto = document.createElement("p");
             let paragraphs = document.createElement("div");
             let yearFounded = document.createElement("p");
             let currentPopulation = document.createElement("p");
             let averageRainfall = document.createElement("p");
             let image = document.createElement("img");

             //Adding values to the content
             h2.textContent = `${town.name}`;
             motto.textContent = `${town.motto}`;
             motto.setAttribute("class", "motto");
             yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
             currentPopulation.textContent = `Current Population: ${town.currentPopulation}`;
             averageRainfall.textContent = `Average Rainfall: ${town.averageRainfall}`;
             
             //setting the images because WHY
             if (town.name === "Fish Haven") {
             image.setAttribute("src", "images/fish-haven.600.jpg");
             image.setAttribute("alt", `${town.name} - ${town.photo}`);
             } else if (town.name === "Soda Springs") {
             image.setAttribute("src", "images/soda-springs.600.jpg");
             image.setAttribute("alt", `${town.name} - ${town.photo}`);  
             } else if (town.name === "Preston") {
             image.setAttribute("src", "images/preston.600.jpg");
             image.setAttribute("alt", `${town.name} - ${town.photo}`);
             }
             //ordering the content
             card.appendChild(text);
              text.appendChild(h2);
              text.appendChild(motto);
              text.appendChild(paragraphs);
               paragraphs.appendChild(yearFounded);
               paragraphs.appendChild(currentPopulation);
               paragraphs.appendChild(currentPopulation);
               paragraphs.appendChild(averageRainfall);
             card.appendChild(image);

             //exporting the content to the cards div
             document.querySelector("div.cards").appendChild(card);

        });
    });