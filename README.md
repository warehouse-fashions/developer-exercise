# Warehouse Web Developer Exercise

## Steph's Notes

Requirements: 
1. **The component you build should display images, prices and link to the product taking into consideration how it would work with i18n:** My recommendations component displays images, names, prices, and links to the products' pages. 

2. **Take into consideration i18n:** This code should work with other languages after changing the `html lang` declaration. The only currency given in the JSON was GBP--however, to have the component update currency symbols for other currencies I would try using an object of key-value pairs (e.g. `"GBP": "£"`or look for an existing datset. For now I have used an if statement to confirm that the currency is GBP before adding the "£" symbol and additional ".00".

3. **Responsive:** The component is mobile-first responsive and displays 2 images across on mobile, 3 on tablets, 4 on laptops, and 5 on desktop screens. I used CSS Flexbox to organise the product cards.

4. **Reusable code:** I have avoided hard-coding so that this code can be reused with different JSON data

...

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The component you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.
