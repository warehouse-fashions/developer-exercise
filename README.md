# Warehouse Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The component you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.

## My Solution

### Install / run

Run

    yarn install
    yarn run ws

to download the dependencies and serve the local directory on [http://localhost:8000]().

### Comments on my work

In the beginning I've spent about 50 minutes just to be able to access json data from my javascript code. Most of that time was spent as I wanted to avoid using anything not needed for the project, like not using a web server, just loading from files. It took me a while to learn that it doesn't allow accessing the json data via file:// urls, but all needs to be served through http (using a local server).

Hence after the allocated 1 hour I could only read the data, but had nothing else to show. I've spent another hour to see where would I get to, if I hadn't run into that problem.

In that hour, I've started working on the layout. Checking the example png, I thought that it can be solved with flexbox and wrapping, so that it would dynamically resize and work on small screens as well.

I aimed for a final version where the pictures would resize themselves, depending on how much space one 'card' would have. As far as I know, resizing `<img>` elements is problematic, and the general recommendation is to use `<div>`s with `background-image` instead for flexible picture sizes, even if I had to abandon the otherwise semantically correct `<img>`s (that would also allow `alt` to be specified, have better accessibility, etc). However I couldn't manage to finish it - I could get the widths to be dynamic, but the height wasn't extending beyond `min-height`, and my second hour was over, hence the result is rather an in-between solution.

Other than finishing the layout correctly, I also didn't have the time to refactor it into a proper reusable component (I tried to keep the css selectors relative to a parent id, though), or to write tests for the code.
