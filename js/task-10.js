function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes')
}
// console.log(refs.divBoxes)
refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(evt) {
  destroyBoxes();
  createBoxes(+refs.input.value);
}

function onDestroyBtnClick(evt) {
  destroyBoxes();
}

function createBoxes(amount) {
  const elements = [];
  if (amount > 100) {
    alert("введено завелику кількість, максимум 100");
    return
  }
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30+10*i}px`;
    div.style.height = `${30+10*i}px`;
    div.style.background = getRandomHexColor();
    div.textContent = i+1;
    div.style.color = getRandomHexColor();
    elements.push(div);
  }
  refs.divBoxes.append(...elements);
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}
