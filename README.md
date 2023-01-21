# Frontend Mentor - Blogr landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [CLICK ME!](https://your-live-site-url.com)

## My process
For this webpage I worked from top to bottom. Each section I worked from outside to inside. So my workflow was top to bottom then outside to inside. The biggest struggle I had was deciding what to make as a background image and what to make as a regular image. I ultimately decided to make important images as images and non-important images as background images (for accessiblity reasons).
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

Ultimately, I learned how to create a dropdown menu using JS and CSS. I had to make sure each menu would stay open depending on where the cursor was. Looking back at this I feel that I should have utilized event bubbling to ultimately determine which menu to open (I did not do this). This would have made my JS code much simpler and easier to read. Another thing I realized is that I could have put multiple background images in the same section. I did not do this (which I dearly regret since it made my HTML and CSS more complex). Basically, instead of having a separate div hold a background image I could have put a linear gradient and background image in the same CSS property.


### Continued development

I need to work more on my semantic HTML skills as well as looking for easier ways to write my JS code. Additionally learning some more HTML/CSS tricks can help me save some time and make my frontend have much less complexity. 

### Useful resources

- [Multiple background images](https://www.w3schools.com/css/css3_backgrounds.asp) - Made me realize I could have used multiple background images on the same HTML element.
- [Multple background images 2](https://stackoverflow.com/questions/2504071/how-do-i-combine-a-background-image-and-css3-gradient-on-the-same-element) - Specific example using linear gradient and an actual image
- [Event bubbling](https://javascript.info/bubbling-and-capturing) - Article on event bubble, important to note that the event.target DOES NOT change through the bubbling process, however the this keyword does (the element running the handler does). Very important to know and keep track of!

## Author

- Website - [Carlos Arbizu](https://arbizu.dev/)
- Frontend Mentor - [@crypto-dot](https://www.frontendmentor.io/profile/crypto-dot)


