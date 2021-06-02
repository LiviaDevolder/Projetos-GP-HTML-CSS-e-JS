function reservar() {
  var rg = parseInt(document.getElementById("rg").value);
  var numeroVoo = parseInt(document.getElementById("numVoo").value);
  var lugaresDisponiveis = parseInt(document.getElementById("lugares").value);

  var voos = [
    [727, 15],
    [442, 16],
    [331, 0],
    [4471, 90],
    [221, 16],
    [291, 15]
  ];
}

function limpar() {
  document.getElementById('rg').value='';
  document.getElementById('numVoo').value='';
  document.getElementById('lugares').value='';
  document.getElementById('reserva').innerHTML='';
}