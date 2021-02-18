const valueInputRef = document.querySelector('.js-value');
const addValueBtn = document.querySelector('.js-add-value');
const calcBtn = document.querySelector('.js-calculate');

const numbers = [];
let total = 0;

addValueBtn.addEventListener('click', function() {
    const value = Number(valueInputRef.value);

    numbers.push(value);

    valueInputRef.value = '';

    // console.log(numbers);
});

calcBtn.addEventListener('click', function() {
    for(const number of numbers) {
        total += number;
    };

    console.log(`Общая сумма чисел равна ${total}.`)

});