<?php include "headerfooter/header.php";
require 'dbconnect.php';
$point = $_POST['point'];
$choixformecouleur = $_POST['choixformecouleur'];
$formecouleur = $_POST['formecouleur'];
try {
		$data = null;
		$sql = 'UPDATE users SET point="'.$point.'",formecouleur="'.$formecouleur.'", choixformecouleur="'.$choixformecouleur.'" WHERE login="Flavian"';
		$stmt = $dbh->prepare($sql);
		$stmt-> execute($data);
		header("Location: menuchangerformes.php");
} catch (PODExecption $e) {
		print "Error!: ". $e->getMessage() . ">br/>";
		die();
	} 
include "headerfooter/footer.php"; ?>