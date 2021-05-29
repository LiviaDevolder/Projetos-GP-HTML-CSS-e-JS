var voos = iniciarVoos();
var assentos = iniciarAssentos();

atualizarTabela();

function iniciarVoos() {
  return [14, 37, 150, 191, 200];
}
function iniciarAssentos() {
  return [0, 4, 10, 1, 5];
}

function atualizarTabela() {
  var htmlTabela = '<table border="1" class="tabela">';
  htmlTabela += '<tr><th># Voo</th><th>Assentos</th></tr>';

  for (var index = 0; index < voos.length; index++) {
    htmlTabela +=
      '<tr><td>' + voos[index] + '</td><td>' + assentos[index] + '</td></tr>';
  }
  htmlTabela += '</table>';
  document.getElementById('tabela').innerHTML = htmlTabela;
}

function reservar() {
  var identidade = document.getElementById('identificacao').value;
  var voo = document.getElementById('voo').value;

  if (!vooExiste(voo)) {
    alert('Voo não Existe!');
    return;
  } else if (identidade.length == 0) {
    alert('Insira seu número de identidade!')
    return;
  }

  var indiceVoo = buscarIndiceVoo(voo);
  var quantidadeAssentos = assentos[indiceVoo];

  if (quantidadeAssentos == 0) {
    alert('Voo não possui assentos disponíveis!');
    return;
  }

  assentos[indiceVoo] = assentos[indiceVoo] - 1;

  atualizarTabela();

  var reservas = document.getElementById('reservas').innerHTML;
  reservas += '<p> ' + voo + ' - ' + identidade + '</p>';
  document.getElementById('reservas').innerHTML = reservas;
}

function buscarIndiceVoo(voo) {
  for (var indice = 0; indice < voos.length; indice++) {
    if (voos[indice] == voo) {
      return indice;
    }
  }
}

function vooExiste(voo) {
  for (var i = 0; i < voos.length; i++) {
    if (voos[i] == voo) {
      return true;
    }
  }
  return false;
}

function limpar() {
  voos = iniciarVoos();
  assentos = iniciarAssentos();

  atualizarTabela();
  document.getElementById('reservas').innerHTML = '<h3>Reservas</h3>';
  document.getElementById('identificacao').value = '';
  document.getElementById('voo').value = '';
}
