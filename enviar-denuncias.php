<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/inher/PHPMailer/src/Exception.php';
require 'libs/inher/PHPMailer/src/PHPMailer.php';
require 'libs/inher/PHPMailer/src/SMTP.php';

$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$fechaI = date("d-m-Y");
$mes = date("m");
$hoyY = date("Y");
$hoyD = date("d");

$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->SMTPDebug = 0;
    $mail->Host = 'smtp.gmail.com'; // Especificamos el host del servidor SMTP
    $mail->SMTPAuth = true;
    $mail->SMTPAutoTLS = false; // Activamos la autenticacion
    $mail->Username = 'notificiacionespld@came.org.mx'; // Correo SMTP
    $mail->Password = 'hdrxloqjgzdrxhaf'; // Contraseña SMTP (App Google)
    $mail->SMTPSecure = 'tls'; // Habilitar encriptacion, `ssl` es aceptada
    $mail->Port = 587;
    $mail->isHTML(true); // Seleccionamos el puerto del SMTP;
    $mail->setFrom('notificiacionespld@came.org.mx');
    $mail->addAddress('notificiacionespld@came.org.mx', 'Denuncias PLD');

    $body =  "
    <table width='500' border='0' align='center' cellpadding='0' cellspacing='3'>
    <tr>
    <td bgcolor='#F32735'>&nbsp;</td>
    </tr>
    <tr>
    <td align='center' style='font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#666666;'><strong>Mensaje enviado desde el sitio web de CAME</strong><br /><hr width='100%' size='1' /></td>
    </tr>
    <tr>
    <td>
    <table>
    <tr><td>Asunto: </td><td>".$_POST['asunto']."</td></tr>
    <tr><td>Mensaje: </td><td>".$_POST['mensaje']."</td></tr>
    </table>
    </td>
    </tr>
    <td bgcolor='#F32735'>&nbsp;</td>
    </tr>
    </table>
    ";

    $mail->Subject = "Denuncias PLD";
    $mail->MsgHTML($body);
    $mail->IsHTML(true);
    $mail->AltBody = 'No se admiten mensajes HTML';
    $mail->CharSet = 'UTF-8';

    if(!$mail->send()){
      echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
     echo '<script>window.location.href="denuncias-pld.html?mensaje=enviado"</script>';
 }

 ?>