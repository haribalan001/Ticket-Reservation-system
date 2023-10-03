$(document).ready(function(){
    $('#buspage').click(function(){
    var Tl = new TimelineMax()
    var nextbutton = $('.screen-home__bus-page')
    var screenBottom = $('.screen-bottom');
     Tl
         .to('.screen-home__inside-wave',
          '0.3',
          {width: 52,
          height: 52 })
         .to('.screen-home__inside-wave',
          '0.3',
          {opacity: 0,
          onComplete: clkAnimComplete})
         function clkAnimComplete() {
      Tl.to('#formdetail',
       0.1,
       {scale: 0.9,
       y: 5,
       opacity:0,
       ease: Power2.easeIn})
      Tl.to('.screen-home__recent-search',
       0.1,
       {scale: 0.9,
       y: 5,
       opacity:0,
       ease: Power2.easeIn},
       '0')
      Tl.to('.screen-bottom',
       0.1,
       {opacity: 0},
       '0')
      Tl.to(nextbutton,
       1,
       {rotation: 720,
       scale: 0.4,
       borderWidth: 0,
       ease: Expo.easeOut})
      Tl.to('.screen-home__bus-arrow-wrap',
       1,
       {scale: 0,
       opacity: 0,
       ease: Expo.easeOut},
       '0')
      Tl.to('.line',
       0.6,
       {width: 0},
       '0.6')
      Tl.to('.screen-home__submit-wrap',
       0.6,
       {width: 375,
       height: 90,
       x: -15,
       y: -409,
       ease: Expo.easeOut })
      Tl.to(nextbutton,
       0.6,
       {scale: 1,
       width: 375,
       height: 90,
       borderRadius: 0,
       ease: Expo.easeOut,
       onStart: visibleBox})
      Tl.to(screenBottom,
       0.1,
       {opacity: 1})
      Tl.to('.screen-bus',
       0,
       {opacity:1})
      Tl.to('.screen-home',
       0.6,
       {opacity: 0})
      Tl.to('.screen-home',
       0,
       {display: 'none'})
      function visibleBox() {
          Tl.staggerTo('.screen-bus__travels-col',
           0.4,
           {opacity: 1,
           y: 0,
           ease: Expo.easeIn},
           '0.1'); 
          console.log('start');
      } 
         }
        });
     
   var TlWaveAnim = new TimelineMax({repeat: -1});
       TlWaveAnim
                 .to('.screen-home__inside-wave',
                  0.8,
                  {width: '100%',
                  height: '100%'});
   });
function redirect(){
    window.location.assign("index.html");
}
const dropdowns = document.querySelectorAll('.from')
   dropdowns.forEach(from => {
    const select = from.querySelector('.select');
    const caret  = from.querySelector('.caret');
    const menu = from.querySelectorAll('.menu');
    const options = from.querySelectorAll('.menu li');
    const selected = from.querySelector('.selected');
    
    select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

   });

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText =option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.add('active');
        });
    });
});
});

