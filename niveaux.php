<?php include "headerfooter/header.php";
include "headerfooter/footer.php"; 
if (isset($_POST['niveauxnoob'])&&$_POST['niveauxnoob']==true) {
	echo "niv noob";
}
elseif (isset($_POST['niveauxhard'])&&$_POST['niveauxhard']==true) {
	echo "niv hard";
}
elseif (isset($_POST['niveauxultra'])&&$_POST['niveauxultra']==true) {
	echo "niv ultra";
}
elseif (isset($_POST['niveauxtous'])&&$_POST['niveauxtous']==true) {
	echo "tous les lvl";
}
?>