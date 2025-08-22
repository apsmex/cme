<?session_start();
if($_POST['nombre'] && $_POST['email'] && $_POST['telefono'] && $_POST['asunto'] ){
    //se reciben los datos en un arreglo
    // if($_SESSION["code"]==$_POST["captcha"]){
      //sanitizar los datos (eliminar cosas que no deberian ir)
      $_POST['nombre'] = sanitizarDato($_POST['nombre'], 'string');
      $_POST['asunto'] = sanitizarDato($_POST['asunto'], 'string');
      $_POST['telefono'] = sanitizarDato($_POST['telefono'], 'string');
      $_POST['email'] = sanitizarDato($_POST['email'], 'email');
      //si se capturaron los comentarios entonces sanitizarlos tambien
      if(isset($_POST['comentarios'])){
          $_POST['comentarios'] = sanitizarDato($_POST['comentarios'], 'string');
      }
      else{
         $_POST['comentarios'] = '--';
      }
      //checar si los datos son validos
      if($_POST['nombre'] != false and $_POST['telefono'] != false and $_POST['asunto'] != false and $_POST['email']){
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
                    <tr><td>Asunto: </td><td>".utf8_decode(ucwords($_POST['asunto']))."</td></tr>
                    <tr><td>Teléfono: </td><td>".utf8_decode(ucwords($_POST['telefono']))."</td></tr>
                    <tr><td>E-mail: </td><td>".$_POST['email']."</td></tr>
                   </table>
               </td>
          </tr>
          <tr>
            <td bgcolor='#CCCCCC'>&nbsp;</td>
          </tr>
        </table>";
          $asunto = 'Mensaje de Sitio Web TCRHolding';
          $cabeceras = "MIME-Version: 1.0\r\n";
          $cabeceras.= "Content-type: text/html; charset=iso-8859-1\r\n";
          $cabeceras.= "From: TCRHolding <jmeza@todosi.com>\r\n";
          if(mail('jmeza@todosi.com', $asunto, $body, $cabeceras) and mail('clientes@indivia.com.mx', $asunto, $body, $cabeceras)and mail('jmeza@todosi.com', $asunto, $body, $cabeceras)){
            echo "<div style='text-align:center;'>
                    <br /><br />
                    <h2>Se ha enviado el contacto correctamente</h2>
                    <br />
                    <p>Me pondre en contacto contigo</p>
                    <br /><br />
                    <h1>¡Gracias!</h1>
                  </div>";
            // header("Location: ../contacto-tank.html");
          }
          else{
        	echo "ERROR: No se pudo enviar el contacto correctamente.";
          }
      }//fin de si los datos son validos
      else{
        echo "ERROR: Los datos no son válidos.";
      }
    }//fin de si el codigo captcha es correcto
  // else{
  //  echo "ERROR: El código no coincide.";
//   // }
// }
// else{
//   echo "ERROR: No se recibieron los datos.";
// }

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
