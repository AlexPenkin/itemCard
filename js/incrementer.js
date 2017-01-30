var input = document.querySelector('.quanityIncrement'),
    increment = document.querySelectorAll('.arrowUp'),
    decrement = document.querySelectorAll('.arrowDown');
    increment.addEventListener('click', function() {
      ++input.value;
    });