<?php include "headerfooter/header.php";
require 'dbconnect.php';
$forme = $_COOKIE['forme'];
if ($forme == "couleur") {
	$choixforme = $_COOKIE['choixformecouleur'];
	$formeS = $_COOKIE['formecouleur'];
	$choixFormeI = "choixformecouleur";
	$formeI = "formecouleur";
}
elseif ($forme == "noir") {
	$choixforme = $_COOKIE['choixformenoir'];
	$formeS = $_COOKIE['formenoir'];
	$choixFormeI = "choixformenoir";
	$formeI = "formenoir";
}
elseif ($forme == "bonus") {
	$choixforme = $_COOKIE['choixformebonus'];
	$formeS = $_COOKIE['formebonus'];
	$choixFormeI = "choixformebonus";
	$formeI = "formebonus";	
}
$reponse = $dbh->query('SELECT * FROM users WHERE login="'.$_SESSION['pseudo'].'"'); $donnees = $reponse->fetch();
if (isset($_COOKIE['achat'])&&$_COOKIE['achat']=="true") {
	$point = $_COOKIE['point'];
	$ancienPoint = $donnees['point'];
	$nouveauPoint = $ancienPoint - $point;
}
else {
	$nouveauPoint = $donnees['point'];
}
try {
		$data = null;
		$sql = 'UPDATE users SET point="'.$nouveauPoint.'",'.$formeI.'="'.$formeS.'",'.$choixFormeI.'="'.$choixforme.'" WHERE login="'.$_SESSION['pseudo'].'"';
		$stmt = $dbh->prepare($sql);
		$stmt-> execute($data);
		header("Location: menuchangerformes.php");
} catch (PODExecption $e) {
		print "Error!: ". $e->getMessage() . ">br/>";
		die();
	} 
include "headerfooter/footer.php"; ?>