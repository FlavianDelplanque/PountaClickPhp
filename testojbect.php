<?php
/*$obj = (object) array('i10' => 'foo', 'lol' => "lool");
var_dump($obj->i10); // affiche 'bool(true)' depuis PHP 7.2.0; 'bool(false)' auparavant
var_dump(key($obj));*/ // affiche 'string(1) "1"' depuis PHP 7.2.0; 'int(1)' auparavant
?>

<?php
/*$obj = (object) array('1' => 'foo', '10' => "lool");
var_dump(isset($obj->{'1'})); // affiche 'bool(true)' depuis PHP 7.2.0; 'bool(false)' auparavant
var_dump(key($obj));*/ // affiche 'string(1) "1"' depuis PHP 7.2.0; 'int(1)' auparavant
?>


<?php require 'dbconnect.php';
require 'Database.php';
require 'Users.php';


// Recupération des infos de thème via l'id récupérer dans la colonne theme de l'users

// $info = $dbh->query('SELECT * FROM users WHERE id="1"');
// $info = $info->fetch();
// $info = $info['theme'];
// $info = explode(",", $info);
// $test = array_search("theme2", $info);
// $lol = $info[$test+1];
// var_dump($info);
// var_dump($test);
// var_dump($lol);



// $info = $dbh->query('SELECT * FROM test WHERE id="'.$lol.'"');
	
// var_dump($info);
// $info = $info->fetch();
// var_dump($info['formecouleur']);





// Choix theme et création des données pour l'users

// Création données theme pour l'users
$add = $dbh->prepare('INSERT INTO test VALUE (null, :theme, :formecouleur, :choixformecouleur, :formenoir, :choixformenoir, :formebonus, :choixformebonus)');
$add->bindValue('theme', "theme1", PDO::PARAM_STR_CHAR);
$add->bindValue('formecouleur', 1, PDO::PARAM_INT);
$add->bindValue('choixformecouleur', 1, PDO::PARAM_INT);
$add->bindValue('formenoir', 1, PDO::PARAM_INT);
$add->bindValue('choixformenoir', 1, PDO::PARAM_INT);
$add->bindValue('formebonus', 1, PDO::PARAM_INT);
$add->bindValue('choixformebonus', 1, PDO::PARAM_INT);
$add->execute();
$number = $dbh->lastInsertId(); 

// Ajout nom thème et id correspond au thème dans la colonne theme de l'users
$users = new Users;
$theme = $users->infoUsers("17");
if (empty($theme['theme'])) {
	$theme = "themelol,".$number;
}
else {
	$theme = $theme['theme'].",themelol,".$number;
}
$sth = $dbh->prepare('UPDATE users SET theme="'.$theme.'" WHERE id="17"');
$sth->execute();



 ?>