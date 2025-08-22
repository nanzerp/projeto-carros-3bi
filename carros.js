// Mostrar/ocultar descrição ao passar o mouse
document.querySelectorAll('.filme').forEach(filme => {
  filme.addEventListener('mouseenter', () => {
    filme.querySelector('.descricao').style.display = 'block';
  });
  filme.addEventListener('mouseleave', () => {
    filme.querySelector('.descricao').style.display = 'none';
  });
});

// Controle de fonte
let fontSize = 14;
function aumentarFonte() {
  fontSize += 2;
  document.querySelectorAll('.descricao').forEach(desc => {
    desc.style.fontSize = fontSize + "px";
  });
}

function diminuirFonte() {
  if (fontSize > 10) {
    fontSize -= 2;
    document.querySelectorAll('.descricao').forEach(desc => {
      desc.style.fontSize = fontSize + "px";
    });
  }
}

// Alternar contraste
let contrasteAtivo = false;
function alternarContraste() {
  contrasteAtivo = !contrasteAtivo;
  if (contrasteAtivo) {
    document.body.classList.add('alto-contraste');
  } else {
    document.body.classList.remove('alto-contraste');
  }
}
