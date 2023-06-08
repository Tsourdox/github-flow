window.addEventListener('DOMContentLoaded', main);

/** The state for our program */
let listOfCarBrands = ['BMW', 'Volvo', 'Telsa', 'Audi', 'Saab'];

/** Start of our program */
function main() {
  addEventListeners();
  renderCarList();
}

function addEventListeners() {
  const removeButton = document.querySelector('#remove-car-brand');
  removeButton?.addEventListener('click', removeLastCarBrand);

  const addButton = document.querySelector('#add-car-brand');
  addButton?.addEventListener('click', addCarBrand);
}

function addCarBrand(event) {
  const result = prompt('Ange ett bilmärke');
  listOfCarBrands.push(result);
  renderCarList();
}

function removeLastCarBrand(event) {
  listOfCarBrands.pop();
  renderCarList();
}

/** Renders the car list to screen */
function renderCarList() {
  const ul = document.querySelector('ul');

  ul.innerHTML = null;

  for (const carBrand of listOfCarBrands) {
    const li = document.createElement('li');
    li.textContent = carBrand + ' ❌';

    li.addEventListener('click', function () {
      // 1. Med indexOf & splice.
      // const indexToRemove = listOfCarBrands.indexOf(carBrand);
      // listOfCarBrands.splice(indexToRemove, 1);

      // 2. Med filter.
      listOfCarBrands = listOfCarBrands.filter(
        (carBrandItem) => carBrandItem !== carBrand
      );

      renderCarList();
    });

    ul.append(li);
  }
}
