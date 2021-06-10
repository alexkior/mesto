// Открывашка для поп-апа
let formOpenerTrigger = document.querySelector('.profile__edit-button');
let formWrapperContent = document.querySelector('.pop-up');
formOpenerTrigger.addEventListener('click', function formClassAdder() {
    formWrapperContent.classList.add('pop-up_opened');
});

// Закрывашка для поп-апа
let formCloserTrigger = document.querySelector('.pop-up__close-button');
formCloserTrigger.addEventListener('click', function formClassRemover() {
    formWrapperContent.classList.remove('pop-up_opened');
});

let formElement = document.querySelector('.pop-up__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput')



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput = nameInput.value;
    jobInput = jobInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileAbout = document.querySelector('.profile__about');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput;
    profileAbout.textContent = jobInput;

    formWrapperContent.classList.remove('pop-up_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 