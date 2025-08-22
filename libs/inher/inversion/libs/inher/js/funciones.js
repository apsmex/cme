/*$(document).ready(function()
	{
		$('.navbar-nav li a.dropdown-toggle').click(function(e)
		{
			e.preventDefault();
			$(this).parent().toggleClass('open');
		});
		$('[data-toggle="collapse"]').click(function()
		{
			var target = $(this).attr('data-target');
			$(target).toggleClass('in');
		});
	});*/

/********** Es para bloquear el clik derecho de una página ************/
document.oncontextmenu = function(){return false}
document.ondragstart  = function(){return false}
/*********************************************************************/



    /*$(window).scroll(function(){
        if ($(window).scrollTop() >= 1) {
            $('#header').addClass('fijo');
            $('#header').next().css('padding-top','0px');
        }
        else {
           $('#header').removeClass('fijo');
        }
    });
	*/


/***************** menu responsivo ***************************/
    /*jQuery(document).ready(function() {
    
      jQuery(".menu-trigger").click(function() {
        
        jQuery(".nav-menu").slideToggle(400, function() {
          jQuery(this).toggleClass("nav-expanded").css('display', '');
        });
        
      });
      
    });*/
/*************************************************************/	
	

/*************************************************************/
	/*$(document).ready(function() {
 
	  $("#owl-demo").owlCarousel({
	 
		  autoPlay: 3000,
	 
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
	 
	  });
	 
	});*/
/*************************************************************/


     $(function(){
     $('#contact_form').bind('submit', function(e){
        e.preventDefault();
        var formulario = $(this).attr('id');
        mensaje('');
        if(obligatoriosFaltantes(formulario)){
            mensaje('Falta llenar información.');
            return false;
        }
        else{
            if(correoValido($('#txtCorreo').val())){
                var archivo = $('#' + formulario).attr('action');
                var datos = $('#' + formulario).serialize();
                $.post(archivo,datos, function(data){
                  if(data.search('ERROR') == -1){
                    $('#' + formulario).html(data);
                  }
                  else{
                   mensaje(data);
                  }});
            }
            else{
                mensaje('El correo no es válido');
                return false;
            }
        }
     });

    });
	
	

	
	
	
	
	


/****  FUNCIONES GENERALES *****/
    /* place holder*/
    function placeHolder(e){
     if($(e).val() == $(e).attr('placeholder')){
      $(e).val('');
     }
     else if($(e).val() == ''){
      $(e).val($(e).attr('placeholder'));
     }
    }

        function mensaje(mensaje){
            $('#mensaje').text(mensaje);
        }

        /*validar obligatorios*/
        function obligatoriosFaltantes(formulario){
          $('#' + formulario + ' input').removeClass('falta-llenar');
          var faltantes = false;
          $('#' + formulario +' .obligatorio').each(function(e){
           if($(this).val() == '' || $(this).val() == $(this).attr('placeholder')){
             $(this).addClass('falta-llenar');
             faltantes = true;
           }
          });
          return faltantes;
        }

        /*resetear formulario*/
        function resetearFormulario(formulario){
           document.getElementById(formulario).reset();
           $('#' + formulario + ' input:text').removeClass('falta-llenar');
        }

        /*validar correo*/
        function correoValido(correo){
            var expCorreo = /[\w-\.]{2,}@([\w-]{2,})*([\w-]{2,}\.)[\w-]{2,4}/;
            return expCorreo.test(correo);
        }