# Warehouse Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The component you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.

### About Project :

1) I tried to make this project as simple as i can. 
2) I created HTML page to show the JSON data.
3) Used VanillaJS to make request to server to show JSON data using a for loop.
4) For styling i liked use SASS/BEM method to make reusable classes. so later on we can use anywhere in DOM.

 I had a bit of confusion to understand requirement. you want me to pick the data only from the objects which have "image" key or i can pick up data from each object and show other image if its not available? I used a product image(downloaded from a link given in JSON file) for those products which doesnt have any "image" object in JSON file can use this. I am not sure this is what you want me to do.
