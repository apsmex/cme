<?php
	require_once("config.php");
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
	try{
		header('Content-Type: application/json');
		if($retorno["success"] == "1" && $retorno["score"] >= 0.3)
		{ 
			if ((isset($_POST['asunto']) && $_POST['asunto'] != '') && (isset($_POST['mensaje']) && $_POST['mensaje'] != '')) {
				$asunto = $conn->real_escape_string($_POST['asunto']);
				$mensaje = $conn->real_escape_string($_POST['mensaje']);
				$fechacreacion = $conn->real_escape_string($_POST['fechacreacion']);
				$sql = "INSERT INTO lndt_Denuncias(Asunto, Mensaje, UsuarioCreacion, FechaCreacion, FechaUltimaMod, UsuarioUltimaMod) VALUES('" . $asunto . "', '" . $mensaje . "', 1, '" . $fechacreacion . "', '" . $fechacreacion . "', 1)";
				if (!$result = $conn->query($sql)) 
				{
					echo json_encode(array("success" => "1","retorno" => $retorno));
					// die('Ocurrió un error insertando en Base de datos [' . $conn->error . ']');
				} else {
					echo json_encode(array("success" => "0","retorno" => $retorno));
				}
			} else 
			{
				echo json_encode(array("success" => "2","retorno" => $retorno));
			}
		}
		else
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

