function opcUsuario(tab) {
  if(tab=="gen-usuario"){
             var newHTML =
  '<div id="gen-usuario">\
    <div>\
      <div>\
        <p class="red-text">ID</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">Nombre</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">Apellido</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">E-mail</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">Plan</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
    </div>\
    <div>\
      <div>\
        <input type="checkbox" name="activo-usuario" class="bloq-list">\
        <label for="activo-usuario"></label>\
        <p class="gray-text">Activo</p>\
      </div>\
      <div>\
        <input type="checkbox" name="usuario-bloqueado" class="bloq-list">\
        <label for="usuario-bloqueado"></label>\
        <p class="gray-text">Usuario bloqueado</p>\
      </div>\
      <div>\
        <p class="gray-text">Buscar por</p>\
        <select class="droplist-campo">\
               <option value="" disabled selected>Seleccione un campo</option>\
               <option>Opcion 1</option>\
               <option>Opción 2</option>\
               <option>Opción 3</option>\
       </select>\
      </div>\
      <div>\
        <p class="red-text"><a>Ver otros planes</a></p>\
      </div>\
    </div>\
  </div>';
  document.getElementById("cont-usuario").innerHTML = newHTML;
  }

  if(tab=="seguridad-admin-usuario"){
         var newHTML =
  '<div id="seguridad-admin-usuario">\
    <div>\
      <p class="red-text">Password</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
      <input type="button" class="btn-ver">\
    </div>\
    <div>\
      <p class="red-text">Pregunta de seguridad 1</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
    <div>\
      <p class="red-text">Respuesta de seguridad 1</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
    <div>\
      <p class="red-text">Pregunta de seguridad 2</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
    <div>\
      <p class="red-text">Respuesta de seguridad 2</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
    <div>\
      <p class="red-text">Rol de usuario</p>\
      <select class="droplist-campo">\
             <option value="" disabled selected>Seleccione un campo</option>\
             <option>Opcion 1</option>\
             <option>Opción 2</option>\
             <option>Opción 3</option>\
     </select>\
    </div>\
    <div>\
      <p class="red-text">E-mail Alternativo</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
    <div>\
      <p class="red-text">El rol seleccionado xxxx</p>\
    </div>\
  </div>';
  document.getElementById("cont-usuario").innerHTML = newHTML;
  }

  if(tab=="conectividad-admin-usuario"){
         var newHTML =
  '<div id="conectividad-admin-usuario">\
    <div>\
      <div>\
        <p class="red-text">Autenticar redes sociales</p>\
        <input type="checkbox" name="autentificar-redes" class="bloq-list">\
        <label for="autentificar-redes"></label>\
      </div>\
      <div>\
        <p class="red-text">Red social</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">Usuario red</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">Token</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">Api Secret</p>\
        <select class="droplist-campo">\
               <option value="" disabled selected>Seleccione un campo</option>\
               <option>Opcion 1</option>\
               <option>Opción 2</option>\
               <option>Opción 3</option>\
       </select>\
      </div>\
      <input type="button" class="btn-guardar" id="guardar-conec-usuarios">\
    </div>\
    <div>\
      <div class="list" id="conectividad-usuario-list">\
          <div class="list-head">\
              <div class="item-list-head id-list3">\
                  <p>Id</p>\
              </div>\
              <div class="item-list-head redSocial-list">\
                  <p>Red social</p>\
              </div>\
              <div class="item-list-head usuario-list2">\
                  <p>Usuario</p>\
              </div>\
              <div class="item-list-head token-list">\
                  <p>Token</p>\
              </div>\
              <div class="item-list-head apik-list">\
                  <p>Api key</p>\
              </div>\
              <div class="item-list-head apis-list">\
                  <p>Api secret</p>\
              </div>\
              <div class="item-list-head campi-list">\
                  <p>X</p>\
              </div>\
          </div>\
          <div class="list-items">\
              <div class="list-items-item id-list3">\
                  <p>1</p>\
              </div>\
              <div class="list-items-item redSocial-list">\
                  <p>Facebook</p>\
              </div>\
              <div class="list-items-item usuario-list2">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item token-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apik-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apis-list">\
                  <p>XXXXX</p>\
              </div>\
              <div class="list-items-item campo-list">\
                  <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
                  <label for="autentificar-redes"></label></p>\
              </div>\
          </div>\
          <div class="list-items">\
              <div class="list-items-item id-list3">\
                  <p>2</p>\
              </div>\
              <div class="list-items-item redSocial-list">\
                  <p>Twitter</p>\
              </div>\
              <div class="list-items-item usuario-list2">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item token-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apik-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apis-list">\
                  <p>XXXXX</p>\
              </div>\
              <div class="list-items-item campo-list">\
                  <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
                  <label for="autentificar-redes"></label></p>\
              </div>\
          </div>\
          <div class="list-items">\
              <div class="list-items-item id-list3">\
                  <p>3</p>\
              </div>\
              <div class="list-items-item redSocial-list">\
                  <p>G+</p>\
              </div>\
              <div class="list-items-item usuario-list2">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item token-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apik-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apis-list">\
                  <p>XXXXX</p>\
              </div>\
              <div class="list-items-item campo-list">\
                  <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
                  <label for="autentificar-redes"></label></p>\
              </div>\
          </div>\
          <div class="list-items" >\
              <div class="list-items-item id-list3">\
                  <p>4</p>\
              </div>\
              <div class="list-items-item redSocial-list">\
                  <p>Instagram</p>\
              </div>\
              <div class="list-items-item usuario-list2">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item token-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apik-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apis-list">\
                  <p>XXXXX</p>\
              </div>\
              <div class="list-items-item campo-list">\
                  <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
                  <label for="autentificar-redes"></label></p>\
              </div>\
          </div>\
          <div class="list-items">\
              <div class="list-items-item id-list3">\
                  <p>5</p>\
              </div>\
              <div class="list-items-item redSocial-list">\
                  <p>xxxxx</p>\
              </div>\
              <div class="list-items-item usuario-list2">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item token-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apik-list">\
                  <p>xxxx</p>\
              </div>\
              <div class="list-items-item apis-list">\
                  <p>XXXXX</p>\
              </div>\
              <div class="list-items-item campo-list">\
                  <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
                  <label for="autentificar-redes"></label></p>\
              </div>\
          </div>\
      </div>\
      <input type="button" class="btn-quitar" id="quitar-conec-usuarios">\
    </div>\
  </div>';
  document.getElementById("cont-usuario").innerHTML = newHTML;
  }

  if(tab=="adicionales-admin-usuarios"){
         var newHTML =
  '<div id="adicionales-admin-usuarios">\
    <div>\
      <div>\
        <p class="red-text">Suscrito RSS</p>\
        <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
        <label for="autentificar-redes"></label></p>\
      </div>\
      <div>\
        <p class="red-text">Acepta Notificaciones</p>\
        <p><input type="checkbox" name="autentificar-redes" class="bloq-list">\
        <label for="autentificar-redes"></label></p>\
      </div>\
    </div>\
    <div>\
      <div>\
        <textarea id="text-adicionales" class="textarea-causa"></textarea>\
        <img src="../img/sombra-imagen2.png">\
      </div>\
      <div>\
        <img src="../img/ejm-perfil.png">\
        <img src="../img/sombra-imagen.png">\
      </div>\
    </div>\
    <div>\
      <div>\
        <p class="red-text">Red social</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
      <div>\
        <p class="red-text">País</p>\
        <div class="border-input">\
            <input type="text">\
        </div>\
      </div>\
    </div>\
    <div>\
      <p class="red-text">Usuario red</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
    <div>\
      <p class="red-text">Token</p>\
      <div class="border-input">\
          <input type="text">\
      </div>\
    </div>\
  </div>';
  document.getElementById("cont-usuario").innerHTML = newHTML;
  }
}
