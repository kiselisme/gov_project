// Открывает версию для слабовидящих
const eyeBurger = document.querySelector(".eye");
const accessibilityHeader = document.querySelector(".access-header");

const toggleAccessibilityHeader = function () {
  accessibilityHeader.classList.toggle("access-header_show");
};

eyeBurger.addEventListener("click", toggleAccessibilityHeader);

// Функция - для добавление кнопки активных стилей
const activeButton = (button) => {
  button.style.background = "gray";
  button.style.border = "1px solid #ffffff";
  button.style.color = "#ffffff";
};

// Функция - для удаление активных стилей кнопки
const notActiveButton = (...buttons) => {
  buttons.map((button) => {
    button.style.background = "";
    button.style.border = "";
    button.style.color = "";
  });
};

// Изменение кнопок
const fontSizeLargeBtn = document.getElementById("font-size-large");
const fontSizeMediumBtn = document.getElementById("font-size-medium");
const fontSizeSmallBtn = document.getElementById("font-size-small");

// Обработчик клика на кнопке для изменения размера шрифта
fontSizeLargeBtn.addEventListener("click", () => {
  document.body.style.fontSize = "24px";
  notActiveButton(fontSizeMediumBtn, fontSizeSmallBtn);
  activeButton(fontSizeLargeBtn);
});

fontSizeMediumBtn.addEventListener("click", () => {
  document.body.style.fontSize = "18px";
  notActiveButton(fontSizeLargeBtn, fontSizeSmallBtn);
  activeButton(fontSizeMediumBtn);
});

fontSizeSmallBtn.addEventListener("click", () => {
  document.body.style.fontSize = "12px";
  notActiveButton(fontSizeLargeBtn, fontSizeMediumBtn);
  activeButton(fontSizeSmallBtn);
});

const letterSpacingLargeBtn = document.getElementById("letter-spacing-large");
const letterSpacingMediumBtn = document.getElementById("letter-spacing-medium");
const letterSpacingSmallBtn = document.getElementById("letter-spacing-small");

// Обработчик клика на кнопке для изменения интервала между буквами
letterSpacingLargeBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.2em";
  notActiveButton(letterSpacingMediumBtn, letterSpacingSmallBtn);
  activeButton(letterSpacingLargeBtn);
});

letterSpacingMediumBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.1em";
  notActiveButton(letterSpacingLargeBtn, letterSpacingSmallBtn);
  activeButton(letterSpacingMediumBtn);
});

letterSpacingSmallBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.05em";
  notActiveButton(letterSpacingLargeBtn, letterSpacingMediumBtn);
  activeButton(letterSpacingSmallBtn);
});

// Обработчик клика на кнопке Изображения
const bwButtons = document.getElementById("bw-button");
const colorButtons = document.getElementById("color-button");
const images = document.querySelectorAll(".my-image");

//Черно-белое
bwButtons.addEventListener("click", () => {
  images.forEach((image) => {
    image.style.filter = "grayscale(100%)";
  });
  notActiveButton(colorButtons);
  activeButton(bwButtons);
});

//Цветные
colorButtons.addEventListener("click", () => {
  images.forEach((image) => {
    image.style.filter = "none";
  });
  notActiveButton(bwButtons);
  activeButton(colorButtons);
});

// Cбрасывает все стили
const resetStylesBtn = document.getElementById("reset-styles-button");

resetStylesBtn.addEventListener("click", () => {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.cssText = "";
  }
});
// Открывает версию для слабовидящих

// ---------------------------------------------------------------------------------------------------------------------------------

// Для зарпрета полосы прокрутки когда бургер меню открыта
const menuToggle = document.getElementById("menu-toggle"); // получаем ссылку на input
const body = document.querySelector("body"); // получаем ссылку на элемент body

menuToggle.addEventListener("change", function () {
  // добавляем обработчик события change на input
  if (this.checked) {
    // если input checked, то добавляем стиль "overflow: hidden;" к элементу body
    body.style.overflow = "hidden";
  } else {
    // иначе удаляем стиль "overflow: hidden;" из элемента body
    body.style.overflow = "";
  }
});
// Для зарпрета полосы прокрутки когда бургер меню открыта

// ---------------------------------------------------------------------------------------------------------------------------------

// Для анимации бургер меню
// получаем все элементы с классом "select"
const selectElements = document.querySelectorAll(".side-bar__select");

// добавляем обработчик события на каждый элемент
selectElements.forEach((selectElement) => {
  selectElement.addEventListener("click", () => {
    // получаем следующий элемент после "span"
    const ulElement = selectElement.nextElementSibling;

    // добавляем/удаляем класс "active", чтобы показать/скрыть список
    selectElement.classList.toggle("side-bar__select_active");
    ulElement.classList.toggle("side-bar__list_active");
  });
});