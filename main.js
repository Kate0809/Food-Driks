// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.nav__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__body').click(function(){
    $('.nav__icon, .nav__body').removeClass('active');
    $('body').removeClass('lock');
});



//Плавающая шапка
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 240);
});

//Slider
const sliderItem = document.querySelectorAll('.slider .slider__item');
const sliderContent = document.querySelector('.slider .slider__content');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderContent.style.width = width * sliderItem.length + 'px';
    sliderItem.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__next').addEventListener('click', function () {
    count++;
    if (count >= sliderItem.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider__prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = sliderItem.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderContent.style.transform = 'translate(-' + count * width + 'px)';

}

//Дата в форме
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;