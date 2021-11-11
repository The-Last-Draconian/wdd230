//I'm going to start leaving myself comments in the code because I'm too scatterbrained to remember anything right now
//storing the JSON file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//fetching the URL and making a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        //Array function based off Virtual Lab example
         const prophetCards = jsonObject["prophets"];
         prophetCards.forEach((prophetCard) => {
             //Populating the card content
             let card = document.createElement("section");
             let h2 = document.createElement("h2");
             let birthdate = document.createElement("p");
             let birthplace = document.createElement("p");
             let image = document.createElement("img");

             //Adding values to the content
             h2.textContent = `${prophetCard.name} ${prophetCard.lastname}`;
             birthdate.textContent = `Date of birth: ${prophetCard.birthdate}`;
             birthplace.textContent = `Place of Birth: ${prophetCard.birthplace}`;
             image.setAttribute("src", prophetCard.imageurl);
             image.setAttribute("alt", `${prophetCard.name} ${prophetCard.lastname} - ${prophetCard.order}`);

             //ordering the content
             card.appendChild(h2);
             card.appendChild(birthdate);
             card.appendChild(birthplace);
             card.appendChild(image);

             //exporting the content to the cards div
             document.querySelector("div.cards").appendChild(card);

        });
    });



