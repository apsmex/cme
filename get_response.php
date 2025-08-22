<?php
require_once("config.php");
try{
	$correo = ' ';
	$telefono = 0;
	if(isset($_POST['your_email']))
	{
		$correo = $conn->real_escape_string($_POST['your_email']);
	}
	if(isset($_POST['your_phone']) && $_POST['your_phone'] != '')
	{
		$telefono = $conn->real_escape_string($_POST['your_phone']);
	}
	if ((isset($_POST['your_name']) && $_POST['your_name'] != '')) {
		$nombre = $conn->real_escape_string($_POST['your_name']);
		$celular = $conn->real_escape_string($_POST['your_cell_phone']);
		$como_te_enteraste = $conn->real_escape_string($_POST['como_te_enteraste']);
		$productointeresado = $conn->real_escape_string($_POST['productointeresado']);
		$fechacreacion = $conn->real_escape_string($_POST['fechacreacion']);
		$sql = "INSERT INTO ldnt_Usuarios (Nombre, Email, Telefono, Celular, ComoTeEnteraste, ProductoInteresado, FechaCreacion) VALUES ('" . $nombre . "','" . $correo . "','" . $telefono . "','" . $celular . "', '" . $como_te_enteraste . "','" . $productointeresado . "','" . $fechacreacion . "')";
		if (!$result = $conn->query($sql)) {
			die('There was an error running the query [' . $conn->error . ']');
		} else {
			echo "Thank you! We will contact you soon";
		}
	} else 
	{
		echo "Please fill Name and Email";
	}
}catch(Exception $e)
{
	die(json_encode(array('error' => 'Mail '.$e->getMessage(),'sql' => $sql)));
}
?>