<?php include "headerfooter/header.php";
require 'dbconnect.php';
if (isset($_POST['niveauxnoob'])&&$_POST['niveauxnoob']==true) {
	$scriptjs = "niveaux1()";
}
elseif (isset($_POST['niveauxhard'])&&$_POST['niveauxhard']==true) {
	$scriptjs = "niveaux2()";
}
elseif (isset($_POST['niveauxultra'])&&$_POST['niveauxultra']==true) {
	$scriptjs = "niveaux3()";
}
elseif (isset($_POST['niveauxtous'])&&$_POST['niveauxtous']==true) {
	$scriptjs = "toutLesNiveaux()";
} ?>

<form action="traitementscore.php" method="POST" class="form">
	<input type="text" name="score" id="inputscore" value="<?php $reponse = $dbh->query('SELECT * FROM users Flavian'); $donnees = $reponse->fetch(); echo $donnees['score'] ?>">
	<input type="text" name="point" id="inputpoint" value="<?php $reponse = $dbh->query('SELECT * FROM users Flavian'); $donnees = $reponse->fetch(); echo $donnees['point'] ?>">
	<input type="text" name="choixformecouleur" id="inputchoixformecouleur" value="<?php $reponse = $dbh->query('SELECT * FROM users Flavian'); $donnees = $reponse->fetch(); echo $donnees['choixformecouleur'] ?>">
	<input type="text" name="choixformenoir" id="inputchoixformenoir" value="<?php $reponse = $dbh->query('SELECT * FROM users Flavian'); $donnees = $reponse->fetch(); echo $donnees['choixformenoir'] ?>">
	<input type="text" name="choixformebonus" id="inputchoixformebonus" value="<?php $reponse = $dbh->query('SELECT * FROM users Flavian'); $donnees = $reponse->fetch(); echo $donnees['choixformebonus'] ?>">
</form>

<?php include "headerfooter/footer.php"; 
?>