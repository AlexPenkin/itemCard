var tabs = document.querySelectorAll('.detailsTab'),
  highlighter = document.querySelector('.highlighter'),
  childrens = document.querySelectorAll('.wts');


function throttle(func, ms) {
  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}

var checkClass = throttle(function () {
  for (var a = 0; a < tabs.length; a++) {
    if (tabs[a].classList.contains('detailsTabActive')) {;
      tabs[a].classList.remove('detailsTabActive');
    }
  }
  for (var b = 0; b < childrens.length; b++) {
    if (this.dataset.name != childrens[b].dataset.name) {
      childrens[b].style.display = 'none';
      childrens[b].classList.remove('wtsActive');
    }
    if (this.dataset.name === childrens[b].dataset.name) {      
      childrens[b].style.display = '';
      childrens[b].classList.add('wtsActive');
    }
  }


  this.classList.add('detailsTabActive');
  Velocity(highlighter, {
    translateZ: 0,
    translateX: this.offsetLeft - 25 + 'px'
  }, {
    duration: 600
  });
}, 1000, true)
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', checkClass);
};
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('touchstart', checkClass);
};