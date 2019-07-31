<?php include "headerfooter/header.php"; ?>
	<div class="global" id="globalDivMenuFormes">
		<label id="labelFormes">Choix formes</label>
		<form id="boutonMenuFormesCouleur" action="changerformes.php" method="POST">
			<button name="formescouleur" value="true">Formes couleur</button>
		</form>
		<form id="boutonMenuFormesNoir" action="changerformes.php" method="POST">
			<button name="formesnoir" value="true">Formes noir</button>
		</form>
		<form id="boutonMenuFormesBonus" action="changerformes.php" method="POST">
			<button name="formesbonus" value="true">Formes bonus</button>
		</form>
		<label id="LabelOuRetourMenuFormes">OU</label>
		<a href="menujeux.php" id="boutonMenuJeuxMenuFormes"><button class="boutonMenuJeuxCN">Menu jeux</button></a>
	</div>
<?php include "headerfooter/footer.php"; ?>