"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
   iconMenu.addEventListener("click", function (e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

document.addEventListener("click", function (e){
   const targetItem = e.target;
   if (targetItem.closest('[data-ripple]')) {
      const button = targetItem.closest('[data-ripple]');
      const ripple = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
      ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
      ripple.classList.add('ripple');

      button.appendChild(ripple);

      const timeOut = getAnimationsDuration(ripple);

      setTimeout(() => {
         ripple ? ripple.remove() : null;
      }, timeOut)

      function getAnimationsDuration(){
         const aDuration = window.getComputedStyle(ripple).animationDuration;
         return aDuration.includes('ms') ? 
         aDuration.replace("ms", '') : aDuration.replace("s", '') * 1000;
      }
   }
});




