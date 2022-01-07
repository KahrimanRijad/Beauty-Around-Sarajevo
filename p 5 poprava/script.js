const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }





    var slideshow1 = document.getElementById("slideshow1");
    slideshow1.currentSlideIndex = 1;
    showSlides(slideshow1.currentSlideIndex, slideshow1);
    
    var slideshow2 = document.getElementById("slideshow2");
    slideshow2.currentSlideIndex = 1;
    showSlides(slideshow2.currentSlideIndex, slideshow2);
    
    var slideshow3 = document.getElementById("slideshow3");
    slideshow3.currentSlideIndex = 1;
    showSlides(slideshow3.currentSlideIndex, slideshow3);
    
     var slideshow4 = document.getElementById("slideshow4");
    slideshow4.currentSlideIndex = 1;
    showSlides(slideshow4.currentSlideIndex, slideshow4);
    
    
    function plusSlides(n, slideshow) {
      showSlides(slideshow.currentSlideIndex += n, slideshow);
    }
    
    function currentSlide(n, slideshow) {
      showSlides(slideshow.currentSlideIndex = n, slideshow);
    }
    
    function showSlides(n, slideshow) {
      
    
    
      var i;
      var slides = slideshow.getElementsByClassName("mySlides");
      var dots = slideshow.getElementsByClassName("dot");
      if (n > slides.length) {slideshow.currentSlideIndex = 1}    
      if (n < 1) {slideshow.currentSlideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideshow.currentSlideIndex-1].style.display = "block";  
      dots[slideshow.currentSlideIndex-1].className += " active";
    }

    const pixelDensity = window.devicePixelRatio;
document.getElementsByClassName("content").style.transform = "scale("+pixelDensity+")";