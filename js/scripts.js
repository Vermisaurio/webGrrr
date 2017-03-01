function menuFotoPerfil() {
  menu = document.getElementById('menu-perfil');
  if (menu.style.opacity == 0) {
    menu.style.opacity = 1;
    menu.style.top = 45 + 'px';
  }
  else {
    menu.style.opacity = 0;
    menu.style.top = -180 + 'px';
  }
}

function menuOpc(elm) {
  menu = elm.getElementsByTagName('div');
  if (menu[0].style.opacity == 0) {
    menu[0].style.opacity = 1;
    menu[0].style.display = 'block';
    menu[0].style.top = '25px'
  }
  else {
    menu[0].style.opacity = 0;
    menu[0].style.display = 'none';
    menu[0].style.top = '0';
    }
}

function aumentarInput() {
  input = document.getElementById('nuevo-gru');
  input.style.height = '90px';
  document.getElementById('campos-nuevo-grun').style.display = 'block';
  document.getElementById('foto-mini-nuevo').style.display = 'none';
}

function disminuirInput() {
  input = document.getElementById('nuevo-gru');
  input.style.height = '28px';
  document.getElementById('campos-nuevo-grun').style.display = 'none';
  document.getElementById('foto-mini-nuevo').style.display = 'block';
}
