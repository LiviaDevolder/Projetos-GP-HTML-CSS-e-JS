const image = document.createElement('img');

function calcular(){
  var idade = parseInt(document.getElementById("idade").value);

  if (idade >= 0 && idade <=4) {
    categoria = "Baby";
    image.src  = 'imagens/01.jpg';
    document.querySelector('.container').appendChild(image)
  } else if (idade >= 5 && idade <= 7) {
    categoria = "Infantil A";
    image.src  = 'imagens/02.jpg';
    document.querySelector('.container').appendChild(image)
  } else if (idade >= 8 && idade <= 11) {
    categoria = "Infantil B";
    image.src  = 'imagens/03.jpg';
    document.querySelector('.container').appendChild(image)
  } else if (idade >= 12 && idade <= 13) {
    categoria = "Juvenil A";
    image.src  = 'imagens/04.jpg';
    document.querySelector('.container').appendChild(image)
  } else if (idade >= 14 && idade <= 17) {
    categoria = "Juvenil B";
    image.src  = 'imagens/05.jpg';
    document.querySelector('.container').appendChild(image)  
  } else {
    categoria = "Adulto";
    image.src  = 'imagens/06.jpg';
    document.querySelector('.container').appendChild(image)
  }

  document.getElementById('classificacao').innerHTML = categoria;  

}

function limpar() {
  document.getElementById('idade').value='';
  document.getElementById('classificacao').innerHTML='';
  image.remove()  
}

 