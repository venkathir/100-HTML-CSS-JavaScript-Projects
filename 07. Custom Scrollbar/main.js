const imageWrapper = document.querySelector(".imagesWrapper");
const unsplashBaseURL = "https://source.unsplash.com/category/";
const imageSize = "300x300";
const imageCount = 15;

for (let i = 0; i < imageCount; i++) {
  const img = document.createElement("img");
  const randomQuery = getRandomQuery();
  img.src = `${unsplashBaseURL}${randomQuery}/${imageSize}`;

  imageWrapper.appendChild(img);
}

// Function to generate a random query parameter
function getRandomQuery() {
  return `${getRandomNr()}`;
}

// Function to generate a random number
function getRandomNr() {
  return Math.floor(Math.random() * 1000);
}
