/* eslint-disable no-unused-vars */
// const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');
const no = document.getElementById('no');
const box = document.getElementById('box');
const all = document.querySelectorAll('.flex-item')

const addContext = (context) => {
  const prevContext = box.innerText;
  box.innerText = `${prevContext} ${context}`;
}

for(let el of all) {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    const text = el.innerText.split('').map((v,i) => {
      if(i === 0) {
        return v.toUpperCase()
      }
      return v
    }).join('')
    addContext(text);
  })
}

function onDelClick(e) {
  e.stopPropagation()
  box.innerText = ``;
}

document.getElementById('container').onclick = onDelClick