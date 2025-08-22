<?php
$host = "192.168.1.10";
$port = 3306; 
$userName = "U_LANDING";
$password = "L@ndi2020";
$dbName = "Ldn_LandingPage";
// Create database connection
$conn = new mysqli($host.':'.$port, $userName, $password, $dbName);
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}