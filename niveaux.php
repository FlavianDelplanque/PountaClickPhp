<?php include "headerfooter/header.php";
if (isset($_POST['niveauxnoob'])&&$_POST['niveauxnoob']==true) {
	echo "niv noob";
	$scriptjs = "niveaux1()";
}
elseif (isset($_POST['niveauxhard'])&&$_POST['niveauxhard']==true) {
	echo "niv hard";
	$scriptjs = "niveaux2()";
}
elseif (isset($_POST['niveauxultra'])&&$_POST['niveauxultra']==true) {
	echo "niv ultra";
	$scriptjs = "niveaux3()";
}
elseif (isset($_POST['niveauxtous'])&&$_POST['niveauxtous']==true) {
	echo "tous les lvl";
	$scriptjs = "toutLesNiveaux()";
} ?>

<form action="traitementscore.php" method="POST" class="form">
	<input type="text" name="score" id="inputscore">
	<input type="text" name="point" id="inputpoint">
</form>

<?php include "headerfooter/footer.php"; 
?>