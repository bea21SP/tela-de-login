const nomeInput = document.getElementById('nome');
const erroNome = document.getElementById('erro-nome');
nomeInput.addEventListener('input', function() {
  if (/[^a-zA-ZÀ-ÿ\s]/.test(this.value)) {
    erroNome.style.display = 'inline';
  } else {
    erroNome.style.display = 'none';
  }
  this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});

const emailInput = document.getElementById('email');
const erroEmail = document.getElementById('erro-email');
emailInput.addEventListener('input', function() {
  if (/\s/.test(this.value)) {
    erroEmail.style.display = 'inline';
  } else {
    erroEmail.style.display = 'none';
  }
  this.value = this.value.replace(/\s/g, '');
});

const cpfInput = document.getElementById('cpf');
const erroCpf = document.getElementById('erro-cpf');
cpfInput.addEventListener('input', function() {
  if (/[^0-9\.-]/.test(this.value)) {
    erroCpf.style.display = 'inline';
  } else {
    erroCpf.style.display = 'none';
  }
  this.value = this.value.replace(/[^0-9\.]/g, '');
});

const rgInput = document.getElementById('rg');
const erroRg = document.getElementById('erro-rg');
rgInput.addEventListener('input', function() {
  if (/[^0-9\.]/.test(this.value)) {
    erroRg.style.display = 'inline';
  } else {
    erroRg.style.display = 'none';
  }
  this.value = this.value.replace(/[^0-9\.-]/g, '');
});

const enderecoInput = document.getElementById('endereco');
const erroEndereco = document.getElementById('erro-endereco');
enderecoInput.addEventListener('input', function() {
  if (/[^a-zA-ZÀ-ÿ0-9\s]/.test(this.value)) {
    erroEndereco.style.display = 'inline';
  } else {
    erroEndereco.style.display = 'none';
  }
  this.value = this.value.replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, '');
});

const telefoneInput = document.getElementById('telefone');
const erroTelefone = document.getElementById('erro-telefone');
telefoneInput.addEventListener('input', function() {
  if (/[^0-9\(\)\s]/.test(this.value)) {
    erroTelefone.style.display = 'inline';
  } else {
    erroTelefone.style.display = 'none';
  }
  this.value = this.value.replace(/[^0-9\(\)\s]/g, '');
});

const senhaInput = document.getElementById('senha');
const erroSenha = document.getElementById('erro-senha');
senhaInput.addEventListener('input', function() {
  if (/\s/.test(this.value)) {
    erroSenha.style.display = 'inline';
  } else {
    erroSenha.style.display = 'none';
  }
  this.value = this.value.replace(/\s/g, '');
});
