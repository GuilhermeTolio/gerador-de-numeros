const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - 1 + 1)) + 1;

    if (isNaN(result)) {
        result = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = result;
});