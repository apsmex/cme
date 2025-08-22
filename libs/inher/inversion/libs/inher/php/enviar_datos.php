<?session_start();
if($_POST['nombre'] && $_POST['email'] && $_POST['telefono'] && $_POST['ciudad'] && $_POST['seentero']){
    //se reciben los datos en un arreglo
    if($_SESSION["code"]==$_POST["captcha"]){
      //sanitizar los datos (eliminar cosas que no deberian ir)
      $_POST['nombre'] = sanitizarDato($_POST['nombre'], 'string');
      $_POST['ciudad'] = sanitizarDato($_POST['ciudad'], 'string');
      $_POST['telefono'] = sanitizarDato($_POST['telefono'], 'string');
      $_POST['email'] = sanitizarDato($_POST['email'], 'email');
      //si se capturaron los comentarios entonces sanitizarlos tambien
      if(isset($_POST['seentero'])){
          $_POST['seentero'] = sanitizarDato($_POST['seentero'], 'string');
      }
      else{
         $_POST['seentero'] = '--';
      }
      //checar si los datos son validos
      if($_POST['nombre'] != false and $_POST['ciudad'] != false and $_POST['telefono']  != false and $_POST['email']){
          $body = "<table width='500' border='0' align='center' cellpadding='0' cellspacing='3'>
          <tr>
            <td bgcolor='#CCCCCC'>&nbsp;</td>
          </tr>
          <tr>
            <td align='center' style='font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#666666;'><strong>Mensaje desde Sitio Web</strong><br /><hr width='100%' size='1' /></td>
          </tr>
          <tr>
            <td align='left'>".utf8_decode(ucwords($_POST['nombre']))." ha enviado un comentario.</td>
          </tr>
          <tr>
              <td> <table style='background:#'>
                    <tr><td>Nombre: </td><td>".utf8_decode(ucwords($_POST['nombre']))."</td></tr>
                    <tr><td>ciudad: </td><td>".utf8_decode(ucwords($_POST['ciudad']))."</td></tr>
                    <tr><td>Teléfono: </td><td>".utf8_decode(ucwords($_POST['telefono']))."</td></tr>
                    <tr><td>E-mail: </td><td>".$_POST['email']."</td></tr>
        			      <tr><td>Como se entero: </td><td>".utf8_decode(ucwords($_POST['seentero']))."</td></tr>
                   </table>
               </td>
          </tr>
          <tr>
            <td bgcolor='#CCCCCC'>&nbsp;</td>
          </tr>
        </table>";
          $asunto = 'Mensaje de Sitio Web Inversion patrimonial';
          $cabeceras = "MIME-Version: 1.0\r\n";
          $cabeceras.= "Content-type: text/html; charset=iso-8859-1\r\n";
          $cabeceras.= "From: Inversion Patrimonial <josue.designare@gmail.com>\r\n";
          if(mail('josue.designare@gmail.com', $asunto, $body, $cabeceras) and mail('josue.designare@gmail.com', $asunto, $body, $cabeceras)){
            echo "<div style='text-align:center;'>
                    <br /><br />
                    <h2>Se ha enviado el contacto correctamente</h2>
                    <br /><br />
                    <h1>¡Gracias!</h1>
                  </div>";
            // header("Location: ../contacto-tank.html#tankiu");
          }
          else{
        	echo "ERROR: No se pudo enviar el contacto correctamente.";
          }
      }//fin de si los datos son validos
      else{
        echo "ERROR: Los datos no son válidos.";
      }
    }//fin de si el codigo captcha es correcto
  else{
   echo "ERROR: El código no coincide.";
  }
}
else{
  echo "ERROR: No se recibieron los datos.";
}

/****** FUNCION PARA SANITIZAR LOS DATOS **********/
 /** funcion para limpiar dato **/
  function sanitizarDato($dato, $tipo_dato){
    $dato = filter_var($dato, FILTER_SANITIZE_STRING);

    if($tipo_dato == 'string'){
     return $dato;
    }

    else if($tipo_dato == 'float'){
      $dato = filter_var($dato, FILTER_SANITIZE_NUMBER_FLOAT);
       if(filter_var($dato, FILTER_VALIDATE_FLOAT)){
        return $dato;
       }
       else{
        return false;
       }
    }
    else if($tipo_dato == 'int'){
      $dato = filter_var($dato, FILTER_SANITIZE_NUMBER_INT);
      if(filter_var($dato, FILTER_VALIDATE_INT)){
        return $dato;
       }
       else{
        return false;
       }
    }
    else if($tipo_dato == 'email'){
      $dato = filter_var($dato, FILTER_SANITIZE_EMAIL);
      if(filter_var($dato, FILTER_VALIDATE_EMAIL)){
        return $dato;
       }
       else{
        return false;
       }
    }

    else{
      return false;
    }
 }




?>
