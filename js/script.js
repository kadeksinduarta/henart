// ngambil link di html
const humberger = document.querySelector("#humberger");
const linkya = document.querySelector(".link");
const iconn = document.querySelector(".img");

// fungsi untuk toggle di menu humberger
const menu = (document.querySelector("#humberger").onclick = () => {
  linkya.classList.toggle("active");
});

// fungsi event link hamberger
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !linkya.contains(e.target)) {
    linkya.classList.remove("active");
  }
});

// typing animate
const textElement = document.querySelector(".typing");
const text = "Henart.Design"; // Text to type
const totalDuration = 9000; // Total animation time in milliseconds (1 minute)
const interval = totalDuration / (text.length * 2); // Time per character (typing + deleting)

let index = 0;
let isDeleting = false;

function consistentTypingEffect() {
  textElement.textContent = text.slice(0, index);

  if (!isDeleting && index < text.length) {
    index++;
  } else if (isDeleting && index > 0) {
    index--;
  }

  if (index === text.length) {
    isDeleting = true; // Start deleting
  } else if (index === 0 && isDeleting) {
    isDeleting = false; // Start typing again
  }

  setTimeout(consistentTypingEffect, interval);
}

consistentTypingEffect();

// gallery
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
