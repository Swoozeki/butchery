const $navToHome = document.getElementById('nav-home');
const $navToAbout = document.getElementById('nav-about');
const $navToOrder = document.getElementById('nav-order');
const $navToContact = document.getElementById('nav-contact');

const $about = document.getElementById('about');
const $order = document.getElementById('order');

$navToHome.onclick = function () {
    scrollTo(document.documentElement, 0, 1250);
}
$navToAbout.onclick = function () {
    scrollTo(document.documentElement, $about.offsetTop-200, 1000);
}
$navToOrder.onclick = function () {
    scrollTo(document.documentElement, $order.offsetTop-200, 1000);
}

function scrollTo(element, to, duration) {
    console.log('starting...');
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};