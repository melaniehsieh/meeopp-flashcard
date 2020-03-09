window.onload = function() {
  let slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    let slides = document.getElementsByClassName("s1");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    console.log(slideIndex);
  }
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        e.preventDefault();
        slideIndex--;
        showSlides(slideIndex);
        break;
      case 39:
        e.preventDefault();
        slideIndex++;
        showSlides(slideIndex);
        break;
      case 13:
        showPopUp();
        break;
    }
    //39 = right arrow 37 = left 27=esc 13=enter 32=space 8=delete 27=esc
  };
  addEventListener("keydown", function(event) {
    function random_bg_color() {
      var x = Math.floor(Math.random() * 125);
      var y = Math.floor(Math.random() * 205);
      var z = Math.floor(Math.random() * 255);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);

      document.body.style.background = bgColor;
    }

    random_bg_color();
  });

  function showImage() {
    document.getElementById("star").style.display = "block";
    setTimeout(() => {
      document.getElementById("star").style.display = "none";
    }, 2000);
  }

  function removeImage() {
    document.getElementById("remove").style.display = "block";
    setTimeout(() => {
      document.getElementById("remove").style.display = "none";
    }, 2000);
  }

  function showPopUp() {
    document.getElementById("pages").style.display = "block";

    let exit = document.getElementById("exits");
    let exiti = document.getElementById("exiting");
    exit.addEventListener("click", function() {
      document.getElementById("pages").style.display = "none";
    });
    exiti.addEventListener("click", function() {
      document.getElementById("pages").style.display = "none";
    });
  }

  $(".picture").click(function() {
    $(this).toggleClass("minus");
  });

  let imageNumber = 1;
  hit = function() {
    if (imageNumber === 1) {
      showImage();
      imageNumber--;
    } else {
      removeImage();
      imageNumber++;
    }
  };
  let imageNumbers = 1;
  hita = function() {
    if (imageNumbers === 1) {
      showImage();
      imageNumbers--;
    } else {
      removeImage();
      imageNumbers++;
    }
  };
  let imageNumbera = 1;
  hits = function() {
    if (imageNumbera === 1) {
      showImage();
      imageNumbera--;
    } else {
      removeImage();
      imageNumbera++;
    }
  };
};
