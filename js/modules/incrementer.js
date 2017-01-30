var input = document.querySelector('.quanityIncrement'),
    increment = document.querySelector('.arrowUp'),
    decrement = document.querySelector('.arrowDown');
    increment.addEventListener('click', function() {
      ++input.value;
    })
     decrement.addEventListener('click', function() {
       if (input.value > 0) {
      --input.value;
       }
    })
       increment.addEventListener('touchstart', function() {
      ++input.value;
    })
     decrement.addEventListener('touchstart', function() {
       if (input.value > 0) {
      --input.value;
       }
    })