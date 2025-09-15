<?php
$server = "localhost";
$user = "root";
$password = "";
$dbname = "formulario";

// Cria a conexão
$conn = new mysqli($server, $user, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
