const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");

ok.addEventListener('mouseover', (e) => {
  console.log(e);
})

cancel.addEventListener('mousemove', (e) => {
  console.log("X : " + e.clientX);
  console.log("Y : " + e.clientY);
})
