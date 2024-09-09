const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', () => {
    localStorage.setItem('savedData', inputText.value);
    inputText.value = '';
});

