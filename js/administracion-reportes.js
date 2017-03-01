 function cambiarReporte(tab) {
     var elemn = document.getElementById("op-admin-repor").getElementsByTagName('li');
     for(i=0; i<elemn.length; i++){
         elemn[i].setAttribute('class','');
         imgli = elemn[i].getElementsByTagName('img');
         imgli[0].style.display = "none";
     }
        if(tab=="reportes-actuales"){
            var newHTML = 
                '<div id="reportes-actuales">\
                     <div>\
                          <p class="gray-text">Buscar por</p>\
                          <select class="droplist-campo">\
                                 <option value="" disabled selected>Seleccione un campo</option>\
                                 <option>Opcion 1</option>\
                                 <option>Opción 2</option>\
                                 <option>Opción 3</option>\
                         </select>\
                         <input type="search" class="search" id="search-reportes-actuales">\
                      </div>\
                      <p class="red-text">Nuevo Reporte(+)</p>\
                      <div class="clear"></div>\
                      <div class="list" id="admin-repor-list">\
                          <div class="list-head">\
                              <div class="item-list-head">\
                                  <p>ID</p>\
                              </div>\
                              <div class="item-list-head">\
                                  <p>Nombre</p>\
                              </div>\
                              <div class="item-list-head ">\
                                  <p>Link</p>\
                              </div>\
                              <div class="item-list-head">\
                                  <p>Tipo de reporte</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>1</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Tabular</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>2</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Tabular</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>3</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Tabular</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>4</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Tabular</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>5</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Tabular</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>6</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Tabular</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>7</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>Gráfico</p>\
                              </div>\
                          </div>\
                      </div>\
                  </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[0].setAttribute('class','admin-repor-activo');
            imgli = elemn[0].getElementsByTagName('img');
            imgli[0].style.display = "block";
        }
        
        if(tab=="datos-reporte"){
            var newHTML = 
                '<div id="datos-reporte">\
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
                     </div>\
                     <div>\
                         <div>\
                             <p class="red-text">Link de reporte</p>\
                             <div class="border-input">\
                                 <input type="text">\
                             </div>\
                         </div>\
                         <div>\
                             <p class="red-text">Tipo de reporte</p>\
                             <select id="buscarpor-addenuncias" name="buscarpor-addenuncias" class="droplist-campo">\
                                     <option value="" disabled selected>Seleccione un campo</option>\
                                     <option>Opcion 1</option>\
                                     <option>Opción 2</option>\
                                     <option>Opción 3</option>\
                             </select>\
                         </div>\
                     </div>\
                     <input type="button" class="btn-siguiente" id="btn-siguiente-reportes">\
                 </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[1].setAttribute('class','admin-repor-activo');
            imgli = elemn[1].getElementsByTagName('img');
            imgli[0].style.display = "block";
        }
        if(tab=="fuente-datos"){
            var newHTML = 
                ' <div id="fuentes-datos">\
                    <div>\
                         <p class="red-text">Disponibles</p>\
                         <div class="contenedores-fuente">\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                         </div>\
                         <input type="button" class="btn-atras" id="btn-atras-fuente">\
                     </div>\
                     <div>\
                        <div>\
                             <input type="button" class="btn-agregar" id="btn-agregar-datos">\
                             <img src="../img/flecha-doble-der.png">\
                        </div>\
                        <div>\
                            <img src="../img/flecha-doble-izq.png">\
                            <input type="button" class="btn-quitar" id="btn-quitar-reportes">\
                        </div>\
                     </div>\
                     <div>\
                         <p class="red-text">Agregados</p>\
                         <div class="contenedores-fuente">\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                             <p class="gray-text">XXXXXXXXX</p>\
                         </div>\
                         <input type="button" class="btn-siguiente" id="btn-siguiente-fuente">\
                     </div>\
                </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[2].setAttribute('class','admin-repor-activo');
            imgli = elemn[2].getElementsByTagName('img');
            imgli[0].style.display = "block";
        }
        if(tab=="columnas-mostrar"){
            var newHTML = 
                '  <div id="columnas-mostrar">\
                    <div>\
                         <p class="red-text">Disponibles</p>\
                         <div class="contenedores-fuente">\
                            <div>\
                                <input type="checkbox" class="bloq-list" id="columnas-1" value="">\
                                 <label for="columnas-1"></label>\
                                 <p class="gray-text">XXXXXXXXX</p>\
                            </div>\
                         </div>\
                         <input type="button" class="btn-atras" id="btn-atras-fuente">\
                     </div>\
                     <div>\
                        <div>\
                             <input type="button" class="btn-agregar" id="btn-agregar-datos">\
                             <img src="../img/flecha-doble-der.png">\
                        </div>\
                        <div>\
                            <img src="../img/flecha-doble-izq.png">\
                            <input type="button" class="btn-quitar" id="btn-quitar-reportes">\
                        </div>\
                     </div>\
                     <div>\
                         <p class="red-text">Agregados</p>\
                         <div class="contenedores-fuente">\
                            <div>\
                                <input type="checkbox" class="bloq-list" id="columnas-2" value="">\
                                 <label for="columnas-2"></label>\
                                 <p class="gray-text">XXXXXXXXX</p>\
                            </div>\
                         </div>\
                         <input type="button" class="btn-siguiente" id="btn-siguiente-fuente">\
                     </div>\
                </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[3].setAttribute('class','admin-repor-activo');
            imgli = elemn[3].getElementsByTagName('img');
            imgli[0].style.display = "block";
        }
        if(tab=="filtros-reporte"){
            var newHTML = 
                '<div id="filtros-reporte">\
                     <div>\
                         <p class="gray-text">Columna</p>\
                         <select class="droplist-campo" id="columnas-filtros">\
                                 <option value="" disabled selected>Seleccione un campo</option>\
                                 <option>Opcion 1</option>\
                                 <option>Opción 2</option>\
                                 <option>Opción 3</option>\
                         </select>\
                     </div>\
                     <div>\
                         <input type="checkbox" class="bloq-list" id="ordenar-filtros" value="">\
                         <label for="ordenar-filtros"></label>\
                         <p class="gray-text">Ordenar</p>\
                     </div>\
                     <div>\
                         <p class="gray-text">Operador</p>\
                         <select class="droplist-campo" id="operador-filtro">\
                                 <option value="" disabled selected>Seleccione un campo</option>\
                                 <option>Opcion 1</option>\
                                 <option>Opción 2</option>\
                                 <option>Opción 3</option>\
                         </select>\
                     </div>\
                     <div>\
                         <p class="gray-text">Valor (opcional)</p>\
                         <div class="border-input" id="cont-valor-filtros">\
                             <input type="text" id="valor-filtros">\
                         </div>\
                     </div>\
                     <input type="button" class="btn-agregar" id="btn-agregar-filtros">\
                     <div class="list" id="filtros-reporte-list">\
                          <div class="list-head">\
                              <div class="item-list-head">\
                                  <p>Columna</p>\
                              </div>\
                              <div class="item-list-head">\
                                  <p>Operador</p>\
                              </div>\
                              <div class="item-list-head ">\
                                  <p>Valor</p>\
                              </div>\
                              <div class="item-list-head">\
                                  <p>Acción</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <input type="button" class="btn-quitar-lista" value="Quitar">\
                              </div>\
                          </div>\
                      </div>\
                      <input type="button" class="btn-atras" id="btn-atras-filtros">\
                      <input type="button" class="btn-siguiente" id="btn-siguiente-filtros">\
                 </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[4].setAttribute('class','admin-repor-activo');
            imgli = elemn[4].getElementsByTagName('img');
            imgli[0].style.display = "block";
        }
        if(tab=="mostrar-reporte"){
            var newHTML = 
                '<div id="mostrar-reporte">\
                    <div>\
                         <p class="gray-text">Resultado Tabular</p>\
                         <input type="button" class="btn-ejecutar" id="btn-ejecutar-reporte">\
                    </div>\
                     <div class="list" id="reporte-list">\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                          <div class="list-items">\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXXXXXXXXXX</p>\
                              </div>\
                              <div class="list-items-item">\
                                  <p>XXX</p>\
                              </div>\
                          </div>\
                      </div>\
                      <div>\
                          <p class="gray-text">Exportar a</p>\
                          <select class="droplist-campo">\
                                 <option value="" disabled selected>Seleccione un campo</option>\
                                 <option>Opcion 1</option>\
                                 <option>Opción 2</option>\
                                 <option>Opción 3</option>\
                         </select>\
                        <input type="button" class="btn-siguiente" id="btn-siguiente-mostrar-reporte" onclick="cambiarReporte('+"'"+'mostrar-reporte2'+"'"+')">\
                      </div>\
                 </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[5].setAttribute('class','admin-repor-activo');
            imgli = elemn[5].getElementsByTagName('img');
            imgli[0].style.display = "block";
        }
     if(tab=="mostrar-reporte2"){
            var newHTML = 
                '<div id="mostrar-reporte2">\
                    <div>\
                        <p class="gray-text">Resultado Gráfico</p>\
                         <input type="button" class="btn-ejecutar" id="btn-ejecutar-reporte">\
                    </div>\
                     <div class="red-line">\
                          <div class="red"></div>\
                          <img src="../img/linea-separador.png">\
                      </div>\
                      <div>\
                          <div>\
                              <input type="checkbox" class="bloq-list" id="icon-torta">\
                              <label for="icon-torta"></label>\
                              <img src="../img/icon-torta.png">\
                          </div>\
                          <div>\
                              <input type="checkbox" class="bloq-list" id="icon-barrash">\
                              <label for="icon-barrash"></label>\
                              <img src="../img/icon-barrash.png">\
                          </div>\
                          <div>\
                              <input type="checkbox" class="bloq-list" id="icon-barrasv">\
                              <label for="icon-barrasv"></label>\
                              <img src="../img/icon-barrasv.png">\
                          </div>\
                      </div>\
                      <div>\
                          <img src="../img/torta-grande.png">\
                      </div>\
                      <div>\
                          <p class="gray-text">Exportar a</p>\
                          <select class="droplist-campo">\
                                 <option value="" disabled selected></option>\
                                 <option>Opcion 1</option>\
                                 <option>Opción 2</option>\
                                 <option>Opción 3</option>\
                         </select>\
                         <input type="button" class="btn-exportar" id="btn-exportar-mostrar-reporte">\
                      </div>\
                 </div>';
            document.getElementById("cont2-admin-repor").innerHTML = newHTML;
            elemn[5].setAttribute('class','admin-repor-activo');
    }
 }