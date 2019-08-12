<?php include "headerfooter/header.php";
require 'dbconnect.php';
if (isset($_POST['niveauxnoob'])&&$_POST['niveauxnoob']==true) {
	$scriptjs = "niveaux1()";
	setcookie("numeroniveaux",null);
}
elseif (isset($_POST['niveauxhard'])&&$_POST['niveauxhard']==true) {
	$scriptjs = "niveaux2()";
	setcookie("numeroniveaux",null);
}
elseif (isset($_POST['niveauxultra'])&&$_POST['niveauxultra']==true) {
	$scriptjs = "niveaux3()";
	setcookie("numeroniveaux",null);
}
elseif (isset($_POST['niveauxtous'])&&$_POST['niveauxtous']==true) {
	$scriptjs = "lancementToutLesNiveaux()";
	setcookie("numeroniveaux",0);
} 
elseif ($_COOKIE['numeroniveaux']==1||$_COOKIE['numeroniveaux']==2) {
	$scriptjs = "relanceNiveaux()";
} 
$reponse = $dbh->query('SELECT * FROM users WHERE login="'.$_SESSION['pseudo'].'"'); $donnees = $reponse->fetch();
$choixformecouleur = $donnees['choixformecouleur'];
setcookie("choixformecouleur",$choixformecouleur); 
$choixformenoir = $donnees['choixformenoir'];
setcookie("choixformenoir",$choixformenoir); 
$choixformebonus = $donnees['choixformebonus'];
setcookie("choixformebonus",$choixformebonus); 
include "headerfooter/footer.php"; 
?>