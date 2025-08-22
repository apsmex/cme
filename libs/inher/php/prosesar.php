<?php 

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require '../PHPMailer/src/Exception.php';
  require '../PHPMailer/src/PHPMailer.php';
  require '../PHPMailer/src/SMTP.php';


$body = '';

  $recaptcha = $_POST['g-recaptcha-response'];

  

  if ($recaptcha != '') {
    $secret = "6LdRoroaAAAAAK5I_KeI_UhHkhD7THKyiM1X4-l8";// clave del recapcha
    $ip = $_SERVER['REMOTE_ADDR'];
    $var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remote=$ip");
    $array = json_decode($var, true);
    if ($array['success']) {
      //sanitizar los datos (eliminar cosas que no deberian ir)
      $_POST['nombre'] = sanitizarDato($_POST['nombre'], 'string');
      $_POST['telefono'] = sanitizarDato($_POST['telefono'], 'string');
      $_POST['ciudad'] = sanitizarDato($_POST['ciudad'], 'string');
      $_POST['email'] = sanitizarDato($_POST['email'], 'email');
      $_POST['seentero'] = sanitizarDato($_POST['seentero'], 'string');
      //si se capturaron los comentarios entonces sanitizarlos tambien
      // if(isset($_POST['comentarios'])){
      //     $_POST['comentarios'] = sanitizarDato($_POST['comentarios'], 'string');
      // }
      // else{
      //    $_POST['comentarios'] = '--';
      // }
      //checar si los datos son validos
      if($_POST['nombre'] != false and $_POST['telefono']  != false and $_POST['email'] != false and $_POST['ciudad'] != false and $_POST['seentero']){
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
              <td> <table>
                    <tr><td>Nombre: </td><td>".utf8_decode(ucwords($_POST['nombre']))."</td></tr>
                    <tr><td>E-mail: </td><td>".$_POST['email']."</td></tr>
                    <tr><td>Telefono: </td><td>".utf8_decode(ucwords($_POST['telefono']))."</td></tr>
                    <tr><td>Ciudad: </td><td>".utf8_decode(ucwords($_POST['ciudad']))."</td></tr>
                    <tr><td>Cómo se entero: </td><td>".utf8_decode(ucwords($_POST['seentero']))."</td></tr>
                   </table>
               </td>
          </tr>
            <td bgcolor='#CCCCCC'>&nbsp;</td>
          </tr>
        </table>";
         
  $mail->isSMTP(); 
    $mail->SMTPDebug = 0;
    $mail->Host = 'smtp.gmail.com';                        // Especificamos el host del servidor SMTP
    $mail->SMTPAuth = true;
    $mail->SMTPAutoTLS = false;                            // Activamos la autenticacion
    $mail->Username = 'jmeza@todosi.com';       // Correo SMTP
    $mail->Password = 'josuedisenoweb';                // Contraseña SMTP
    $mail->SMTPSecure = 'tls';                  // Habilitar encriptacion, `ssl` es aceptada
    $mail->Port = 587;   
    $mail->isHTML(true);                                       // Seleccionamos el puerto del SMTP;
    $mail->From = ('jmeza@todosi.com');
    $mail->addAddress = ('jmeza@todosi.com');
    $mail->addAddress('jmeza@todosi.com');
// $mail->addAddress($correo);
$subject = 'Mensaje de Sitio Web Servicio Inversión Patrimonial';

// $mail->Subject = $tipo  ;
$mail->MsgHTML($body);
$mail->IsHTML(true);
$mail->AltBody = 'HTML messaging not supported';
if(!$mail->send()){
  echo "<div style='text-align:center;'>
  <br /><br />
  <h2>Has completado exitosamente tu solicitud.</h2>
  <br />
  <p style='text-align:center;'>Muy pronto nos pondremos en contacto contigo.</p>
  <br /><br />
  <h1>¡Gracias por tu preferencia!</h1>
</div>";
echo "<script>alert('Correo enviado')</script>" ;  
}

          
          else{
          echo "NO se pudo enviar el formulario";
          }
      }//fin de si los datos son validos
      else{
        echo "ERROR: Los datos no son válidos.";
      }
    }else{
      echo "Soy un Robot";
    }
  }else{
    echo "Valida que no eres un Robot";
  }

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