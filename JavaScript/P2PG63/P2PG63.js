function pascoa() {
  var ano = parseInt(document.getElementById('ano').value);
  var a = ano % 19;
  var b = Math.floor(ano / 100);
  var c = ano % 100;
  var d = Math.floor(b / 4);
  var e = b % 4;
  var f = Math.floor((b + 8) / 25);
  var g = Math.floor((b - f + 1) / 3);
  var h = (19 * a + b - d - g + 15) % 30;
  var i = Math.floor(c / 4);
  var j = c % 4;
  var k = (32 + 2 * e + 2 * i - h - j) % 7;
  var L = Math.floor((a + 11 * h + 22 * k) / 451);
  var mes = Math.floor((h + k - 7 * L + 114) / 31);
  var dia = ((h + k - 7 * L + 114) % 31) + 1;

  document.getElementById('msg').innerHTML =
    'Neste ano a páscoa será em: ' + dia + ' de ' + buscarMes(mes);
}

function buscarMes(mes) {
  if (mes == 3) {
    return 'março';
  } else {
    return 'abril';
  }
}

function limpar() {
  document.getElementById('ano').value = '';
  document.getElementById('msg').innerHTML = '';
}
