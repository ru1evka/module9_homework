//Ищем HTML элементы 
const divMassege = document.querySelector('#div');
const btn = document.querySelector('#btn');
//
function pageLoaded(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
        if (xhr.status == 200) {
            const resulteParse = JSON.parse(xhr.response); 
            if (callback){
                callback(resulteParse);
            }
        }
    }

    xhr.onerror = () => {
        divMassege.innerHTML = `<p>Статус ответа: ОБШИБКА!!!<br>${xhr.status} </p>`;
    }

    xhr.send();
}

function displayResult(apiData) {
    let image ='';

    apiData.forEach(item => {
        const imageSector = `
        <div>
            <img class ='imageUrl' src = "${item.download_url}">
        </div>`;

        image += imageSector;
    });

    divMassege.innerHTML = image;
}

btn.addEventListener('click', () =>{
    const input = +document.querySelector(`#input`).value;
    if (Number.isInteger(input)){
        if (input < 1 || input >10){
            divMassege.innerHTML = `<p>Число вне дипазона от 1 до 10</p>`
        }else{
            pageLoaded(`http://picsum.photos/v2/list/?limit=${input}`, displayResult)
        }
    divMassege.innerHTML = `<p>Введено не число или же число дробное. Попробуйте ввести целое число!</p>`
    }
});
