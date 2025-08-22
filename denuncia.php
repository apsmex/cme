<?php
try{
	header('Content-Type: application/json');
	if((isset($_POST['asunto'])&&$_POST['asunto'])&&(isset($_POST['mensaje'])&&$_POST['mensaje']!=""))
	{
		$to = 'pedro.velasco@came.org.mx';
		$subject = 'Denuncia PLD';
		$message = '
					<html lang="es">
						<head>
							<meta charset="UTF-8">
						</head>
						<body>
							<img src="https://dev.todosi.com:6015/TdsLandingDig/assets/came/logo-came.webp" alt="logo came">
							<p><b>Asunto:</b> '.$_POST['asunto'].'</p>
							<p><b>Mensaje:</b> '.$_POST['mensaje'].'</p>
						</body>
					</html>'; 
		$headers = [
		  'Content-type: text/html; charset=utf-8',
		  'From: Came <contacto@came.org.mx>',
		  'Cc: Vania Salas <vania.salas@came.org.mx>',
		  'To: Pedro Velasco <pedro.velasco@came.org.mx>'];
		$headers = implode("\r\n", $headers);		
		$enviocorrecto = mail($to, $subject, $message, $headers);
		// $enviocorrecto = true;
		if ($enviocorrecto)
		{
			echo json_encode(array("success" => "0"));
		}else
		{
			echo json_encode(array("success" => "1"));			
		}
	}
}catch(Exception $e){
	die(json_encode(array('error' => 'Mail '.$e->getMessage())));
}
?>