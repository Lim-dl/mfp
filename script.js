//Отслеживание позиции скролла и переключение стилей активной страницы
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

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
    setTimeout(fun1, 50, num, txt);
  }
}

fun1(-1, textHeading);

//Плагин свайпер (в дальнейшем будет выключен)
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
});