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
// forme couleur
$choixformecouleur = $donnees['choixformecouleur'];
if ($choixformecouleur == 1) {
	$pageFormeCouleurI = file_get_contents('formeCouleur.html');
}
else if ($choixformecouleur == 2) {
	$pageFormeCouleurI = file_get_contents('formeCouleur1.html');	
}
$pageFormeCouleur = preg_replace('#<(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)[^>]*?>.*?<\/(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)>#', '', $pageFormeCouleurI);
setcookie("formeCouleur", $pageFormeCouleur); 
// forme noir 
$choixformenoir = $donnees['choixformenoir'];
if ($choixformenoir == 1) {
	$pageFormeNoirI = file_get_contents('formeNoir.html');
}
else if ($choixformenoir == 2) {
	$pageFormeNoirI = file_get_contents('formeNoir1.html');	
}
$pageFormeNoir = preg_replace('#<(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)[^>]*?>.*?<\/(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)>#', '', $pageFormeNoirI);
setcookie("formeNoir", $pageFormeNoir);
// forme bonus
$choixformebonus = $donnees['choixformebonus'];
if ($choixformebonus == 1) {
	$pageFormeBonusI = file_get_contents('formeBonus.html');
}
else if ($choixformebonus == 2) {
	$pageFormeBonusI = file_get_contents('formeBonus1.html');	
}
$pageFormeBonus = preg_replace('#<(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)[^>]*?>.*?<\/(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)>#', '', $pageFormeBonusI);
setcookie("formeBonus", $pageFormeBonus);
include "headerfooter/footer.php"; 
?>