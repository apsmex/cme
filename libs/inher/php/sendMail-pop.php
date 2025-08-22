<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$ciudad = $_POST['ciudad'];
$seentero = $_POST['seentero'];

$fechaI =  date("d-m-Y");
$mes =  date("m");
$hoyY = date("Y");
$hoyD = date("d");

$mail = new PHPMailer ;
 

        
    $mail->isSMTP(); 
    $mail->SMTPDebug = 0;
    $mail->Host = 'smtp.gmail.com';                        // Especificamos el host del servidor SMTP
    $mail->SMTPAuth = true;
    $mail->SMTPAutoTLS = false;                            // Activamos la autenticacion
    $mail->Username = 'inversion.patrimonial@came.org.mx';       // Correo SMTP
    $mail->Password = 'CME1234_';                // Contraseña SMTP
    $mail->SMTPSecure = 'tls';                  // Habilitar encriptacion, `ssl` es aceptada
    $mail->Port = 587;   
    $mail->isHTML(true);                                       // Seleccionamos el puerto del SMTP;
    $mail->From = ('inversion.patrimonial@came.org.mx');
    $mail->addAddress = ('inversion.patrimonial@came.org.mx');
    $mail->addAddress('inversion.patrimonial@came.org.mx');

    $body =  "
            <table width='500' border='0' align='center' cellpadding='0' cellspacing='3'>
          <tr>
            <td bgcolor='#F32735'>&nbsp;</td>
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
            <td bgcolor='#F32735'>&nbsp;</td>
          </tr>
        </table>
                                    ";


                            
    $mail->Subject = "Inversion Patrimonial" ;
    $mail->MsgHTML($body);
    $mail->IsHTML(true);
    $mail->AltBody = 'HTML messaging not supported';

    if(!$mail->send()){
        echo "Mailer Error: " . $mail->ErrorInfo;
    }else{
       echo "<div style='text-align:center;'>
              <br /><br />
              <h2>Has completado exitosamente tu solicitud.</h2>
              <br />
              <p style='text-align:center;'>Muy pronto nos pondremos en contacto contigo.</p>
              <br /><br />
              <h1>¡Gracias por tu preferencia!</h1>
            </div>" ;   
       // echo '<script>window.location.href="https://came.org.mx/inversion-patrimonial.html"</script>';
    }  
             

?>