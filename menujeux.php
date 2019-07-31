<?php include "headerfooter/header.php"; ?>
	<div class="global" id="globalDivMenuJeux">
		<label id="labelChoixDuNiveaux">Choix du niveau</label>
		<form action="niveaux.php" method="POST" id="buttonNiveauxNoob">
		<button name="niveauxnoob" value="true">Niveaux noob</button>
		</form>
		<form action="niveaux.php" method="POST" id="buttonNiveauxHardcore">
		<button name="niveauxhard" value="true">Niveaux hardcore</button>
		</form>
		<form action="niveaux.php" method="POST" id="buttonNiveauxUltraviolence">
		<button name="niveauxultra" value="true">Niveaux ultraviolence</button>
		</form>
		<form action="niveaux.php" method="POST" id="buttonToutLesNiveaux">
		<button name="niveauxtous" value="true">Tous les niveaux</button>
		</form>
		<label id="labelOptionsMenuJeux">Options</label>
		<a href="entrerpseudo.php" id="buttonMenuEntrerPseudoMenuJeux"><button class="buttonMenuEntrerPseudo">Changer pseudo</button></a>
		<a href="index.php" id="buttonAccueilMenuJeux"><button class="buttonAccueil">Accueil</button></a>
		<label id="labelOptionsJeuxMenuJeux">Options jeux</label>
		<a href="menuchangerformes.php" id="buttonChoixFormesMenuJeux"><button class="buttonMenuChoixFormes">Changer de formes</button></a>
		<button class="buttonMenuSon" id="buttonMenuSonMenuJeux">Changer de sons</button>
	</div>
<?php include "headerfooter/footer.php"; ?>