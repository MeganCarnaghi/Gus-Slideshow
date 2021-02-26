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
  let interval = null;

  function nextImage() {
    if (position >= images.length - 1) {
      position = -1;
    }
    mainImage.setAttribute("src", images[++position]);
  }

  // Function for the Previous button
  document.getElementById("previous").addEventListener("click", () => {
    if (position <= 0) {
      position = images.length;
    }
    mainImage.setAttribute("src", images[--position]);
  });

  // Function for the Next button
  document.getElementById("next").addEventListener("click", nextImage);

  // Function for the Play button
  document.getElementById("play").addEventListener("click", () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
      document.getElementById("play").innerHTML =
        '<i class="fa fa-play"></i>&nbsp;PLAY';
    } else {
      interval = setInterval(nextImage, 2000);
      document.getElementById("play").innerHTML =
        '<i class="fa fa-stop"></i>&nbsp;STOP';
    }
  });
})();
