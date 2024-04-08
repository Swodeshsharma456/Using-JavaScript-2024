document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const changeColorButton = document.getElementById('changeColorButton');
    
    changeColorButton.addEventListener('click', function() {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      // Change the background color of the header
      header.style.backgroundColor = randomColor;
    });
  });
  