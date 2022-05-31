const divMassege = document.querySelector('#div');
const button = document.querySelector('#btn');
const data = localStorage.getItem('sevedInfo');

function displayResulte (data) {
    let image = "";
    if(data){
        data.forEach(item => {
            const imageDisplay = `
            <div class = "cin">
                <img class = "cinImage" src = "${item.download.url}">
            </div>`;
            image += imageDisplay;
        });

        divMassege.innerHTML = image;
    }
}

button.addEventListener('click', () => {
    const inputNumber = +document.querySelector('#inputNumber').value;
    const inputlimit = +document.querySelector('#inputLimit').value;

    if (!(Number.isInteger(inputNumber)) && !(Number.isInteger(inputlimit))){
        divMassege.innerHTML = `<p>Введенные вами данные не являются числом</p>`;
    } else if (inputNumber < 1 || inputNumber > 10 || inputlimit < 1 || inputlimit > 10) {
        divMassege.innerHTML = `<p>Введенные вами данные вне диапазона от 1 до 10. Введите число от 1 до 10!</p>`;
    } else if (!(Number.isInteger(inputNumber)) || (inputNumber < 1 || inputNumber > 10)) {
        divMassege.innerHTML = `<p>Введенные вами данные в поле Номер не являются числом, или же находится вне диапазона от 1 до 10! </p>`;
    } else if (!(Number.isInteger(inputlimit)) || (inputlimit < 1 || inputlimit > 10)) {
        divMassege.innerHTML = `<p>Введенные вами данные в поле Лимит не являются числом, или же находится вне диапазона от 1 до 10! </p>`
    } else {
        fetch(`https://picsum/.photos/v2/list?page=${inputNumber}&limit=${inputlimit}`)

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            data.setItem('sevedInfo', JSON.stringfy(data));
            displayResulte(data);
        })

        .catch(() => {
            divMassege.innerHTML = `<p>Статус обработки запроса: ОШИБКА!!!</p>`;
        })
    }
})