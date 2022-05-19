const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');
const no = document.getElementById('no');
const all = document.querySelectorAll('.flex-item')

const arrAll = Array.from(all);
arrAll.forEach((v) => {
  v.addEventListener('click', (e) => {
    alert(v.innerHTML)
    console.log("%c" + v.innerHTML, "font: 80px sans-serif; font-weight:bold; color:red; -webkit-text-stroke:1px black;");
  })
})