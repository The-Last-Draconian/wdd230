//storing the JSON file
const requestURL = "https://the-last-draconian.github.io/wdd230/lesson13/json/members.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
         const memberCards = jsonObject["members"];
         memberCards.forEach((member) => {
             //Populating the card content
             let card = document.createElement("div");
             let h3 = document.createElement("h3");
             let p = document.createElement("p");
             let a = document.createElement("a");

             //Adding values to the content
             card.setAttribute("class", `${member.subscription}`)
             h3.textContent = `${member.name}`;
             p.textContent = `${member.phone}`;
             a.setAttribute("href", `${member.url}`);
             a.textContent = "Website";

             //ordering the content
             card.appendChild(h3);
             card.appendChild(p);
             card.appendChild(a);

             //exporting the content to the cards div
             document.querySelector("section#directory").appendChild(card);

        });
    });



