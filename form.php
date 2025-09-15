<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Cadastro de Alunos</title>
<style>
fieldset{
width: 300px;
margin: 15%;
}
</style>
</head>
<body>
<form method="Post" action="recebe.php">
<fieldset>
	<legend>
		Cadastro de usuário
	</legend>
	Nome:
	<input type="text" name="nome"><br>
	Idade:
	<input type="number" name="idade"><br>
	Email:
	<input type="text" name="email"><br>
	Estado:
	<input type="text" name="estado"><br>
	<input type="submit" value="Cadastrar">
</fieldset>
</form>
</body>
</html>
