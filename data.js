const dataElement = document.getElementById('data');
const savedData = localStorage.getItem('savedData');

dataElement.textContent = savedData ? savedData : 'No hay datos guardados.';
