// get JSON data:
$.getJSON("https://raw.githubusercontent.com/warehouse-fashions/developer-exercise/master/data/recommendations.json", function(data) {

    // collect necessary data into arrays:
    "use strict";
    let images = [];
    let names = [];
    let prices = [];
    let links = [];
    let currency = data.hits[0].currency;

    for (let i = 0; i < data.hits.length; i++) {
        if (data.hits[i].image) {
            images.push(data.hits[i].image.link);
            names.push(data.hits[i].product_name);
            prices.push(data.hits[i].price);
            links.push(data.hits[i].link);
        }
    }

    // make product cards with images (with room to add other data):
    function makeCards(imageUrl) {
        document.getElementById("container").innerHTML +=
            '<div class="product-card">' +
            '<img class="image" src=' + imageUrl + '>' +
            '<a href="" class="product-link"><p class="product-name"></p></a>' +
            '<p class="price"></p>' +
            '</div>'
    }

    // add product names to cards:
    function addNames(name) {
        var spotsForNames = document.getElementsByClassName("product-name");
        for (var i = 0; i < spotsForNames.length; i++) {
            spotsForNames[i].innerHTML += name[i];
        }
    }

    // add prices to cards:
    function addPrices(price) {
        var spotsForPrices = document.getElementsByClassName("price");
        for (var i = 0; i < spotsForPrices.length; i++) {
            if(currency == "GBP"){
                spotsForPrices[i].innerHTML += "£" + price[i] + ".00";
            }
        }
    }

    // add links to product pages:
    function addLinks(link) {
        var linkSpots = document.getElementsByClassName("product-link");
        for (var i = 0; i < linkSpots.length; i++) {
            linkSpots[i].setAttribute("href", link);
        }
    }

    // put it all together to make a product card for each product with the correct data:
    images.forEach(makeCards);
    addNames(names);
    addPrices(prices);
    addLinks(links);

});