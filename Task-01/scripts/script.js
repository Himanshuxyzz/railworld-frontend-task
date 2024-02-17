

const slider = document.querySelector(".carousel-section-slides");
const allImages = document.querySelectorAll(".carousel-section-slides img");
let currentImgIndex = 0;

// carousel logic
if(slider && allImages) {

const changeSlide = () => {
  if (currentImgIndex < 0) {
    currentImgIndex = allImages.length - 1;
  } else if (currentImgIndex >= allImages.length) {
    currentImgIndex = 0;
  }
  slider.style.transform = `translateX(-${currentImgIndex * 100}%)`;
};

let intervalId = setInterval(() => {
  currentImgIndex++;
  changeSlide();
}, 3000); // Change slide every 3 seconds

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

if(prevButton && nextButton) {
prevButton.addEventListener("click", () => {
  currentImgIndex--;
  changeSlide();
});

nextButton.addEventListener("click", () => {
  currentImgIndex++;
  changeSlide();
});

slider.addEventListener("mouseenter", () => {
  clearInterval(intervalId); // Stop autoplay on mouse hover
});

prevButton.addEventListener("mouseenter", () => {
  clearInterval(intervalId); // Stop autoplay on mouse hover
});

nextButton.addEventListener("mouseenter", () => {
  clearInterval(intervalId); // Stop autoplay on mouse hover
});


} 

// slider.addEventListener("mouseenter", () => {
//   clearInterval(intervalId); // Stop autoplay on mouse hover
// });

// slider.addEventListener("mouseleave", () => {
//   intervalId = setInterval(() => {
//     currentImgIndex++;
//     changeSlide();
//   }, 3000); // Resume autoplay on mouse leave
// });

}



const registerBtn = document.querySelector(".nav-btn button")
const registerPopup = document.querySelector(".register-popup")
const closePopup = document.querySelector(".close-btn")
registerBtn.addEventListener("click",() => {
registerPopup.classList.toggle("active")
})
closePopup.addEventListener("click",() => {
registerPopup.classList.remove("active")

})
