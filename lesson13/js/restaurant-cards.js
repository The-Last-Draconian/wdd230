//Town Data for Homepage
//storing the JSON file
const requestURL = 'https://the-last-draconian.github.io/wdd230/lesson13/json/members.json';

//fetching the URL and making a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        //Array function based off Virtual Lab example
         const restaurantData = jsonObject["members"];
        //Filter out relevant data
        const rightMembers = restaurantData.filter((member) => member.type === "restaurant");
         rightMembers.forEach((member) => {
             //Populating the card content
             let card = document.createElement("div");
             let h3 = document.createElement("h3");
             let desc = document.createElement("p");
             let img = document.createElement("img");
             let link = document.createElement("a");

             //Adding values to the content
             h3.textContent = `${member.name}`;
             desc.textContent = `${member.desc}`;
             img.setAttribute("src", `images/businesses/${member.photo}`);
             link.textContent = "Visit site";
             link.setAttribute("href", `${member.url}`);
             
             
             //ordering the content
             card.appendChild(h3);
             card.appendChild(desc);
             card.appendChild(img);
             card.appendChild(link);
              

             //exporting the content to the restaurants section
             document.querySelector("section#restaurants").appendChild(card);

        });
    });