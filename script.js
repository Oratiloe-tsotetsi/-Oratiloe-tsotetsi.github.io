  function toggleNav(){
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleMenu() {
    const container = document.querySelector('.icon');
    container.classList.toggle('change');
}

function combinedFunction() {
  toggleNav();
  toggleMenu();
}
  
 

  document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".transition-loader");

    document.querySelectorAll(".transition-link").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const nextPage = this.href;
        loader.style.display = "block";

        setTimeout(function() {
          window.location.href = nextPage;
        }, 1000); // Adjust the time to simulate the loading process
      });
    });
  });


  //for slideshow

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
