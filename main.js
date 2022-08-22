//        HAMMBURGER OPEN MENU CODE        //

const hamburger = document.getElementById('hamburger-box');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', function() {
    nav.style.cssText = "transform: translateX(0);"
});



//        MOBILE WORKOUTS MENU OPEN CODE        //
const workouts = document.getElementById('workouts');
const screenWorkouts = document.getElementById('screen-nav-workouts');


workouts.addEventListener('click', function() {
    screenWorkouts.style.cssText = "transform: translateX(0);"
    nav.style.cssText = "pointer events: none;"
});


//           WORKOUTS MENU OPEN CODE            //
const workoutsNormal = document.getElementById('wn');
const workoutsNormalHover = document.getElementById('wnh');

workoutsNormal.addEventListener('click', function() {
    workoutsNormalHover.style.cssText = "opacity: 1; pointer-events: all";
});
