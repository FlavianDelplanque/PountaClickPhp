<?php include "headerfooter/header.php"; 
if (isset($_POST['formescouleur'])&&$_POST['formescouleur']==true) {
	$titre = "couleur";
	$divFormes1 = "formesCouleur1";
	$divFormes2 = "formesCouleur2";
}
elseif (isset($_POST['formesnoir'])&&$_POST['formesnoir']==true) {
	$titre = "noir";
	$divFormes1 = "formesNoir";
	$divFormes2 = "visageTM";
	$divFormesS2 = "<div class='teteTM'><div class='yeux1TM'></div><div class='yeux2TM'></div><div class='nez'></div><div class='barre1'></div><div class='barre2'></div><div class='barre3'></div><div class='barre4'></div><div class='rond1'></div><div class='rond2'></div><div class='rond3'></div><div class='rond4'></div></div>";
}
elseif (isset($_POST['formesbonus'])&&$_POST['formesbonus']==true) {
	$titre = "bonus";
	$divFormes1 = "cheveuxCF";
	$divFormesS1 = "<div class='teteCF'><div class='yeux1CF'></div><div class='yeux2CF'></div><div class='boucheCF'></div></div>";
	$divFormes2 = "cheveuxF";
	$divFormesS2 = "<div class='teteF'><div class='yeux1F'></div><div class='yeux2F'></div><div class='boucheF'></div></div>";
}
?>
<div class="global" id="globalDivFormes">
	<label id="labelChoixFormesCouleur">Choix formes <?php echo $titre ?></label>
	<div id="divFormes1">
		<div id="<?php echo $divFormes1 ?>"></div>
		<?php if (isset($divFormesS1)) {echo $divFormesS1;} ?>
		<label id="pointNCouleur1">gratuit</label>
	</div>
	<div id="divFormes2">
		<div id="<?php echo $divFormes2 ?>">
			<?php if (isset($divFormesS2)) {echo $divFormesS2;} ?>
		</div>
		<label id="pointNCouleur2">obtenu</label>
	</div>
	<a href="menuchangerformes.php" class="boutonMenuformes"><button>Retour</button></a>
	<label id="nombreDePoint">point</label>
</div>
<?php include "headerfooter/footer.php"; ?>