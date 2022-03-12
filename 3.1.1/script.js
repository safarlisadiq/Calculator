let inp = document.getElementById("inp");
function hesabla(say) {
  inp.value += say;
}
function calistir() {
  let ekran = inp.value;
let answer = eval(ekran);
inp.value = answer;
}
function temizle() {
  inp.value = "";
}
