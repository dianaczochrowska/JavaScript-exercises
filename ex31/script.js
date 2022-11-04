document.addEventListener('DOMContentLoaded', (event) => {
    const square = document.getElementById("1");

    square.addEventListener("mouseover", function() {
        hideImage();
    })
    
    square.addEventListener("mouseout", function() {
        showImage();
    })
    
    function showImage () {
        square.style.opacity = "1";
    }
    
    function hideImage () {
        square.style.opacity = "0";
    }
  });