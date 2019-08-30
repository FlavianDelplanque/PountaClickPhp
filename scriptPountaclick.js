// Tableau couleur
var couleur = ["red","darkorange","yellow","lime","blue","blueviolet","cyan","gold","greenyellow"];
// Nombre partie et score
var numeroniveaux = 0;
var score = 0;
var point = 0;
// Nombre de formes 
var nombreDeFormes = ["2","4","6"];
var nombreDeDivNoir = ["1","2","3"];
// Nombre et générations forme bonus
var setIntervalFormeBonu = null;
// Temps niveaux
var timesDifficulte = ["60","45","500"];
// Temps génération forme bonus 
var tempsGeneFormeBonus = [24000,11000,1000];
// Timer
var timer = 0;
var intervalTimer = null;
// Interval deplacement 
var deplacementDifficulte = ["8000","4000","2000"];
var deplacementDifficulteSeconde = ["8","4","2"];
var intervalDeplacement = null;
// Choix simple niveaux ou tous
var niveauxSimpleOuTout = null;
// Son
var sonOuii = new Audio('son/ouii.mp3');
var sonLeviosa = new Audio('son/leviosa.mp3');
var sonWasted = new Audio('son/wasted.mp3');
// Création divGlobal
var divGlobal = document.getElementsByClassName("global");
// Indicateur de point +1 & +5
var idOnePoint = 0;
var styleOnePoint = 0;
var removeOnePoint = 0;
var idCinqPoint = 0;
var styleCinqPoint = 0;
var removeCinqPoint = 0;
// variable forme
var formesGlobal = document.getElementsByClassName("formesGlobal");
var loose = document.getElementsByClassName("loose");
var win = document.getElementsByClassName("divWin");
// Variable pause/play 
var pausePlay = 0;
// Affichage score 
var chiffreScore = document.createElement("h1");

// Niveaux
// Lancement niveaux seul
function niveaux1() {
  numeroniveaux = 0;
  lancement1Niveaux();
}
function niveaux2() {
  numeroniveaux = 1;
  lancement1Niveaux();
}
function niveaux3() {
  numeroniveaux = 2;
  lancement1Niveaux();
}
function lancement1Niveaux() {
  timer = 0;
  score = 0;
  point = 0;
  niveauxSimpleOuTout = "simple";
  lancementNiveauxGlobal();
}
// Lancement tous les niveaux
function lancementToutLesNiveaux() {
  numeroniveaux = document.cookie.replace(/(?:(?:^|.*;\s*)numeroniveaux\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  timer = 0;
  score = 0;
  point = 0;
  niveauxSimpleOuTout = "tout";
  lancementNiveauxGlobal();
}
// Lancement des niveaux suivant ou de l'écran de fin
function relanceNiveaux() {
  numeroniveaux = document.cookie.replace(/(?:(?:^|.*;\s*)numeroniveaux\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  niveauxSimpleOuTout = "tout";
  creationDivGlobal();
  titreWinChargementNiveaux();
  setTimeout(deleteTitre, 11000);
  setTimeout(formes, 5000);
  setTimeout(deplacement,5000);
  setTimeout(timeDeplacement,8000);
  setTimeout(setIntervalBonu,11000);
  setTimeout(affichageScore,11000);
  setTimeout(timerGlobal,11000);
  setTimeout(onClickWL,11000);
  setTimeout(sondivGlobal,11000);
  setTimeout(creationPause,11000);
  timer = 0;
  score = 0;
  point = 0;
}
// Lancement niveaux
function lancementNiveauxGlobal() {
  creationDivGlobal();
  titreChargementNiveaux();
  formes();
  setTimeout(setIntervalBonu,4000);
  deplacement();
  setTimeout(deplacement,4000);
  setTimeout(deleteTitreChargement,4000);
  setTimeout(onClickWL,4000);
  setTimeout(timerGlobal,4000);
  setTimeout(affichageScore,4000);
  timeDeplacement(); 
  setTimeout(sondivGlobal,4000);
  setTimeout(creationPause,4000);
}

// Div global
// Création divGlobal
function creationDivGlobal() {
  var divGlobal = document.createElement("div");
  document.body.appendChild(divGlobal);
  divGlobal.className = "global";
}
// Son div global
function sondivGlobal() {
  var el = divGlobal[0];
  el.addEventListener("click", verifSonDiv);
}
function verifSonDiv(event){
  var el = divGlobal[0];
    if (el != event.target) return;
      clickDivGlobal();
}
function clickDivGlobal() {
	var sonNok = new Audio('son/nani.mp3').play();
}


// Formes
// Generation formes
function formes() {
  var FormesCouleur = document.cookie.replace(/(?:(?:^|.*;\s*)choixformecouleur\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var FormesNoir = document.cookie.replace(/(?:(?:^|.*;\s*)choixformenoir\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  for(var i=0; i<nombreDeFormes[numeroniveaux]; i++){
   



     var formes = document.createElement("div");
    divGlobal[0].appendChild(formes);

    // Verif si la forme Tete de mort est sélectionner
    formes.className = "win";
    var formesI = document.getElementsByClassName("win");
    var formePageI = document.cookie.replace(/(?:(?:^|.*;\s*)formeCouleur\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var formePage1 = formePageI.replace(/%0D/gi, '');
    var formePage2 = formePage1.replace(/%0A/gi, '');
    var formePage3 = formePage2.replace(/%09/gi, '');
    var formePage4 = formePage3.replace(/%3C/gi, '<');
    var formePage5 = formePage4.replace(/\+/gi, ' ');
    var formePage6 = formePage5.replace(/%3D/gi, '=');
    var formePage7 = formePage6.replace(/%27/gi, '"');
    var formePage8 = formePage7.replace(/%22/gi, '"');
    var formePage9 = formePage8.replace(/%3E/gi, '>');
    var formePage = formePage9.replace(/%2F/gi, '/');
    formesI[i].innerHTML = formePage;
    var formes = document.getElementsByClassName("divWin");
    formes[i].style.position = 'absolute';
    // Application Hauteur, largeur et border radius des formes
    var taille = Math.floor(Math.random() * 50+15);
    formes[i].style.width = taille + 'px';
    formes[i].style.height = taille + 'px';
    formes[i].style.zIndex = '1';
        var nmbrC = Math.floor(Math.random() * couleur.length);
    formes[i].style.backgroundColor = couleur[nmbrC];
    }
  // Création formes noir
  for(var i=0; i<nombreDeDivNoir[numeroniveaux]; i++){
    // Création formes
    var formes = document.createElement("div");
    divGlobal[0].appendChild(formes);

    // Verif si la forme Tete de mort est sélectionner
    formes.className = "loose";
    var formesI = document.getElementsByClassName("loose");
    var formePageI = document.cookie.replace(/(?:(?:^|.*;\s*)formeNoir\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var formePage1 = formePageI.replace(/%0D/gi, '');
    var formePage2 = formePage1.replace(/%0A/gi, '');
    var formePage3 = formePage2.replace(/%09/gi, '');
    var formePage4 = formePage3.replace(/%3C/gi, '<');
    var formePage5 = formePage4.replace(/\+/gi, ' ');
    var formePage6 = formePage5.replace(/%3D/gi, '=');
    var formePage7 = formePage6.replace(/%27/gi, '"');
    var formePage8 = formePage7.replace(/%22/gi, '"');
    var formePage9 = formePage8.replace(/%3E/gi, '>');
    var formePage = formePage9.replace(/%2F/gi, '/');
    formesI[i].innerHTML = formePage;
    var formes = document.getElementsByClassName("divLoose");
    formes[i].style.position = 'absolute';
    // Application Hauteur, largeur et border radius des formes
    var taille = Math.floor(Math.random() * 50+15);
    formes[i].style.width = taille + 'px';
    formes[i].style.height = taille + 'px';
    formes[i].style.zIndex = '1';

  }
}
// Deplacement des formes
function deplacement() {
  // Calcul des nombres de formes a déplacer
  var divBonus = document.getElementsByClassName("divBonus");
  var nombreDeDiv = loose.length + win.length  + divBonus.length;
  for(var i=0; i<nombreDeDiv; i++){
    // Position hauteur et largeur des formes
    var nmbrT = Math.floor(Math.random() * (88)+2);
    var nmbrL = Math.floor(Math.random() * (92)+2);
    formesGlobal[i].style.top = nmbrT + '%';
    formesGlobal[i].style.right = nmbrL + '%';
    formesGlobal[i].style.transitionDuration = deplacementDifficulteSeconde[numeroniveaux]+"s";
  }
}
function timeDeplacement() {
	deplacement();
  intervalDeplacement = setInterval(deplacement,deplacementDifficulte[numeroniveaux]);
}
// Génération des fonctions click pour les formes et changement de curseur
function onClickWL() {
	// changement curseur
	document.body.style.cursor = "crosshair";
  // Win
  for(var i=0; i<win.length; i++){
    // Récupère les div de class Win et applique un "onclick" 
    win[i].addEventListener("click", cliqueW);
  }
    // Loose
  for(var i=0; i<loose.length; i++){
    // Récupère les div de class Loose et applique un "onclick" 
    loose[i].addEventListener("click", cliqueL);
  }
}
// Fonctions click des formes win
function cliqueW() {
  var sonOk = new Audio('son/oui.mp3').play();
  score++;
  point++;
  chiffreScore.textContent = score;
  chiffreScore.animate([{ transform: 'rotateZ(0deg)'},{ transform: 'rotateZ(360deg)' }], { duration: 500, iterations: 1});
  // Suprime la forme sélectionner
  (event.target).remove();
  var divBonus = document.getElementsByClassName("divBonus");
  if (divBonus.length > 0 || win.length >0) {
  // Lance l'animation +1point
  animationPointClique(event);
  }
  cliqueWP();
}
function animationPointClique(event){
  idOnePoint++;
  // Récupére la position de la souris lors du clic sur la forme bonus
  var x = event.clientX;
  var y = event.clientY;
  // Affiche le +1 point au coordonné récupérer
  var onePoint = document.createElement("label");
  document.body.appendChild(onePoint);
  onePoint.textContent = "+1 Point";
  onePoint.id = "onePoint"+idOnePoint;
  onePoint.style.position = 'absolute';
  onePoint.style.top = y + 'px';
  onePoint.style.left = x + 'px'; 
  // Effet et suppression du +1
  setTimeout(transitionPointClique,500);
  setTimeout(removePointClique,1500);
}
function transitionPointClique() {
  styleOnePoint++;
  var onePoint = document.getElementById("onePoint"+styleOnePoint);
  onePoint.style.opacity = '0';
  onePoint.style.transitionDuration = "1s";
}
function removePointClique() {
  removeOnePoint++;
  var onePoint = document.getElementById("onePoint"+removeOnePoint);
  onePoint.remove();
}
// Création des formes bonus et fonctions click
function setIntervalBonu() {
	var intervalBonu = tempsGeneFormeBonus[numeroniveaux];
	var intervalBonuRandom = intervalBonu / 2;
  var intervalFormeBonu = Math.floor(Math.random() * intervalBonuRandom)+intervalBonu;
  setIntervalFormeBonu = setInterval(formeBonu,intervalFormeBonu); 
}
function formeBonu() {
  var nombreDivTeteGlobal = document.getElementsByClassName("divBonus").length;
  // Verification données du joueur
  var FormesBonus = document.cookie.replace(/(?:(?:^|.*;\s*)choixformebonus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  // Vérifi si il reste des formes normal
  if (win.length == 0) {
    clearInterval(setIntervalFormeBonu);
    setIntervalBonu();
  }
  else {
  // Génére les formes bonus suivant la forme choisi par l'utilisateur
    // Rend la forme normal transparent
    win[0].style.transitionDuration = '0s';
    win[0].style.backgroundColor = 'transparent';
    win[0].className = "divBonus formesGlobal";
    // Créer la forme bonus a l'intérieur de la forme normal
    var divBonus = document.getElementsByClassName("divBonus");
    divBonus[nombreDivTeteGlobal].removeEventListener("click", cliqueW);
    divBonus[nombreDivTeteGlobal].addEventListener("click", cliqueWB);
    var formePageI = document.cookie.replace(/(?:(?:^|.*;\s*)formeBonus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var formePage1 = formePageI.replace(/%0D/gi, '');
    var formePage2 = formePage1.replace(/%0A/gi, '');
    var formePage3 = formePage2.replace(/%09/gi, '');
    var formePage4 = formePage3.replace(/%3C/gi, '<');
    var formePage5 = formePage4.replace(/\+/gi, ' ');
    var formePage6 = formePage5.replace(/%3D/gi, '=');
    var formePage7 = formePage6.replace(/%27/gi, '"');
    var formePage8 = formePage7.replace(/%22/gi, '"');
    var formePage9 = formePage8.replace(/%3E/gi, '>');
    var formePage = formePage9.replace(/%2F/gi, '/');
    divBonus[nombreDivTeteGlobal].innerHTML = formePage;
    clearInterval(setIntervalFormeBonu);
    setIntervalBonu();
  }
}
function cliqueWB(event) {
  score+=5;
  point+=5;
  chiffreScore.textContent = score;
  chiffreScore.animate([{ transform: 'rotateZ(0deg)'},{ transform: 'rotateZ(360deg)' }], { duration: 500, iterations: 1});
  window.timerMiniCompteARebourd +=5;
  // Supprime la forme bonus
  event.target.closest('.divBonus').remove();
  var divBonus = document.getElementsByClassName("divBonus");
  if (divBonus.length > 0 || win.length >0) {
  // Lance l'animation +5point & seconde
  animationCinqPointClique(event);
  }
  cliqueWP();
}
// Animation +5 point & seconde
function animationCinqPointClique(event){
  var sonHanLeviosa = new Audio('son/hanleviosa.mp3').play();
  idCinqPoint++;
  // Récupére la position de la souris lors du clic sur la forme bonus
  var x = event.clientX;
  var y = event.clientY;
  // Affiche le +5 point & seconde au coordonné récupérer
  var cinqPoint = document.createElement("label");
  document.body.appendChild(cinqPoint);
  cinqPoint.textContent = "+5 Point";
  cinqPoint.id = "cinqPoint"+idCinqPoint;
  cinqPoint.style.position = 'absolute';
  cinqPoint.style.top = y + 'px';
  cinqPoint.style.left = x + 'px'; 
  var cinqSeconde = document.createElement("label");
  document.body.appendChild(cinqSeconde);
  cinqSeconde.textContent = "+5 Secondes";
  cinqSeconde.id = "cinqSeconde"+idCinqPoint;
  cinqSeconde.style.position = 'absolute';
  cinqSeconde.style.top = parseInt(y+30) + 'px';
  cinqSeconde.style.left = x + 'px'; 
  // Effet et suppression du +5
  setTimeout(transitionCinqPointClique,500);
  setTimeout(removeCinqPointClique,1500);
}
function transitionCinqPointClique() {
  styleCinqPoint++;
  var cinqPoint = document.getElementById("cinqPoint"+styleCinqPoint);
  var cinqSeconde = document.getElementById("cinqSeconde"+styleCinqPoint);
  cinqPoint.style.opacity = '0';
  cinqPoint.style.transitionDuration = "1s";
  cinqSeconde.style.opacity = '0';
  cinqSeconde.style.transitionDuration = "1s";
}
function removeCinqPointClique() {
  removeCinqPoint++;
  var cinqPoint = document.getElementById("cinqPoint"+removeCinqPoint);
  cinqPoint.remove();
  var cinqSeconde = document.getElementById("cinqSeconde"+removeCinqPoint);
  cinqSeconde.remove();
}
// Lancement des niveaux suivant ou de l'écran win suivant le nombre de forme normal et bonus restante 
function cliqueWP() {
  // Verif le nombre de formes normal et bonus restant
  var winTotal = win.length + document.getElementsByClassName("divBonus").length;
  if (winTotal == 0 && niveauxSimpleOuTout == "tout") {
    // lance les niveaux suivant
    sauvegardeScore();
    gestionNiveaux();
    titreWin();
  }
  else if (winTotal == 0 && niveauxSimpleOuTout == "simple") {
    // lance l'écran win
    sauvegardeScore();
    titreWin();
    if (numeroniveaux <= 2) {
    // Lance le son pour l'écran win des niveaux noob et hardcore
    sonOuii.play();
    }
    else {
    // Lance le son pour l'écran win du niveau ultrahadcore
    sonLeviosa.play();
    }
  }
}
// Loose
function cliqueL() {
  // lance l'écran loose
  sauvegardeScore();
  titreLoose();
}

// Gestion du jeux
// Timer
function timerGlobal() {
  // Lance le timer
  intervalTimer = setInterval(timerFunction, 1000);
  var timerMini = document.createElement("h1");
  divGlobal[0].appendChild(timerMini);    
  timerMini.id = "timerMini";
  window.timerMiniCompteARebourd = timesDifficulte[numeroniveaux];
  // Affichage timer
  window.timerMini.textContent = window.timerMiniCompteARebourd + " secondes restantes";
}
// Affichage timer
function timerFunction() {
  window.timerMiniCompteARebourd--;
  timer++;
  timerMini.textContent = window.timerMiniCompteARebourd + " secondes restantes";
  if (window.timerMiniCompteARebourd<1) {
    // Fin du timer et lancement de l'écran loose
    sauvegardeScore();
    titreLoose();
  }
}
// Affichage score
function affichageScore() {
	var divScore =  document.createElement("div");
	divGlobal[0].appendChild(divScore);
	divScore.id = "divScore";
	var titreScore = document.createElement("h1");
	divScore.appendChild(titreScore);
	titreScore.id = "titreScore";
	titreScore.textContent = "Score :";
	divScore.appendChild(chiffreScore);
	chiffreScore.id = "chiffreScore";
	chiffreScore.textContent = "0";
}
// Mettre en pause
function creationPause() {
	// Creation option pause 
	document.addEventListener("keydown", touchePause);
}
function touchePause() {
  if (event.keyCode == 27 && pausePlay == 0) {
  	pause();
  	pausePlay = 1;
  }
  else if (event.keyCode == 27 && pausePlay == 1) {
  	play();
  	pausePlay = 0;
  }
}
function pause() {
	clearInterval(intervalTimer);
	clearInterval(setIntervalFormeBonu);
	clearInterval(intervalDeplacement);
	var titrePause = document.createElement("h1");
	divGlobal[0].append(titrePause);
	titrePause.id = "titrePause";
	titrePause.textContent = "Pause";
	var divGlobalPause = document.createElement("div");
	document.body.appendChild(divGlobalPause);
	divGlobalPause.id = "divGlobalPause";
}
function play() {
	intervalTimer = setInterval(timerFunction, 1000);
	setIntervalBonu();
	timeDeplacement();
	var removeTitrePause = document.getElementById("titrePause");
	removeTitrePause.remove();
	var removeDivGlovalPause = document.getElementById("divGlobalPause");
	removeDivGlovalPause.remove();
}

// Titre
// Titre Win chargement
function gestionNiveaux() {
  var numeroniveaux = document.cookie.replace(/(?:(?:^|.*;\s*)numeroniveaux\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (numeroniveaux==0) {
    document.cookie = "numeroniveaux=1";
  }
  else if (numeroniveaux==1) {
    document.cookie = "numeroniveaux=2";
  }
  else if (numeroniveaux==2) {
    document.cookie = "numeroniveaux=null";
  }
}
function titreWinChargementNiveaux() {
  timer = document.cookie.replace(/(?:(?:^|.*;\s*)time\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  sonOuii.play();
  // Titre you win
  var titreWin = document.createElement("h1");
  divGlobal[0].appendChild(titreWin);
  titreWin.id = "win";
  titreWin.textContent = "You Win ! Votre temps est de " + timer + " secondes";
  titreWin.style.zIndex = '20';
  // Timer chargement niveaux
  var timerAttente = setInterval(secondeTimer,1000);
  var titreTimeChiffre = document.createElement("h1");
  divGlobal[0].appendChild(titreTimeChiffre);
  titreTimeChiffre.id = "chiffreTime";
  titreTimeChiffre.textContent = "10";
  titreTimeChiffre.style.zIndex = '20';
  var titreTime = document.createElement("h2");
  divGlobal[0].appendChild(titreTime);
  titreTime.id = "timer";
  titreTime.textContent = "secondes avant prochain niveaux";
  titreTime.style.zIndex = '20';
  function secondeTimer() {
    seconde--;
    titreTimeChiffre.textContent = seconde;
    titreTime.textContent = "secondes avant prochain niveaux";
    if (seconde == 0) {
      clearInterval(timerAttente);
    }
    else {
    }
  }
  var seconde = 10;
}
// Titre chargement niveaux seul
function titreChargementNiveaux() {
  var seconde = 3;
  // Timer chargement niveaux
  var timerAttente = setInterval(secondeTimer,1000);
  var titreTimeChiffre = document.createElement("h1");
  divGlobal[0].appendChild(titreTimeChiffre);
  titreTimeChiffre.id = "chiffreTime";
  titreTimeChiffre.textContent = seconde;
  titreTimeChiffre.style.zIndex = '20';
  var titreTime = document.createElement("h2");
  divGlobal[0].appendChild(titreTime);
  titreTime.id = "timer";
  titreTime.textContent = "secondes avant lancement du niveaux";
  titreTime.style.zIndex = '20';
  function secondeTimer() {
    seconde--;
    titreTimeChiffre.textContent = seconde;
    titreTime.textContent = "secondes avant lancement du niveaux";
    if (seconde == 0) {
      clearInterval(timerAttente);
    }
    else {
    }
  }
}
// Titre win niveaux seul & win final pour tous les niveaux
function titreWin() {
  document.cookie = "resultat=win";
  document.cookie = "time="+timer;
}
// Titre loose
function titreLoose() {
  document.cookie = "resultat=loose";
  document.cookie = "scorepartie="+score;
  sonWasted.play();
  document.cookie = "numeroniveaux=null";
}

function sauvegardeScore() {
  document.cookie = "score="+score;
  document.cookie = "point="+point;
  document.location.href="traitementscore.php";
}
// Supprime les titres
function deleteTitre() {
  document.getElementById("win").remove();
  document.getElementById("chiffreTime").remove();
  document.getElementById("timer").remove();
}
function deleteTitreChargement() {
  document.getElementById("chiffreTime").remove();
  document.getElementById("timer").remove();
}







var checkForme = null;
var choixformesU = null;
var nomFormeB = 1;
var nomForme = 2;
var prix = null;
var choixFormeDef = null;
var formeDef = null;

function ChangementFormes() {
  var boutonChangement = document.getElementsByClassName("boutonMenuformes");
  boutonChangement[0].addEventListener("click",retourMenuForme);
  document.cookie = "achat=false";
  var forme = document.cookie.replace(/(?:(?:^|.*;\s*)forme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (forme == "couleur") {
    checkForme = document.cookie.replace(/(?:(?:^|.*;\s*)formecouleur\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    choixformesU = document.cookie.replace(/(?:(?:^|.*;\s*)choixformecouleur\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    intituleFormeB = "choixformecouleur";
    intituleForme = "formecouleur";
    prix = 50;
    choixFormeDef = choixformesU;
    formeDef = checkForme;
  }
  else if (forme == "noir") {
    checkForme = document.cookie.replace(/(?:(?:^|.*;\s*)formenoir\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    choixformesU = document.cookie.replace(/(?:(?:^|.*;\s*)choixformenoir\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    intituleFormeB = "choixformenoir";
    intituleForme = "formenoir";
    prix = 100;
    choixFormeDef = choixformesU;
    formeDef = checkForme;
  }
  else if (forme == "bonus") {
    checkForme = document.cookie.replace(/(?:(?:^|.*;\s*)formebonus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    choixformesU = document.cookie.replace(/(?:(?:^|.*;\s*)choixformebonus\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    intituleFormeB = "choixformebonus";
    intituleForme = "formebonus";
    prix = 200;
    choixFormeDef = choixformesU;
    formeDef = checkForme;
  }
  var nombreDePointU = document.cookie.replace(/(?:(?:^|.*;\s*)point\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var formes1 = document.getElementById("divFormes1");
  formes1.addEventListener("click", choixFormesB);
  var formes2 = document.getElementById("divFormes2");
  formes2.addEventListener("click", choixFormes);
    // Verif si le joueur poséde la forme rond
    var nombreDePointU = document.cookie.replace(/(?:(?:^|.*;\s*)point\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (checkForme == nomForme){
      pointNCouleur2.textContent = "obtenu";
    }
    // Vérification de la forme choisi par le joueur et affichage du check suivant la forme sélectionner
    if (choixformesU == "null" || choixformesU == nomFormeB) {
      // Affiche un check sur la forme carre
      var divFormes = document.getElementById("divFormes1");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      imgCheck.id = "check1";
    }
    else {
      // Affiche un check sur la forme rond
      var divFormes = document.getElementById("divFormes2");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      imgCheck.id = "check2";
    }
    // Verifi si le joueur posséde la forme rond
    if (nombreDePointU < prix && checkForme == "null") {
      // Affiche un cadenas sur la forme rond
      var divFormes2 = document.getElementById("divFormes2");
      var cadenas = new Image();
      cadenas.src = "image/cadenas.png";
      divFormes2.appendChild(cadenas);
      cadenas.style.position = 'absolute';
      cadenas.style.width = '70%';
      cadenas.style.height = '70%';
      // Affiche le nombre de point nécessaire pour avoir la forme rond
      pointNCouleur2.textContent = prix+" point";
    }
    else if (checkForme == "null") {
      // Affiche le nombre de point nécessaire pour avoir la forme rond
      pointNCouleur2.textContent =  prix+" point";
    }
  }
function choixFormesB() {
  var nombreDePointU = document.cookie.replace(/(?:(?:^|.*;\s*)point\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  document.cookie = intituleFormeB+"="+nomFormeB;
  // Verif si le check est déjà afficher et l'affiche quand la forme carre est sélectionner
  var verifCheck = document.getElementById("check1");
  if (verifCheck < 1) {
  var divFormes = document.getElementById("divFormes1");
  var imgCheck = new Image();
  imgCheck.src = "image/check.png";
  divFormes.appendChild(imgCheck);
  imgCheck.style.position = 'absolute';
  imgCheck.style.width = '100%';
  imgCheck.style.height = '80%';
  imgCheck.id = "check1";
  document.getElementById("check2").remove();
  }
  choixFormeDef = nomFormeB;
}

function choixFormes() {
  var nombreDePointU = document.cookie.replace(/(?:(?:^|.*;\s*)point\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (checkForme == "null" && nombreDePointU >= prix) {
    document.cookie = intituleForme+"="+nomForme;
    document.cookie = intituleFormeB+"="+nomForme;
    document.cookie = "point="+prix;
    document.cookie = "achat=true";
    var pointNCouleur2 = document.getElementById("pointNCouleur2");
    pointNCouleur2.textContent = "acheté !";
    checkFormeF();
    choixFormeDef = nomForme;
    formeDef = nomForme;
  }
  else if (checkForme == nomForme) {
    document.cookie = intituleFormeB+"="+nomForme;
    checkFormeF();
    choixFormeDef = nomForme;
  }
}
function checkFormeF() {
  var verifCheck = document.getElementById("check2");
  if (verifCheck < 1) {
  var divFormes = document.getElementById("divFormes2");
  var imgCheck = new Image();
  imgCheck.src = "image/check.png";
  divFormes.appendChild(imgCheck);
  imgCheck.style.position = 'absolute';
  imgCheck.style.width = '100%';
  imgCheck.style.height = '80%';
  imgCheck.id = "check2";
  document.getElementById("check1").remove();
  }
}


function retourMenuForme() {
  document.cookie = intituleFormeB+"="+choixFormeDef;
  document.cookie = intituleForme+"="+formeDef;
  document.location.href="traitementchoixformes.php";
}

document.querySelector("#changertheme").addEventListener("click", changertheme);

function changertheme() {
  var body = document.querySelector("body");
  body.classList.toggle("darktheme");
}
