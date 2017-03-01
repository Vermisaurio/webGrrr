 function cambiarPerfil(tab) {
     var elemn = document.getElementById("op-perfil").getElementsByTagName('li');
     for(i=0; i<elemn.length; i++){
         elemn[i].setAttribute('class','');
         imgli = elemn[i].getElementsByTagName('img');
         imgli[0].style.display = "none";
     }
     
     if(tab=="gruñidos"){
            var newHTML = 
                '<div id="grunidos">\
                     <div class="cont-grunido">\
                         <div class="texto-grunido">\
                             <p>A paragrah of <a>text</a> width an unassigned link. A second row of <a>text</a> with a web link</p>\
                             <div class="btn-time-gru"><p>1 hr</p></div>\
                         </div>\
                         <div class="btns-grunido">\
                             <input type="button" class="btn-eliminar2">\
                             <input type="button" class="btn-exportar2">\
                             <input type="button" class="btn-ver-causa">\
                         </div>\
                     </div>\
                     <div class="cont-grunido">\
                         <div class="texto-grunido">\
                             <p>A paragrah of <a>text</a> width an unassigned link. A second row of <a>text</a> with a web link</p>\
                             <div class="btn-time-gru"><p>1 hr</p></div>\
                         </div>\
                         <div class="btns-grunido">\
                             <input type="button" class="btn-eliminar2">\
                             <input type="button" class="btn-exportar2">\
                             <input type="button" class="btn-ver-causa">\
                         </div>\
                     </div>\
                     <div class="cont-grunido">\
                         <div class="texto-grunido">\
                             <p>A paragrah of <a>text</a> width an unassigned link. A second row of <a>text</a> with a web link</p>\
                             <div class="btn-time-gru"><p>1 hr</p></div>\
                         </div>\
                         <div class="btns-grunido">\
                             <input type="button" class="btn-eliminar2">\
                             <input type="button" class="btn-exportar2">\
                             <input type="button" class="btn-ver-causa">\
                         </div>\
                     </div>\
                     <div class="cont-grunido">\
                         <div class="texto-grunido">\
                             <p>A paragrah of <a>text</a> width an unassigned link. A second row of <a>text</a> with a web link</p>\
                             <div class="btn-time-gru"><p>1 hr</p></div>\
                         </div>\
                         <div class="btns-grunido">\
                             <input type="button" class="btn-eliminar2">\
                             <input type="button" class="btn-exportar2">\
                             <input type="button" class="btn-ver-causa">\
                         </div>\
                     </div>\
                 </div>';
            document.getElementById("cont2-perfil").innerHTML = newHTML;
            elemn[0].setAttribute('class','admin-repor-activo');
            imgli = elemn[0].getElementsByTagName('img');
            imgli[0].style.display = "block";
     }
     
     if(tab=="causas"){
            var newHTML = 
                '<div id="mis-causas">\
                     <p class="gray-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quo quos iusto nemo accusamus sit vel inventore dolor ex vero veniam voluptas soluta pariatur a, praesentium aperiam, impedit officia. Aperiam.</p>\
                     <div class="bxslider">\
                         <div><img src="../img/slider1.png"></div>\
                         <div><img src="../img/slider2.png"></div>\
                         <div><img src="../img/slider3.png"></div>\
                         <div><img src="../img/slider4.png"></div>\
                     </div>\
                     <div class="red-line">\
                          <div class="red"></div>\
                          <img src="../img/linea-separador2.jpg">\
                     </div>\
                     <div>\
                         <div id="ubicacion-causas">\
                             <img src="../img/icon-ubicacion.png">\
                             <p>Ubicación</p>\
                         </div>\
                         <div id="cifras-causas">\
                             <p>123456789</p>\
                         </div>\
                         <input type="button" class="btn-estadisticas">\
                     </div>\
                     <div class="red-line-ver">\
                          <div class="red2"></div>\
                          <img src="../img/linea-separador4.png">\
                     </div>\
                     <div>\
                         <div id="ops-mis-causas">\
                             <a>Exportar</a>\
                             <a>Causas</a>\
                             <a>Nube de etiquetas</a>\
                         </div>\
                         <div id="op-exportar">\
                             <div class="cont-gru-expor">\
                                 <p>\
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magnam excepturi eius voluptas pariatur qui aliquid, modi placeat amet. Alias illum veritatis suscipit numquam fuga maxime ipsam, sit accusantium temporibus!\
                                 </p>\
                             </div>\
                             <div class="cont-gru-expor">\
                                 <p>\
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magnam excepturi eius voluptas pariatur qui aliquid, modi placeat amet. Alias illum veritatis suscipit numquam fuga maxime ipsam, sit accusantium temporibus!\
                                 </p>\
                             </div>\
                             <div class="cont-gru-expor">\
                                 <p>\
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magnam excepturi eius voluptas pariatur qui aliquid, modi placeat amet. Alias illum veritatis suscipit numquam fuga maxime ipsam, sit accusantium temporibus!\
                                 </p>\
                             </div>\
                             <input type="button" class="btn-compartir" id="comp-exportar">\
                             <input type="button" class="btn-seguir-causa" id="seguir-exportar">\
                         </div>\
                     </div>\
                 </div>';
            document.getElementById("cont2-perfil").innerHTML = newHTML;
            elemn[1].setAttribute('class','admin-repor-activo');
            imgli = elemn[1].getElementsByTagName('img');
            imgli[0].style.display = "block";
            $(document).ready(function(){
              $('.bxslider').bxSlider({
                    slideWidth: 324,
                    minSlides: 1,
                    maxSlides: 1,
                    slideMargin: 10,
                    auto: true,
              });
            }); 
     }
     
     if(tab=="descargas"){
            var newHTML = 
                '<div id="descargas">\
                     <div>\
                         <div>\
                             <p class="gray-text">Exportar</p>\
                              <select class="droplist-campo">\
                                     <option value="" disabled selected>Seleccione un campo</option>\
                                     <option>Opcion 1</option>\
                                     <option>Opción 2</option>\
                                     <option>Opción 3</option>\
                             </select>\
                         </div>\
                         <div id="redes-descargas">\
                             <p class="red-text">Compartir en</p>\
                             <a href=""><img src="../img/icon-googleplus.png" alt=""></a>\
                             <a href=""><img src="../img/icon-facebook.png" alt=""></a>\
                             <a href=""><img src="../img/icon-instagram.png" alt=""></a>\
                             <a href=""><img src="../img/icon-twitter.png" alt=""></a>\
                         </div>\
                     </div>\
                     <div>\
                         <p class="red-text">Seleccionar todo</p>\
                         <div class="clear"></div>\
                         <div class="list" id="descargas-list">\
                              <div class="list-head">\
                                  <div class="item-list-head id-list2">\
                                      <p>ID</p>\
                                  </div>\
                                  <div class="item-list-head link-list">\
                                      <p>Link reporte</p>\
                                  </div>\
                                  <div class="item-list-head tipo-list">\
                                      <p>Tipo</p>\
                                  </div>\
                                  <div class="item-list-head fecha-list2">\
                                      <p>Fecha</p>\
                                  </div>\
                                  <div class="item-list-head fechaven-list2">\
                                      <p>Fecha Ven.</p>\
                                  </div>\
                                  <div class="item-list-head campo-list"></div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>1</p>\
                                  </div>\
                                  <div class="list-items-item link-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item tipo-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item fecha-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item fechaven-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="des-camp1">\
                                      <label for="des-camp1"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>2</p>\
                                  </div>\
                                  <div class="list-items-item link-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item tipo-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item fecha-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item fechaven-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="des-camp2">\
                                      <label for="des-camp2"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>3</p>\
                                  </div>\
                                  <div class="list-items-item link-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item tipo-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item fecha-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item fechaven-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="des-camp3">\
                                      <label for="des-camp3"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>4</p>\
                                  </div>\
                                  <div class="list-items-item link-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item tipo-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item fecha-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item fechaven-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="des-camp4">\
                                      <label for="des-camp4"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>5</p>\
                                  </div>\
                                  <div class="list-items-item link-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item tipo-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item fecha-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item fechaven-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="des-camp5">\
                                      <label for="des-camp5"></label>\
                                  </div>\
                              </div>\
                          </div>\
                     </div>\
                 </div>';
            document.getElementById("cont2-perfil").innerHTML = newHTML;
            elemn[2].setAttribute('class','admin-repor-activo');
            imgli = elemn[2].getElementsByTagName('img');
            imgli[0].style.display = "block";
     }
     
     if(tab=="estadisticas"){
            var newHTML = 
                '<div id="estadisticas-perfil">\
                     <div>\
                         <div>\
                             <p class="gray-text">Exportar</p>\
                              <select class="droplist-campo">\
                                     <option value="" disabled selected>Seleccione un campo</option>\
                                     <option>Opcion 1</option>\
                                     <option>Opción 2</option>\
                                     <option>Opción 3</option>\
                             </select>\
                         </div>\
                         <div id="est-siguiendo">\
                             <p class="red-text">560</p>\
                             <p class="gray-text">Siguiendo</p>\
                         </div>\
                         <div id="est-seguidores">\
                             <p class="red-text">900</p>\
                             <p class="gray-text">Seguidores</p>\
                         </div>\
                     </div>\
                     <div>\
                         <input type="search" class="search" id="buscar-est-perfil">\
                     </div>\
                     <div>\
                         <p class="red-text">Seleccionar todo</p>\
                         <div class="clear"></div>\
                         <div class="list" id="estadisticas-perfil-list">\
                              <div class="list-head">\
                                  <div class="item-list-head id-list2">\
                                      <p>ID</p>\
                                  </div>\
                                  <div class="item-list-head comentario-list">\
                                      <p>Comentario</p>\
                                  </div>\
                                  <div class="item-list-head comentado-list">\
                                      <p>Comentado</p>\
                                  </div>\
                                  <div class="item-list-head twitter-list">\
                                      <p>Twitter</p>\
                                  </div>\
                                  <div class="item-list-head facebook-list">\
                                      <p>Facebook</p>\
                                  </div>\
                                  <div class="item-list-head google-list">\
                                      <p>Google</p>\
                                  </div>\
                                  <div class="item-list-head etiquetas-list2">\
                                      <p>Etiquetas</p>\
                                  </div>\
                                  <div class="item-list-head instagram-list">\
                                      <p>Instagram</p>\
                                  </div>\
                                  <div class="item-list-head campo-list"></div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>1</p>\
                                  </div>\
                                  <div class="list-items-item comentario-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item comentado-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item twitter-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item facebook-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item google-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item etiquetas-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item instagram-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="est-camp1">\
                                      <label for="est-camp1"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>2</p>\
                                  </div>\
                                  <div class="list-items-item comentario-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item comentado-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item twitter-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item facebook-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item google-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item etiquetas-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item instagram-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="est-camp2">\
                                      <label for="est-camp2"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>3</p>\
                                  </div>\
                                  <div class="list-items-item comentario-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item comentado-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item twitter-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item facebook-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item google-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item etiquetas-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item instagram-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="est-camp3">\
                                      <label for="est-camp3"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>4</p>\
                                  </div>\
                                  <div class="list-items-item comentario-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item comentado-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item twitter-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item facebook-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item google-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item etiquetas-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item instagram-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="est-camp4">\
                                      <label for="est-camp4"></label>\
                                  </div>\
                              </div>\
                              <div class="list-items">\
                                  <div class="list-items-item id-list2">\
                                      <p>5</p>\
                                  </div>\
                                  <div class="list-items-item comentario-list">\
                                      <p>XXXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item comentado-list">\
                                      <p>XXXXXXXXXXXX</p>\
                                  </div>\
                                  <div class="list-items-item twitter-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item facebook-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item google-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item etiquetas-list2">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item instagram-list">\
                                      <p>XXX</p>\
                                  </div>\
                                  <div class="list-items-item campo-list">\
                                      <input type="checkbox" class="bloq-list" id="est-camp5">\
                                      <label for="est-camp5"></label>\
                                  </div>\
                              </div>\
                          </div>\
                     </div>\
                 </div>';
            document.getElementById("cont2-perfil").innerHTML = newHTML;
            elemn[3].setAttribute('class','admin-repor-activo');
            imgli = elemn[3].getElementsByTagName('img');
            imgli[0].style.display = "block";
     }
 }