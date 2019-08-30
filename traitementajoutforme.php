<?php 
$html = $_POST['html'];
$css = $_POST['css'];
$microtime = explode(" ", microtime());
$microtime = implode("", $microtime);
$microtime = explode(".", $microtime);
$microtime = implode("", $microtime);
$nomfichierhtml = $microtime.".html";
$nomfichiercss = $microtime.".css";
$verifHtml = true;

if (preg_match('#<(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)[^>]*?>.*?<\/(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)>#', $html)) {
	echo "balise script detecter</br>";
	$verifHtml = false;
}
else if (preg_match('#<(h|H)+(e|E)+(a|A)+(d|D)[^>]*?>.*?<\/(h|H)+(e|E)+(a|A)+(d|D)>#', $html)) {
	echo "balise head detecter</br>";
	$verifHtml = false;
}
else if (preg_match('#<(l|L)+(i|I)+(n|N)+(k|K)[^>]*?>.*?<\/(l|L)+(i|I)+(n|N)+(k|K)>#', $html)) {
	echo "balise link detecter</br>";
	$verifHtml = false;
}
else if (preg_match('#<(m|M)+(e|E)+(t|T)+(a|A)#', $html)) {
	echo "balise meta detecter</br>";
	$verifHtml = false;
}

if ($verifHtml == true) {
	$fichier = fopen("forme/".$nomfichierhtml,"x+");
	fputs($fichier, $html);
	fclose($fichier);
	$fichier = fopen("forme/".$nomfichiercss,"x+");
	fputs($fichier, $css);
	fclose($fichier);
}

 ?>