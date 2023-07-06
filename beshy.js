const btnBesh = document.getElementById("btnBesh");
const inputBesh = document.querySelector(".inputBesh");
const outputBesh = document.querySelector(".beshy");

btnBesh.addEventListener("click", () => {
  if (inputBesh.value != '') {
    inputBesh.select();
    inputBesh.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputBesh.value);
    document.exeCommand("copy");
    alert("Na copy mo na sya besh 🤸");
  }
  
})
inputBesh.addEventListener('keyup', (e) => {
  const beshyInput = inputBesh.value;
  const change = beshyInput.split(' ').join('🤸');
  outputBesh.textContent = change;
})
