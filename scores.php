<?php include "headerfooter/header.php"; 
require 'dbconnect.php'; 
$reponse = $dbh->query('SELECT * FROM users'); ?>
	<div class="global">
		<table>
			<thead>
				<tr>
					<th>Pseudo</th>
					<th>Score total</th>
					<th>Nombre de partie joué</th>
				</tr>
			</thead>
			<tbody>
				<?php while($donnees = $reponse->fetch()){
				echo "<tr><td>".$donnees['login']."</td><td>".$donnees['score']."</td><td>".$donnees['partiejouer']."</td></tr>";
				} ?>
			</tbody>
		</table>
		<a href="index.php"><button class="buttonAccueil">Accueil</button></a>
		<a href="entrerpseudo.php"><button>Menu jeux</button></a>
	</div>
<?php include "headerfooter/footer.php"; ?>


