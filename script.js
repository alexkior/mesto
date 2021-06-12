// Открывашка для поп-апа
let formOpenerTrigger = document.querySelector('.profile__edit-button');
let formWrapperContent = document.querySelector('.pop-up');
function formClassAdder() {
    formWrapperContent.classList.add('pop-up_opened');
};
formOpenerTrigger.addEventListener('click', formClassAdder);

// Закрывашка для поп-апа
let formCloserTrigger = document.querySelector('.pop-up__close-button');
function formClassRemover() {
    formWrapperContent.classList.remove('pop-up_opened');
};
formCloserTrigger.addEventListener('click', formClassRemover);

let formElement = document.querySelector('.pop-up__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput')



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;

    formClassRemover();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 