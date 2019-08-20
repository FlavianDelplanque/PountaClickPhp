<?php include "headerfooter/header.php"; 
$fichierTemp = $_FILES["monfichier"]["tmp_name"];

$zip = new ZipArchive;
if ($zip->open($fichierTemp) === TRUE) {
    $zip->extractTo('theme/');
    $zip->close();
    echo 'ok';
} else {
    echo 'échec';
}

// $extensionsAutorisees = array("html", "css");
// if (!(in_array($extensionFichier, $extensionsAutorisees))) {
//     echo "Le fichier n'a pas l'extension attendue";
// } else {    
    // Copie dans le repertoire du script avec un nom
    // incluant l'heure a la seconde pres 
/*    $repertoireDestination = dirname(__FILE__)."/theme/";
    $nomDestination = $elementsChemin['basename'];

    if (move_uploaded_file($_FILES["monfichier"]["tmp_name"], 
                                     $repertoireDestination.$nomDestination)) {
        echo "Le fichier temporaire ".$_FILES["monfichier"]["tmp_name"].
                " a été déplacé vers ".$repertoireDestination.$nomDestination;
    } else {
        echo "Le fichier n'a pas été uploadé (trop gros ?) ou ".
                "Le déplacement du fichier temporaire a échoué".
                " vérifiez l'existence du répertoire ".$repertoireDestination;
    }*/
// }

include "headerfooter/footer.php"; ?>

