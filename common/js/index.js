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

let meatPrice = 0,
    taxPrice = 0,
    orderPrice = 0,
    totalPrice = 0;

const $subtotal = document.getElementById('subtotal'),
    $taxes = document.getElementById('taxes'),
    $shipping = document.getElementById('shipping'),
    $total = document.getElementById('total');

const meats = Array.from(document.getElementsByClassName('thumbnail'));
meats.forEach(meat=>{
    if(meat.classList.contains('active')){
        meatPrice = Number(Number(meat.dataset.price).toFixed(2));
        updateTotal();
    }

    meat.onclick = function(e){
      toggleClass('active', meats, meat);
      meatPrice = Number(Number(meat.dataset.price).toFixed(2));
      updateTotal();
    };
});

const orders = [document.getElementById('pickup'), document.getElementById('delivery')]
console.log(orders);
orders.forEach(order => {
    console.log(order);
    if(order.classList.contains('active')){
        orderPrice = Number(Number(order.dataset.price).toFixed(2));
        updateTotal();
    }

    order.onclick = function(e){
        toggleClass('active', orders, order);
        orderPrice = Number(Number(order.dataset.price).toFixed(2));
        updateTotal();

        e.preventDefault();
    }
});

function updateTotal(){
    taxesPrice = Number((meatPrice*0.13).toFixed(2));
    totalPrice = Number((meatPrice+orderPrice+taxPrice).toFixed(2));
    $subtotal.innerHTML = '$'+meatPrice;
    $taxes.innerHTML = '$'+taxesPrice;
    $shipping.innerHTML = '$'+orderPrice;
    $total.innerHTML = '$'+totalPrice;
}

function toggleClass(className, elements, chosenElement){
    elements.forEach(element=>{
        element.classList.remove(className);
    });
    chosenElement.classList.add(className);
}