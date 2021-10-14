const list = document.querySelector("ul");

document.getElementById("addchapter").addEventListener("click", function() {
    let input = document.getElementById("favchap").value;
    console.log(input);
    if (input !== "") {
        const newButton = document.createElement("button");
        newButton.innerHTML = "\u274C";

        const newListItem = document.createElement("li");
        newListItem.textContent = input;
        newListItem.appendChild(newButton);

        document.getElementById("list").appendChild(newListItem);
        
        newButton.addEventListener("click", function() {
            list.removeChild(newListItem);
            /*I just want to say that the above line took
            WAY TOO LONG TO WRITE!!! I swear I wracked my 
            brains for ages trying to figure out how to
            work this. In the end I realized it was super
            obvious. Sheesh.*/
        });


        document.getElementById("favchap").value = "";
    }

});
