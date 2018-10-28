
//start Featured products JSON data..

$(document).ready(function(){
  // start making request to server.
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const singerDetails = JSON.parse(xhr.responseText);
      //calling function for creating DOM elements
      renderHTML(singerDetails);
    }
};
// End of server request.

//open request
xhr.open('GET', 'data/recommendations.json');
//sending data back
xhr.send();

//function to render HTML elements list...

function renderHTML(data) {
  let statusHTML = '<ul class="container product-wrapper">';
  for (let i = 0; i < 6; i++) {
    let imageLink = {};
    statusHTML += '<li class="product-wrapper__item">';
    statusHTML += `<a href="` + data.hits[i].link + `" target="_blank">`;
    //checking img key exist or not
    // if("image" in data.hits[i]) 
    if(typeof data.hits[i].image !== "undefined") {
      imageLink.url   = data.hits[i].image.link;
      imageLink.title = data.hits[i].image.title;
      imageLink.alt   = data.hits[i].image.alt;
      statusHTML += `<img class="product-wrapper__item__img" src="` + imageLink.url + `" alt="` + imageLink.alt + `" title="` + imageLink.title + `">`;
      } else 
      {
        statusHTML += '<img class="product-wrapper__item__img" src="img/warehouse_03294847_1.jpg" alt="BEAUTIFUL ASYMMETRIC DRESS" title="BEAUTIFUL ASYMMETRIC DRESS">';
      }
      statusHTML += '<div class="centered product-overlay">';
      statusHTML += '<h3 class="font_small"><span class="fa fa-heart-o"></span>Save for later </h3>';
      statusHTML += '</div>';
      statusHTML += '<div class="product-detail">';
      statusHTML += '<h3 class="product-detail__name font_small">' + data.hits[i].product_name + '</h3>';
      statusHTML += '<span class="product-detail__price font_small">';
      statusHTML += data.hits[i].price + ' €';
      statusHTML += '</span>';
      statusHTML += '</div>';
      statusHTML +=  '</a>';
      statusHTML += '</li>';
  }
      statusHTML += '</ul>';
      //adding into DOM
      document.getElementById('product-section').innerHTML = statusHTML;
}

});
//End Featured products JSON data..
