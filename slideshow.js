(function () {
  // Create a variable for the main image showing in the slideshow
  const mainImage = document.getElementById("mainImage");

  // Array of Images
  const images = [
    "images/gus1.png",
    "images/gus2.png",
    "images/gus3.png",
    "images/gus4.png",
    "images/gus5.png",
    "images/gus6.png",
    "images/gus7.png",
    "images/gus8.png",
    "images/gus9.png",
    "images/gus10.png",
    "images/gus11.png",
  ];

  // Variable for the image position in the array
  let position = 0;

  // Function for the Previous button
  document.getElementById("previous").addEventListener("click", () => {
    mainImage.setAttribute("src", images[position]);
    position--;
    if (position < 0) {
      position = images.length - 1;
    }
  });

  // Function for the Next button
  document.getElementById("next").addEventListener("click", () => {
    mainImage.setAttribute("src", images[position]);
    position++;
    if (position > images.length - 1) {
      position = 0;
    }
  });

  document.getElementById("play").addEventListener("click", () => {
    let playSlideshow = setInterval(function () {
      mainImage.setAttribute("src", images[position + 1]);
      position++;
      if (position >= images.length - 1) {
        position = -1;
      }
    }, 3000);
    document.getElementById("stop").addEventListener("click", () => {
      clearInterval(playSlideshow);
    });
  });
})();
