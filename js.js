/* eslint-disable no-unused-vars */
const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');
const no = document.getElementById('no');
const box = document.getElementById('box');
const all = document.querySelectorAll('.flex-item')
const cont = document.getElementById('container');

const cont2 = document.getElementById('container2');
let counter = 0

function addNode() {
  const newNode = document.createElement('div');
  newNode.classList.add('flex-item');
  newNode.setAttribute('id', counter)
  counter++
  newNode.innerText = counter
  cont2.appendChild(newNode);
}
ok.addEventListener('click', (e) => {
  e.stopPropagation()
  addNode()
})

// const addContext = (context) => {
//   const prevContext = box.innerText;
//   box.innerText = `${prevContext} ${context}`;
// }

// for(let el of all) {
//   el.addEventListener('click', (e) => {
//     e.stopPropagation()
//     const text = el.innerText.split('').map((v,i) => {
//       if(i === 0) {
//         return v.toUpperCase()
//       }
//       return v
//     }).join('')
//     addContext(text);
//   })
// }

function onDelClick(e) {
  // e.stopPropagation()
  // box.innerText = ``;
  cont2.innerHTML = ''
  counter = 0
}

document.getElementById('container').onclick = onDelClick