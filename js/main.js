$(document).ready(function () {
  var currentFloor = 2; /* Переменная где храниться текущий этаж */
  var counterUp = $(".counter-up"); /* Кнопка вверх */
  var counterDown = $(".counter-down"); /* Кнопка вниз */
  var floorPath = $(".home-image path"); /* Каждый этаж в SVG */

  // Функция при наведении ммышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //Получаем значение текущего этажа
    $(".counter").text(currentFloor); //Записываем значение этажа в счетчик справа
  });

  //Отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    //Проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) {
      currentFloor++; // Прибавляем 1 этаж
      uscurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false, //форматируем переменную с этажом, что бы было 01, а не 1
      });
      $(".counter").text(uscurrentFloor); //Записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей
      $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor"); //Подсвечиваем текущий этаж
    }
  });

  //Отслеживаем клик по кнопке вниз
    counterDown.on("click", function () {
      //Проверяем значение этажа, оно не должно быть меньше 2
    if (currentFloor > 2) {
      currentFloor--; // Вычитаем 1 этаж
      uscurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false, //форматируем переменную с этажом, что бы было 01, а не 1
      });
      $(".counter").text(uscurrentFloor); //Записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей
      $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor"); //Подсвечиваем текущий этаж
    } 
  });
});
