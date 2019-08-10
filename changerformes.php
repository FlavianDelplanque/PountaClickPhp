<?php include "headerfooter/header.php"; 
require 'dbconnect.php';
$reponse = $dbh->query('SELECT * FROM users WHERE login="'.$_SESSION['pseudo'].'"'); $donnees = $reponse->fetch();
if (isset($_POST['formescouleur'])&&$_POST['formescouleur']==true) {
	$titre = "couleur";
	$divFormes1 = "formesCouleur1";
	$divFormes2 = "formesCouleur2";
	setcookie("forme","couleur");
	$formecouleur = $donnees['formecouleur'];
	setcookie("formecouleur",$formecouleur); 
	$choixformecouleur = $donnees['choixformecouleur'];
	setcookie("choixformecouleur",$choixformecouleur); 
}
elseif (isset($_POST['formesnoir'])&&$_POST['formesnoir']==true) {
	$titre = "noir";
	$divFormes1 = "formesNoir";
	$divFormes2 = "visageTM";
	$divFormesS2 = "<div class='teteTM'><div class='yeux1TM'></div><div class='yeux2TM'></div><div class='nez'></div><div class='barre1'></div><div class='barre2'></div><div class='barre3'></div><div class='barre4'></div><div class='rond1'></div><div class='rond2'></div><div class='rond3'></div><div class='rond4'></div></div>";
	setcookie("forme","noir");
	$formenoir = $donnees['formenoir'];
	setcookie("formenoir",$formenoir); 
	$choixformenoir = $donnees['choixformenoir'];
	setcookie("choixformenoir",$choixformenoir); 
}
elseif (isset($_POST['formesbonus'])&&$_POST['formesbonus']==true) {
	$titre = "bonus";
	$divFormes1 = "cheveuxCF";
	$divFormesS1 = "<div class='teteCF'><div class='yeux1CF'></div><div class='yeux2CF'></div><div class='boucheCF'></div></div>";
	$divFormes2 = "cheveuxF";
	$divFormesS2 = "<div class='teteF'><div class='yeux1F'></div><div class='yeux2F'></div><div class='boucheF'></div></div>";
	setcookie("forme","bonus");
	$formebonus = $donnees['formebonus'];
	setcookie("formebonus",$formebonus); 
	$choixformebonus = $donnees['choixformebonus'];
	setcookie("choixformebonus",$choixformebonus); 
}
$scriptjs = "ChangementFormes()";
$point = $donnees['point'];
setcookie("point",$point); 
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
	<a class="boutonMenuformes" href="traitementchoixformes.php"><button>Retour</button></a>
	<label id="nombreDePoint"><?php $reponse = $dbh->query('SELECT * FROM users WHERE login="'.$_SESSION['pseudo'].'"'); $donnees = $reponse->fetch(); echo $donnees['point']?> point</label>
</div>
<?php include "headerfooter/footer.php"; ?>