import "./forecast_container.pcss";

document.addEventListener("DOMContentLoaded", () => {
  const forecastContainer = document.getElementById("forecast-container");
  // callback is invoked when a child Element is inserted
  // or deleted from the forecastContainer
  function callback() {
    const images = document.getElementsByClassName("carousel-image");
    const prevBttn = document.getElementById("prev-bttn");
    const nextBttn = document.getElementById("next-bttn");
    const totalImgs = images.length;
    let slide = 0;
    let moving = false;

    function disableInteraction() {
      moving = true;
      setTimeout(() => {
        moving = false;
      }, 500);
    }

    function moveCarouselTo() {
      if (!moving) {
        disableInteraction();
        images[0].classList.remove("initial");
        for (let i = 0; i < totalImgs; i += 1) {
          images[i].classList.remove("prev");
          images[i].classList.remove("next");
          images[i].classList.remove("active");
        }

        const nextSlide = slide === totalImgs - 1 ? 0 : slide + 1;
        const prevSlide = slide === 0 ? totalImgs - 1 : slide - 1;
        images[slide].classList.add("active");
        images[nextSlide].classList.add("next");
        images[prevSlide].classList.add("prev");
      }
    }

    function moveToNext() {
      if (!moving) {
        if (slide === totalImgs - 1) {
          slide = 0;
        } else {
          slide += 1;
        }
      }
      moveCarouselTo(slide);
    }

    function moveToPrev() {
      if (!moving) {
        if (slide === 0) {
          slide = totalImgs - 1;
        } else {
          slide -= 1;
        }
      }
      moveCarouselTo(slide);
    }

    if (images[0]) {
      nextBttn.addEventListener("click", moveToPrev);
      prevBttn.addEventListener("click", moveToNext);
    }
  }

  const config = { childList: true };
  const observer = new MutationObserver(callback);
  observer.observe(forecastContainer, config);
});
