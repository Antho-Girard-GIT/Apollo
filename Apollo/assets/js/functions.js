$( document ).ready(function() {
// Nav	
function nav(){
	$('.nav-toggle').click(function(){		
		$('.nav').toggleClass('open');		
	});
}	
nav();
// Smooth scroll
const menuLinks = document.querySelectorAll('.nav > li > a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
// Slider
const slides = document.querySelectorAll('.banner');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideOne = document.querySelector('.firstSlide');
const slideTwo = document.querySelector('.secondSlide');
const slideThree = document.querySelector('.thirdSlide');
let index = 0;

slides.forEach(function(slide, i){
	slide.style.left = `${i * 100}%`;
})
nextBtn.addEventListener('click', function(){
	index++;
	slider();
})
prevBtn.addEventListener('click', function(){
	index--;
	slider();
})

function slider() {
	if(index === 0) {
		slideOne.classList.add('active');
		prevBtn.style.display = 'none';
	} else {
		prevBtn.style.display = 'block';
		slideOne.classList.remove('active');
	}
	if(index === 1) {
		slideTwo.classList.add('active');
	} else {
		slideTwo.classList.remove('active');
	}
	if(index === 2) {
		slideThree.classList.add('active');
		nextBtn.style.display = 'none';
	} else {
		slideThree.classList.remove('active');
		nextBtn.style.display = 'block';
	}
}
prevBtn.style.display = 'none';
// Map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

});