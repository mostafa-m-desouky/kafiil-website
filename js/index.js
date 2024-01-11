let allLis = document.querySelectorAll(".controls ul li");
allLis.forEach (function (ele) {
    ele.onclick = function () {
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
})

let toggle = document.querySelector(".login");
let setting = document.querySelector(".setting-box");
toggle.onclick = function () {
    setting.classList.toggle("open")
}


let sliderImage = document.querySelector(".slider-image")
let imgArray = ["assets/Rectangle-8.png", "assets/Rectangle-8.png", "assets/Rectangle-8.png"];
let prevBtn = document.querySelector(".slider-image .left");
let nextBtn = document.querySelector(".slider-image .right");
let currentSlide = 0;

var bulletsElement = document.createElement('ul');

// Set ID On Created Ul Element
bulletsElement.setAttribute('class', 'bullets');
bulletsElement.setAttribute('id', 'bullets');


// Create List Items Based On Slides Count
for (var i = 0; i < imgArray.length; i++) {

  var liItem = document.createElement('li');
  liItem.setAttribute('data-index', i);

  bulletsElement.appendChild(liItem);
  
}

sliderImage.appendChild(bulletsElement);

let li = document.querySelectorAll("#bullets li")

let liArray = Array.from(li)
for (var i = 0; i < liArray.length; i++) {
    liArray[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        sliderImage.style.backgroundImage = `url(${imgArray[parseInt(this.getAttribute('data-index'))]})`
        theChecker();
    }
  }
theChecker ()

function nextSlide() {
    if (nextBtn.classList.contains("block")) {
        return false;
    } else {
        sliderImage.style.backgroundImage = `url(${imgArray[++currentSlide]})`;
        theChecker();
    }
}
function prevSlide() {
    if (prevBtn.classList.contains("block")) {
        return false;
    } else {
        sliderImage.style.backgroundImage = `url(${imgArray[--currentSlide]})`;
        theChecker();
    }
}

function theChecker () {
    removeAllActive();
    
    bulletsElement.children[currentSlide].classList.add('active');

    if (currentSlide == 0) {
        prevBtn.classList.add("block");
    } else {
        prevBtn.classList.remove("block");
    }
    if (currentSlide == imgArray.length - 1) {
        nextBtn.classList.add("block");
    } else {
        nextBtn.classList.remove("block");
    }
}

function removeAllActive() {
    liArray.forEach(function (bullet) {
      bullet.classList.remove('active');
    });
  
}


let data = 0;
 
document.getElementById("counting").innerText = data;
 
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}

// document.querySelector(".heart-box").onclick = function () {
//     let heart = document.querySelector("#heart");
//     heart.classList.toggle("active")
// }
