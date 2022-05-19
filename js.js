/* eslint-disable no-unused-vars */
// const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');
const no = document.getElementById('no');
const box = document.getElementById('box');
// const all = document.querySelectorAll('.flex-item')

const addContext = (context) => {
  const prevContext = box.innerText;
  box.innerText = `${prevContext} ${context}`;
}

const onOkClicked = (e) => {
  e.stopPropagation()
  addContext('OK')
}
function onCancelClicked(e) {
  e.stopPropagation()
  addContext('Cancel')
}
function onNoClick(e) {
  e.stopPropagation()
  addContext('No')

}

cancel.addEventListener('click', onCancelClicked)
no.onclick = onNoClick

document.getElementById('container').onclick = function (e) {
  alert('this is container')
}