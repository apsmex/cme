<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

$nombre = $_POST['nombre'];
$municipio = $_POST['municipio'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$negooac = $_POST['negooac'];
$ingmes = $_POST['ingmes'];
$montcred = $_POST['montcred'];

$fechaI = date("d-m-Y");
$mes = date("m");
$hoyY = date("Y");
$hoyD = date("d");

$mail = new PHPMailer ;

$mail->isSMTP(); 
$mail->SMTPDebug = 0;
    $mail->Host = 'smtp.gmail.com'; // Especificamos el host del servidor SMTP
    $mail->SMTPAuth = true;
    $mail->SMTPAutoTLS = false; // Activamos la autenticacion
    $mail->Username = 'mesaevaluaciondigital@came.org.mx'; // Correo SMTP
    $mail->Password = 'gbynxvuwgnoxmckg'; // Contraseña SMTP
    $mail->SMTPSecure = 'tls'; // Habilitar encriptacion, `ssl` es aceptada
    $mail->Port = 587;
    $mail->isHTML(true); // Seleccionamos el puerto del SMTP;
    $mail->setFrom('mesaevaluaciondigital@came.org.mx');
    $mail->addAddress('mesaevaluaciondigital@came.org.mx', 'Mesa Evaluación Digital');

    $body =  "
    <table width='500' border='0' align='center' cellpadding='0' cellspacing='3'>
    <tr>
    <td bgcolor='#F32735'>&nbsp;</td>
    </tr>
    <tr>
    <td align='center' style='font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#666666;'><strong>Mensaje enviado desde el Sitio Web de CAME</strong><br /><hr width='100%' size='1' /></td>
    </tr>
    <tr>
    <td align='left'>".utf8_decode(ucwords($_POST['nombre']))." ha enviado un mensaje:</td>
    </tr>
    <tr>
    <td> <table>
    <tr><td>Nombre: </td><td>".utf8_decode(ucwords($_POST['nombre']))."</td></tr>
    <tr><td>Municipio: </td><td>".utf8_decode(ucwords($_POST['municipio']))."</td></tr>
    <tr><td>Teléfono: </td><td>".$_POST['telefono']."</td></tr>
    <tr><td>Correo electrónico: </td><td>".$_POST['email']."</td></tr>
    <tr><td>Negocio o Actividad Comercial: </td><td>".utf8_decode(ucwords($_POST['negooac']))."</td></tr>
    <tr><td>Ingresos mensuales: </td><td>".$_POST['ingmes']."</td></tr>
    <tr><td>Monto del crédito: </td><td>".$_POST['montcred']."</td></tr>
    </table>
    </td>
    </tr>
    <td bgcolor='#F32735'>&nbsp;</td>
    </tr>
    </table>
    ";

    $mail->Subject = "Pal' Negocio";
    $mail->MsgHTML($body);
    $mail->IsHTML(true);
    $mail->AltBody = 'No se admiten mensajes HTML';
    $mail->CharSet = 'UTF-8';

    if(!$mail->send()){
      echo "Mailer Error: " . $mail->ErrorInfo;
  } else {

     // echo "<div style='text-align:center;'>
     // <br /><br />
     // <h2>Has completado exitosamente tu solicitud.</h2>
     // <br />
     // <p style='text-align:center;'>Muy pronto nos pondremos en contacto contigo.</p>
     // <br /><br />
     // <h1>¡Gracias por tu preferencia!</h1>
     // </div>" ;  

   echo '<script>window.location.href="../../../gracias-pal-negocio.html?mensaje=enviado"</script>';
}

?>