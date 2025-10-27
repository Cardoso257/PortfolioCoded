// MODO CLARO/ESCURO COM MEMÓRIA ENTRE PÁGINAS
let botaoModo = document.getElementById('modo-btn');

let modoSalvo = localStorage.getItem('modoTema');

if (modoSalvo === 'claro') {
    document.body.classList.add('claro');
}

botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('claro');

    if (document.body.classList.contains('claro')) {
        localStorage.setItem('modoTema', 'claro');
    } else {
        localStorage.setItem('modoTema', 'escuro');
    }
});

// ---------- MODAL DE CONTATO ----------
const abrirModal = document.getElementById('abrirModal');
const modal = document.getElementById('modal');
const fecharModal = document.getElementById('fecharModal');
const formContato = document.getElementById('formContato');
const msgEnviada = document.getElementById('msgEnviada');

if (abrirModal) {
  abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
}

if (fecharModal) {
  fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
    msgEnviada.textContent = '';
    formContato.reset();
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

if (formContato) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    msgEnviada.textContent = '✅ Mensagem enviada com sucesso!';
    formContato.reset();

    setTimeout(() => {
      modal.style.display = 'none';
      msgEnviada.textContent = '';
    }, 2000);
  });
}

// ---------- EFEITO DE LUZ SEGUINDO O MOUSE ----------
const glow = document.createElement('div');
glow.classList.add('glow');
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Opcional: esconder o brilho em telas pequenas (celular)
if (window.innerWidth < 768) {
  glow.style.display = 'none';
}
