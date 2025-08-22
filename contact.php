<?php
class Captcha{
	public function getCaptcha($token){
		define("RECAPTCHA_V3_SECRET_KEY", '6LcJKskZAAAAAJk7fpUd1cr_LI7X9MirBdqh2HWj');
		
		// $action = $_POST['action'];
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => RECAPTCHA_V3_SECRET_KEY, 'response' => $token)));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$response = curl_exec($ch);
		curl_close($ch);
		$arrResponse = json_decode($response, true);
		return $arrResponse;
	}
}
$ObjCaptcha = new Captcha();
$retorno = $ObjCaptcha->getCaptcha($_POST['g-recaptcha-response']);
// $retorno = json_decode('{"success":false,"error-codes":["timeout-or-duplicate"]}',true);
try
{
	header('Content-Type: application/json');
	$telefono = '';
	$correo = '';
	if(isset($_POST['your_email']))
	{
		$correo = $_POST['your_email'];
	}
	if(isset($_POST['your_phone']));
	{
		$telefono = $_POST['your_phone'];
	}
	if($retorno["success"] == "1" && $retorno["score"] >= 0.3){   
		if((isset($_POST['your_name'])&&$_POST['your_name']!="")&&(isset($_POST['your_cell_phone'])&&$_POST['your_cell_phone']!="")){ 
			$to = 'vgarciar@techreo.mx';
			if($_POST['productointeresado']=="InversionPatrimonial") {
				$to .= 'vgarciar@techreo.mx';
			}			  
			$subject = 'Formulario sitio web';
			$message = '
			<html>
			<head>
			<title>Formulario sitio web</title>
			</head>
			<body>
			<p><b>Nombre:</b> '.$_POST['your_name'].'</p>
			<p><b>Email:</b> '.$correo.'</p>
			<p><b>Teléfono:</b> '.$telefono.'</p>
			<p><b>Celular:</b> '.$_POST['your_cell_phone'].'</p>
			<p><b>¿Cómo te enteraste de CAME?:</b> '.$_POST['como_te_enteraste'].' </p>
			<p><b>¿En qué producto estás interesado?:</b> '.$_POST['productointeresado'].'</p>         
			</body>
			</html>';
			$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
			$headers .= 'To: <vgarciar@techreo.mx>' . "\r\n";
			$headers .= "From: Came <contacto@came.org.mx >\r\n"; 
			$enviocorrecto = mail($to, $subject, $message, $headers);
				// $enviocorrecto = true;
			if ($enviocorrecto)
			{
				echo json_encode(array("success" => "0","retorno" => $retorno));
			}else
			{
				echo json_encode(array("success" => "1","retorno" => $retorno));			
			}
		} else 
		{
			echo json_encode(array("success" => "2","retorno" => $retorno));
		}
	}else
	{
		$arrErrores = $retorno['error-codes'][0];			
		$timeOutOrDuplicate = 'timeout-or-duplicate';
		if(strcmp($arrErrores,$timeOutOrDuplicate)===0)
		{
			echo json_encode(array("success" => "4","retorno" => $retorno));
		}
		else
		{
			echo json_encode(array("success" => "3","retorno" => $retorno));
		}
	}
}catch(Exception $e)
{
	die(json_encode(array('error' => 'Mail '.$e->getMessage())));
}
?>
