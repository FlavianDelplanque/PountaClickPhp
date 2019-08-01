<?php session_start();
$pseudo = htmlspecialchars($_POST['pseudo']);
$_SESSION['pseudo'] = $pseudo;


require 'dbconnect.php';

$reponse = $dbh->query('SELECT * FROM users');
while ($donnees = $reponse->fetch())
{
	if ($donnees['login']==$pseudo) {
		$pseudocheck = true;
	}
}
if (empty($pseudocheck)) {
	try {
		$data = [
		"id" => null,
		"login" => $pseudo,
		"password" => "default",
		"score" => 0,
		"partiejouer" => 0,
		"point" => 0
		];
		$sql = "INSERT INTO users (id, login, password, score, partiejouer, point) VALUES (:id, :login, :password, :score, :partiejouer, :point)";
		$stmt = $dbh->prepare($sql);
		$stmt-> execute($data);
		header("Location: menujeux.php");
	} catch (PODExecption $e) {
		print "Error!: ". $e->getMessage() . ">br/>";
		die();
	} 
}
else {
	header("Location: menujeux.php");
}


$reponse->closeCursor(); // Termine le traitement de la requête



?>