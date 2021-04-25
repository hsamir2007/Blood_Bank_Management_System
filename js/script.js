// var imgs = {
//   img1: ["imges/2.jpg", "imges/3.jpg"],
//   img2: ["imges/4.jpg", "imges/5.jpg"],
//   img3: ["imges/6.jpg", ""],
// };

var imgs = document.querySelectorAll(".item img"); //node list
var imgsArray = Array.from(imgs);

// var imgsArray=[];
// for (var index = 0; index < imgs.length; index++) {
//    imgsArray.push(imgs[index]);
// }

var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxIteam = document.getElementById("lightBoxIteam");

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var closeBtn = document.getElementById("closeBtn");

var currentIndex = 0;
// console.log(imgs);
for (var index = 0; index < imgs.length; index++) {
  imgsArray[index].addEventListener("click", function (event) {
    currentIndex = imgsArray.indexOf(event.target);

    var imgSrc = event.target.getAttribute("src");

    lightBoxIteam.style.backgroundImage = `url(${imgSrc})`;

    lightBoxContainer.style.display = "flex";
  });
}

function nextSlide() {
  currentIndex++;

  if (currentIndex == imgsArray.length) {
    currentIndex = 0;
  }
  var imgSrc = imgsArray[currentIndex].getAttribute("src");

  lightBoxIteam.style.backgroundImage = `url(${imgSrc})`;
}

nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = imgsArray.length - 1;
  }
  var imgSrc = imgsArray[currentIndex].getAttribute("src");

  lightBoxIteam.style.backgroundImage = `url(${imgSrc})`;
}

prevBtn.addEventListener("click", prevSlide);

function closeSlide() {
  lightBoxContainer.style.display = "none";
}

closeBtn.addEventListener("click", closeSlide);

// lightBoxContainer.addEventListener("click", closeSlide);

// var events = ['click','mouseenter','mousemove'];
// for (var index = 0; index < events.length; index++) {
//   nextBtn.addEventListener(events[index], nextSlide);
// }

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowRight") {
    //keyCode == 39 is deprecated ts
    nextSlide();
  } else if (event.code == "ArrowLeft") {
    prevSlide();
  } else if (event.code == "Escape") {
    closeSlide();
  }
  // console.log(event.keyCode)
});
// var shiftClicked = false;
// var aClicked = false;
// document.addEventListener("keydown", function (event) {
//   if (event.code == "ShiftLeft") {
//     shiftClicked = true;
//   } else if (event.key == "a") {
//     aClicked = true;
//   }
// });
// document.addEventListener("keyup", function (event) {
//   if (event.code == "ShiftLeft") {
//     shiftClicked = false;
//   } 
// });
