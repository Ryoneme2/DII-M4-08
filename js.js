/* eslint-disable no-unused-vars */
const searchButton = document.getElementById('searchButton');
const inputText = document.getElementById('floatingInput');
const output = document.getElementById('output');

function addText() {
  let text = inputText.value;
  let newButton = document.createElement('button');
  newButton.classList.add('btn')
  newButton.classList.add('btn-outline-primary')
  newButton.classList.add('my-2')
  newButton.setAttribute('type', 'button')
  newButton.innerText = text
  output.appendChild(newButton)

  inputText.value = '';
}

inputText.addEventListener('blur', (e) => {
  e.preventDefault()
  addText()
});