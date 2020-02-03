# Warehouse Web Developer Exercise - Ashna Shah

- I saved the recommendations.json file to a JavaScript object in the data.js. Initially I wanted to parse recommendations.json, however I had issues trying to do this to a local file.
- I created the html file and decided it would be best to use bootstrap grids and cards as it was easy to achieve responsivity.
- After playing around I decided how many recommendation cards I wanted to show in each row at different screen-sizes to achieve optimum user-experience and set the column widths accordingly.
- I added a dummy recommendation card to the column so that I could add the required information dynamically
- I created a JS function that would dynamically add the required fields to a cloned version of the dummy card and append it to the responsive grid.
- I realised that some recommendations did not have images, hence I decided to use an if statement in my function to filter out those recommendations.
- Although I have linked the recommendation title to the product page, I noticed that all of the links provided in the json file are broken/outdated
- I then tweaked the styling by adding bootstrap classes as well as custom classes in styles.css to achieve a neat and uniform look.
