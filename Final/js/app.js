//function that stores the quotes and author
(function() {
    const quotes = [
        {
            quote:
               "2 Fast 2 Furious, 2003",
            author: "$236.3 Millions"
        },
        {
            quote:
               "Takers, 2010",
            author: "$69.10 Millions"
        },
        {
            quote:
               "Avengers: End Game, 2019",
            author: "$2.798 Billions"
        },
        {
            quote:
               "Captian America: The Winter Solider, 2014",
            author: "$714.2 Millions"
        },
        {
            quote:
               "The Town, 2010",
            author: "$154 Millions"
        },
        {
            quote:
               "Grownups, 2010",
            author: "$271.4 Millions"
        }
    ];

    const btn = document.getElementById("generate-btn");

    //Event for the button
    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });
})();