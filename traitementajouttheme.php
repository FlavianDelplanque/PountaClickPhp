<?php include "headerfooter/header.php"; 
$fichierTemp = $_FILES["monfichier"]["tmp_name"];

/*$zip = new ZipArchive;*/
$zipVerif = zip_open($fichierTemp);
if ($zipVerif) {
    $verifZip = true;
    while ($zip_entry = zip_read($zipVerif)) {
        $fichier = zip_entry_name($zip_entry);
        $extensionFichier  = pathinfo($fichier, PATHINFO_EXTENSION);
        $extensionsAutorisees = array("html","css");
        $verifDossier = explode("/", $fichier);
        if (empty($verifDossier[1])) {
            echo "dossier source</br>";
        }
        else if (!(in_array($extensionFichier , $extensionsAutorisees))) {
            echo "Le fichier n'a pas l'extension attendue OU dossier supplémentaire detecter". "</br>";
            $verifZip = false;
            break;
        }
        else if (zip_entry_open($zipVerif, $zip_entry, "r")){
            $buf = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));
            if (preg_match('#<(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)[^>]*?>.*?<\/(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)>#', $buf)) {
                echo "balise script detecter</br>";
                $verifZip = false;
                break;
            }
            else if (preg_match('#<(b|B)+(o|O)+(d|D)+(y|Y)[^>]*?>.*?<\/(b|B)+(o|O)+(d|D)+(y|Y)>#', $buf)) {
                echo "balise body detecter</br>";
                $verifZip = false;
                break;
            }
            else if (preg_match('#<(h|H)+(e|E)+(a|A)+(d|D)[^>]*?>.*?<\/(h|H)+(e|E)+(a|A)+(d|D)>#', $buf)) {
                echo "balise head detecter</br>";
                $verifZip = false;
                break;
            }
            else if (preg_match('#<(l|L)+(i|I)+(n|N)+(k|K)[^>]*?>.*?<\/(l|L)+(i|I)+(n|N)+(k|K)>#', $buf)) {
                echo "balise link detecter</br>";
                $verifZip = false;
                break;
            }
            else if (preg_match('#<(m|M)+(e|E)+(t|T)+(a|A)#', $buf)) {
                echo "balise meta detecter</br>";
                $verifZip = false;
                break;
            }
            else {
                echo "code correct</br>";
            }
            zip_entry_close($zip_entry);

        }



    }
    var_dump($verifZip);
    $zip = new ZipArchive;
    if ($verifZip == true && $zip->open($fichierTemp) === TRUE) {
        var_dump($fichierTemp);
        $zip->open($fichierTemp);
        $zip->extractTo('theme/');
        $zip->close();
        echo 'fichier upload';
    }
    else {
        echo "dossier trop volumineux OU fichier incorrect OU code malveillant detecter";
    }
    zip_close($zipVerif);

}

include "headerfooter/footer.php"; ?>

