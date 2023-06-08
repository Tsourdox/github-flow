window.addEventListener('DOMContentLoaded', main);

/** The state for our program */
const listOfCarBrands = ['BMW', 'Volvo', 'Telsa', 'Audi', 'Saab'];

/** Start of our program */
function main() {
  renderCarList();
}
/** Renders the car list to screen */
function renderCarList() {
  const ul = document.querySelector('ul');

  for (const carBrand of listOfCarBrands) {
    const li = document.createElement('li');
    li.textContent = carBrand;
    ul.append(li);
  }
}
