const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');
const no = document.getElementById('no');
// // const all = document.querySelectorAll('.flex-item')

ok.addEventListener('click', ()=>{
  // make margin left and margin right gradually increase
  let defM = 20
  while(defM < 200) {
    cancel.style.marginLeft = `${defM}px`;
    cancel.style.marginRight = `${defM}px`;
    defM += 1;
  }
})

const arrWord = ['ok', 'วิชานี้','ง่าย', 'จริงๆนะ']

no.addEventListener('dblclick', () => {
  let index = arrWord.indexOf(ok.innerText)
  if(typeof arrWord[index + 1] == 'undefined') {
    index = -1
  }
  ok.innerText = arrWord[index + 1]
})