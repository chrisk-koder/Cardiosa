// Get the card
const getCard = document.querySelector(".card");

// Create the h1 (title) element
const title = document.createElement("h1");

// Add the text to the title element
title.textContent = "A Wild Rick";

// Create the image element
const img = document.createElement("img");

// Add image class to the img element
img.className = "image";

// Add them to card
getCard.appendChild(title);
getCard.appendChild(img);

