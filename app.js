$(() => {

  const $list = $("#recommended-list");
  const requestURL = 'data/recommendations.json';

  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();

  request.onload = function() {
    const clothesText = request.response;
    const clothes = JSON.parse(clothesText);
    showClothes(clothes.hits);
  }

  function showClothes(data) {
    const clothesHits = data;
    for(let i = 0; i < clothesHits.length; i++) {

      if(clothesHits[i].image) {

        const $item = $('<li/>');
        const $link = $(`<a href=${clothesHits[i].link}/>`);
        const $itemName = $('<p/>').text(clothesHits[i].product_name);
        const $itemPrice = $('<p/>').text('£'+ clothesHits[i].price);
        const picSource = clothesHits[i].image.link;
        const $itemPic = $('<div/>').css({'background-image': `url(${picSource})`});

        $link.append($itemPic.addClass('item-pic'));
        $link.append($itemName.addClass('item-name'));
        $link.append($itemPrice.addClass('item-price'));
        $item.append($link);
        $list.append($item);
      }

    }
  }

});
