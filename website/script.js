document.addEventListener("DOMContentLoaded", () => {
  // IMAGE SLIDESHOW

  const images = document.querySelectorAll(".gallery-img");
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) =>
    dot.addEventListener("click", () => {
      // on click of dot set image to respective index
      setImage(+dot.getAttribute("data-image-index"));
      // clear and set interval again to prevent flickers
      clearInterval(currInterval);
      currInterval = setInterval(nextImage, 4000);
    })
  );

  // keep track of which image is being shown
  let currentIndex = 0;

  function setImage(imgIndex) {
    // modulus number of images so that index doesn't get larger than number of images
    currentIndex = imgIndex % images.length;
    // hide all images
    images.forEach((img) => img.classList.add("hidden"));
    // show only current image
    images[currentIndex].classList.remove("hidden");
    // highlight the current dot
    dots.forEach((dot) => dot.classList.remove("selected"));
    dots[currentIndex].classList.add("selected");
  }

  function nextImage() {
    // set image of next index
    setImage(currentIndex + 1);
  }

  // interval for 4 seconds to go to the next image
  let currInterval = setInterval(nextImage, 4000);

  // COUNTDOWN TIMER

  const timer = document.querySelector(".countdown-timer");

  function setCountdown() {
    const timeLeft = new Date(new Date("28 August 2021") - new Date());
    const days = timeLeft.getDate();
    const hours = timeLeft.getHours();
    const minutes = timeLeft.getMinutes();
    const secs = timeLeft.getSeconds();
    const time = `${(days * 24 + hours).toString().padStart(2, 0)}:${minutes
      .toString()
      .padStart(2, 0)}:${secs.toString().padStart(2, 0)}`;
    timer.textContent = time;
  }
  setCountdown();
  setInterval(setCountdown, 1000);
});
