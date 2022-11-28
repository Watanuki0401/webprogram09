function cul(){
  var Num1 = parseInt(document.getElementById('num1').value);
  var Num2 = parseInt(document.getElementById('num2').value);
  var r = parseInt(document.getElementById('op').value);
  if(r == 1){
    ans = Num1 + Num2;
  }else if (r == 2) {
    ans = Num1 - Num2;
  }else if (r == 3) {
    ans = Num1 * Num2;
  }else {
    ans = Num1 / Num2;
  }
  document.getElementById('ans').value = ans;
}
