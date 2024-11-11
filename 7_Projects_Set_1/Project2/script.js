const calculate = document.querySelector('#button');
const result = document.querySelector('#result');
const des = document.querySelector('#des');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please give a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please give a valid weight';
    } else {
        const res = (weight / ((height / 100) * (height / 100))).toFixed(2);
        result.innerHTML = `${res}`;
        
        if (res < 18.6) {
            des.innerHTML = `<span>Under weight</span>`;
        } else if (res >= 18.6 && res < 24.9) {
            des.innerHTML = `<span>Normal range</span>`;
        } else if (res >= 24.9) {
            des.innerHTML = `<span>Over weight</span>`;
        }
    }
});
