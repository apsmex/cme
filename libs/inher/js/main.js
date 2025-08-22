$('#carouselExample').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;
      
      if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
		            // append slides to end
		            if (e.direction=="left") {
                              $('.carousel-item').eq(i).appendTo('.carousel-inner');
                        }
                        else {
                              $('.carousel-item').eq(0).appendTo('.carousel-inner');
                        }
                  }
            }
      });

// *********************** Search ***************************

// var sp = document.querySelector('.search-open');
//             var searchbar = document.querySelector('.search-inline');
//             var shclose = document.querySelector('.search-close');
//             function changeClass() {
//                 searchbar.classList.add('search-visible');
//             }
//             function closesearch() {
//                 searchbar.classList.remove('search-visible');
//             }
//             sp.addEventListener('click', changeClass);
//             shclose.addEventListener('click', closesearch);

// CAME DIGITAL

function mostrarDigital() {
      div = document.getElementById('cNuevos');
      div.style.display = '';
      div = document.getElementById('btn-D');
      div.style.display = '';
      div = document.getElementById('btn-DN');
      div.style.display = 'none';
      div = document.getElementById('cRenovados');
      div.style.display = 'none';
      div = document.getElementById('btn-R');
      div.style.display = 'none';
      div = document.getElementById('btn-RN');
      div.style.display = '';

}

function mostrarDigitalocultar() {
      div = document.getElementById('cNuevos');
      div.style.display = 'none';
      div = document.getElementById('btn-D');
      div.style.display = 'none';
      div = document.getElementById('btn-DN');
      div.style.display = '';
      div = document.getElementById('cRenovados');
      div.style.display = 'none';
      div = document.getElementById('btn-R');
      div.style.display = 'none';
      div = document.getElementById('btn-RN');
      div.style.display = '';

}

function mostrarRenovados() {
      div = document.getElementById('cNuevos');
      div.style.display = 'none';
      div = document.getElementById('btn-R');
      div.style.display = '';
      div = document.getElementById('btn-RN');
      div.style.display = 'none';
      div = document.getElementById('cRenovados');
      div.style.display = '';
      div = document.getElementById('btn-D');
      div.style.display = 'none';
      div = document.getElementById('btn-DN');
      div.style.display = '';

}

function mostrarRenovadolocultar() {
      div = document.getElementById('cNuevos');
      div.style.display = 'none';
      div = document.getElementById('btn-R');
      div.style.display = 'none';
      div = document.getElementById('btn-RN');
      div.style.display = '';
      div = document.getElementById('cRenovados');
      div.style.display = 'none';

}

function mostrarRenovados_dos() {
      div = document.getElementById('cNuevos');
      div.style.display = 'none';
      div = document.getElementById('btn-RR');
      div.style.display = '';
      div = document.getElementById('btn-RRN');
      div.style.display = 'none';
      div = document.getElementById('cRenovados');
      div.style.display = '';
      div = document.getElementById('btn-D');
      div.style.display = 'none';
      div = document.getElementById('btn-DN');
      div.style.display = '';

}

function mostrarRenovadolocultar_dos() {
      div = document.getElementById('cNuevos');
      div.style.display = 'none';
      div = document.getElementById('btn-RR');
      div.style.display = 'none';
      div = document.getElementById('btn-RRN');
      div.style.display = '';
      div = document.getElementById('cRenovados');
      div.style.display = 'none';

}

// LOADERS

//Variables globales;
var telefonoIp = null;
var montoIp = 0;
var formulario = document.querySelector('#formulario');

function validar() {

    // let telefono;
    // telefono = document.getElementById('phone').value;
    
    let monto;
    monto = document.getElementById('00N5e000000pPZW').value;
    if (monto < 10000) {
        //alert("El monto debe ser desde $50,000");
        document.getElementById("error-monto").innerHTML = "El monto debe ser a partir de $10,000";
        document.getElementById("error-monto").style.display = '';
        return false;
    }

    // if (telefono.length < 10) {
    //             alert("Por favor, ingrese un teléfono de contacto a 10 dígitos.");
    //             document.getElementById("error-tel").innerHTML = "Ingrese un teléfono a 10 dígitos.";
    //             document.getElementById('botonEnviar').disabled = false;
    //             return false;
    //         }

            
        }