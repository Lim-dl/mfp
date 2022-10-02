window.onload = function () {

  //Скролл к хедингу
  document.documentElement.scrollTop = 0;

  //Класс для прелоадера
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);

  //сортировка
  var items = document.querySelectorAll('.skills-item');
  // get all items as an array and call the sort method
  Array.from(items).sort(function (b, a) {
    // get the text content
    a = a.querySelector('.percent-skill').innerText.toLowerCase()
    b = b.querySelector('.percent-skill').innerText.toLowerCase()
    return (a > b) - (a < b)
  }).forEach(function (n, i) {
    n.style.order = i
  })
}

//Отслеживание позиции скролла и переключение стилей активной страницы
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  document.querySelector('.bg').style.backgroundPosition = '50% -' + (window.pageYOffset / 2.5) + "px";

  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight(),
      middle = (bottom - top) / 2;

    if (cur_pos + middle >= top && cur_pos + middle <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
  });
});

/* window.addEventListener('scroll', function () {
  document.querySelector('.bg').style.backgroundPosition = '50% ' + (window.pageYOffset /2 -10) + "px";
}); */

//Запрет показа якорей в адресной строке
$('a[href^="#"]').on('click', function (e) { // Если ссылка является якорем, то выполняем следующее:
  let link = $(this).attr('href'), // берём ссылку якоря. Она же по факту id элемента
    el = $(document).find(link); // ищем элемент
  if (el.length > 0) { // если он существует
    el = el.eq(0).offset().top; // берём ПЕРВЫЙ элемент
    $(window).scrollTop(el); // выполняем к нему скролл
  }
  return false; // Отменяем переход по ссылке => и вывод якоря в адресную строку
});

//Показ стартово хэдинга побуквенно (эффект печати)
let textHeading = document.querySelector(".text-animated").innerText;
document.querySelector(".text-animated").innerText = "";

function fun1(num, txt) {
  if (num++ < txt.length) {
    if (num > txt.length - 1) return 0;
    document.querySelector(".text-animated").innerText += txt[num];

    setTimeout(fun1, 30, num, txt);
  }
}

fun1(-1, textHeading);

/* //Плагин свайпер (в дальнейшем будет выключен)
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
}); */