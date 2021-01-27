var slideIndex = 1;
showSlides(slideIndex);

function minusSlide(){
	showSlides(currentSlide() - 1);
}
function plusSlide() {
	showSlides(currentSlide() + 1);
}
function currentSlide() {
	var slides = document.querySelectorAll(".mySlides");
	let i;
	slides.forEach(function (slide, idx){
		if (slide.style.display == "flex"){
			console.log(idx + 1)
			i = idx;
		}
	})
	return i;
}
function showSlides (n) {
	var i;
	var slides = document.querySelectorAll(".mySlides");

	if (n > slides.length - 1) {
		return
	}
	if (n < 0) {
		return
	}
	for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  	}
  	slides[n].style.display = "flex";
}

document.querySelectorAll('.second').forEach(item => {
	item.addEventListener('click', event =>{
		var session = document.querySelector(".sessions")
		session.style.display = "flex";
	})
})
document.querySelectorAll('.third').forEach(item => {
	item.addEventListener('click', event =>{
		var session = document.querySelector(".sessions")
		session.style.display = "flex";
	})
})
document.querySelectorAll('.first').forEach(item => {
	item.addEventListener('click', event =>{
		var table = document.querySelector('.table')
		table.style.display = "inline";
	})
})
document.querySelectorAll('.sessions-info').forEach(item => {
	item.addEventListener('click', event =>{
		var seats = document.querySelector(".theatre")
		seats.style.display = "flex";
	})
})