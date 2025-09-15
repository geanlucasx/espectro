<?php
include_once 'conectar.php';

if(isset($_POST["nome"])&&($_POST["nome"]!="")){ 
$nome=$_POST['nome'];
$idade=$_POST['idade'];
$email=$_POST['email']
$estado=$_POST['estado']
$SQL="INSERT INTO info(nome, idade, email, estado) VALUES('$nome', '$idade', '$email', '$estado')";
$query = mysqli_query($conn, $SQL);

if ($query) {
    echo 'Dados inseridos com sucesso!';
} else {
    echo 'Erro ao inserir dados: ' . mysqli_error($conn);
}
}
else{
echo 'dados não foram recebidos.';
}

?>
