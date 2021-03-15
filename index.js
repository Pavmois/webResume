/* Первый слайдер */

var slideIndex = 1; 
showSlides(slideIndex); //Индекс слайда по умолчанию

function plusSlide() {
    showSlides(slideIndex += 1); /* Функция увеличивает индекс на 1, показывает следующй слайд*/
}

function minusSlide() {
    showSlides(slideIndex -= 1);  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
}

function currentSlide(n) {
    showSlides(slideIndex = n);  /* Устанавливает текущий слайд */
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";  
}

/* Второй Слайдер */

var slideSecIndex = 1;
showSecSlides(slideSecIndex);

function plusSecSlide() {
  showSecSlides(slideSecIndex += 1);
}

function minusSecSlide() {
  showSecSlides(slideSecIndex -= 1);  
}

function currentSecSlide(n) {
  showSecSlides(slideSecIndex = n);
}

function showSecSlides(n) {
  var i;
  var slidesSec = document.getElementsByClassName("secondItem");
  if (n > slidesSec.length) {
  slideSecIndex = 1
  }
  if (n < 1) {
  slideSecIndex = slidesSec.length
  }
  for (i = 0; i < slidesSec.length; i++) {
  slidesSec[i].style.display = "none";
  }
  slidesSec[slideSecIndex - 1].style.display = "block";
}


/* Кнопка возвращения наверх */

  var jumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(jumpUp, 10);
    }
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
  } else {
      document.getElementById('upbutton').style.display = 'none';
  }
}

/* Плавная прокрутка к якорю */
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


/* Бесконечное выпадения снега */

function random(min, max) { 
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function letItSnow() { 
    for (var i=0; i!=200; i++) {
    document.getElementsByTagName('body')[0].innerHTML += '<i class="snow" style="left: '+random(-2000, 2000)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></i>';

} 
}

/* Меняется фон страницы */

var colorArray = [ "#5352a7ad", "#76437cad", "#492355ad", "#2A2C2F", "#000" ]; // массив с цветами
var i = 0; // итератор

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}

/* Вибрация телефона */

function vibrate() {
  window.navigator.vibrate(200);
}


/* Кнока меняет стили других кнопок */

var formArray = [ "0px", "50px"];
var b = 0; // итератор

function changeForm(){
  document.getElementById("snow").style.borderRadius = formArray[b];
  document.getElementById("rainbow").style.borderRadius = formArray[b];
  document.getElementById("sound").style.borderRadius = formArray[b];
  document.getElementById("vibro").style.borderRadius = formArray[b];
  document.getElementById("imageSur").style.borderRadius = formArray[b];
    b++;
    if( b > formArray.length - 1){
        b = 0;
    }
}

