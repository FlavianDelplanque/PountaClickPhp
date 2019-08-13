<?php include "headerfooter/header.php"; 
$resultat = $_COOKIE['resultat']; 
?>
	<div class="global">
		<?php if ($resultat == "win") {
			echo "<h1 id='winFin'>You Win ! Votre temps est de ".$_COOKIE['time']." seconde</h1>";
		} 
		elseif ($resultat == "loose") {
		 	echo "<h1 id='loose'>You Loose ! votre score est de ".$_COOKIE['scorepartie']."</h1>";
		 } ?>
		<a href="scores.php">
			<button id="boutonScoreEtPartie">Scores et nombre de partie jouer</button>
		</a>
		<a href="menujeux.php">
			<button>Menu jeux</button>
		</a>
	</div>
<?php include "headerfooter/footer.php"; ?>