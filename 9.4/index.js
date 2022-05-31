const divMassege = document.querySelector('#div');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const width = +document.querySelector('#inputWidth').value;
    const height = +document.querySelector('#inputHeight').value;

    if (width < 100 || width > 300 || height < 100 || height > 300){
        divMassege.innerHTML = `<p>Одно из чисел вне диапазона от 100 до 300</p>`;
    } else {
        fetch(`http://picsum.photos/${width}/${height}`)

        .then((response) => {
            divMassege.innerHTML = `
            <div class = "output">
                <img class = "photo" src = "${response.url}">
            </div>`;
        })

        .catch(() => {
            divMassege.innerHTML = `<p>Статус выполнения задания: ОШИБКА!!!</p>`
        });
    }
})