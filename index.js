var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("move");
 
  var dots = document.getElementsByClassName("dot");
  

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
}



const counters = document.querySelectorAll('.counter');
const speed= 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);

        }else {
            count.innerText = target;
        }

    }
    updateCount();



    
});
    
var slideIndex = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("news");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}
