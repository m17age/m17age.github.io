$(document).ready(function() { // Ждём загрузки страницы

 

$(".images").click(function(){    // Событие клика на маленькое изображение

var img = $(this);    // Получаем изображение, на которое кликнули

var src = img.attr('src'); // Достаем из этого изображения путь до картинки

$("body").append("<div class='popup'>"+//Добавляем в тело документа разметку всплывающего окна
                
"<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
                 
"<div class='popup-img-container'>" +
                 
"<img src='"+src+"' class='popup_img' />"+
"<img src='img/close.gif' class='close' />"// Само увеличенное фото
                 
+"</div>"
                 
+"</div>");

$(".popup").fadeIn(300); // Медленно выводим изображение

$(".popup_bg").click(function(){    // Событие клика на затемненный фон      

$(".popup").fadeOut(200);    // Медленно убираем всплывающее окно

setTimeout(function() {    // Выставляем таймер

$(".popup").remove(); // Удаляем разметку всплывающего окна

});

});

});

 

});