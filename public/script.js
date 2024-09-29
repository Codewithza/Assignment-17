'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classNameList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` className from `body`
    // when clicked `theme-btn`
    document.body.classNameList.toggle('light-theme');
    document.body.classNameList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classNamees between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classNameList.toggle('light');
      themeBtn[i].classNameList.toggle('dark');

    }

  })

}