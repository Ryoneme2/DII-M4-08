const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');
// const no = document.getElementById('no');
// const all = document.querySelectorAll('.flex-item')

ok.addEventListener('click', ()=>{
  // make margin left and margin right gradually increase
  let defM = 20
  while(defM < 200) {
    cancel.style.marginLeft = `${defM}px`;
    cancel.style.marginRight = `${defM}px`;
    defM += 1;
  }
})