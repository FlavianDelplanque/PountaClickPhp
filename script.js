// Tableau couleur
var couleur = ["red","darkorange","yellow","lime","blue","blueviolet","cyan","gold","greenyellow"];
// Nombre partie et score
var partie = 0;
var partieLancement = 0;
var partieStorage = 0;
var score = 0;
var point = 0;
var pointusers = 0;
// Nombre de formes 
var nombreDeFormes = ["17","60","130"];
var nombreDeDivNoir = ["3","20","70"];
// Nombre et générations forme bonus
var formesBonus = 0;
var setIntervalFormeBonu = null;
// Temps niveaux
var timesDifficulte = ["60","45","30"];
// Temps génération forme bonus 
var tempsGeneFormeBonus = [24000,11000,5000];
// Timer
var timer = 0;
var intervalTimer = null;
// Interval deplacement 
var deplacementDifficulte = ["8000","4000","2000"];
var timerDifficulte = ["9000","5000","3000"];
var deplacementDifficulteSeconde = ["8","4","2"];
var intervalDeplacement = null;
// Utilisateur
var pseudo = null;
// Choix simple niveaux ou tous
var niveauxSimpleOuTout = null;
// Son
var sonOuii = new Audio('son/ouii.mp3');
var sonLeviosa = new Audio('son/leviosa.mp3');
var sonWasted = new Audio('son/wasted.mp3');
// Création divGlobal
var divGlobal = document.getElementsByClassName("global");
// Bouton
var boutonMenuJeuxCN = document.getElementsByClassName("boutonMenuJeuxCN");
// Choix forme
var choixFormeCouleur = null;
var choixFormeNoir = null;
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
var win = document.getElementsByClassName("win");
// Variable pause/play 
var pausePlay = 0;
// Affichage score 
var chiffreScore = document.createElement("h1");

// Menu
// Accueil
function accueil() {
  // Création div global
  creationDivGlobal();
  // Titre menu jeux
  var labelMenu = document.createElement("label");
  divGlobal[0].appendChild(labelMenu);
  labelMenu.textContent = "Menu jeux";
  // Bouton menu jeux
  var boutonMenuJeux = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuJeux);
  boutonMenuJeux.textContent = "Menu jeux";
  boutonMenuJeux.onmouseenter = boutonMenuJeuxEnter;
  boutonMenuJeux.onmouseleave = boutonMenuJeuxSortie;
    function boutonMenuJeuxEnter() {
      boutonMenuJeux.textContent = "Let's go !";
    }
    function boutonMenuJeuxSortie() {
      boutonMenuJeux.textContent = "Menu jeux";
    }  
  boutonMenuJeux.addEventListener("click", menuEntrerPseudo);
  // Titre ou
  var labelOu = document.createElement("label");
  divGlobal[0].appendChild(labelOu);
  labelOu.textContent = "OU";
  // Titre stats parties
  var labelScore = document.createElement("label");
  divGlobal[0].appendChild(labelScore);
  labelScore.textContent = "Stats parties";
  // Bouton stats parties
  boutonScoreEtPartieAccueil();
}
// Tableau des scores
function tableauScoreEtPartieGlobalAccueil() {
  tableauScoreEtPartieGlobal(); 
  boutonAccueil();
  var boutonMenuJeux = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuJeux);
  boutonMenuJeux.textContent = "Menu jeux";
  boutonMenuJeux.addEventListener("click", menuEntrerPseudo);
}
function tableauScoreEtPartieGlobalJeux() {
  sonOuii.pause();
  sonOuii.currentTime = 0;
  sonLeviosa.pause();
  sonLeviosa.currentTime = 0;
  sonWasted.pause();
  sonWasted.currentTime = 0;
  tableauScoreEtPartieGlobal(); 
  boutonAccueil();
  var boutonMenuJeux = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuJeux);
  boutonMenuJeux.textContent = "Menu jeux";
  boutonMenuJeux.addEventListener("click", removeDivGlobal);
  boutonMenuJeux.addEventListener("click", menuJeux);
}
function tableauScoreEtPartieGlobal() {
  var divGlobal = document.getElementsByClassName("global");
  divGlobal[0].remove();
  var divGlobal = document.createElement("div");
  document.body.appendChild(divGlobal);
  var verifTailleTableau = sessionStorage.length;
  if (verifTailleTableau >= 15) {
    divGlobal.className = "global globalScore";
  }
  else {
    divGlobal.className = "global";
  }
  // Création tableau et en-tête
  var tableau = document.createElement("table");
  divGlobal.appendChild(tableau);
  var thead = document.createElement("thead");
  tableau.appendChild(thead);
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  var th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Pseudo";
  var th1 = document.createElement("th");
  tr.appendChild(th1);
  th1.textContent = "Score total";
  var th2 = document.createElement("th");
  tr.appendChild(th2);
  th2.textContent = "Nombre de partie joué";
  var tbody = document.createElement("tbody");
  tableau.appendChild(tbody);
  // Génération pseudo, score et partie jouer des différents joueur
  for( var k in sessionStorage){
    if (typeof sessionStorage[k] !== 'function' && k != 'length') {
      var pseudo = k;
      var scoreU = JSON.parse(sessionStorage[k]).scoreUtilisateur;
      var partieU = JSON.parse(sessionStorage[k]).partieUtilisateur;
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      tbody.appendChild(tr);
      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      td.appendChild(document.createTextNode(pseudo));
      td1.appendChild(document.createTextNode(scoreU));
      td2.appendChild(document.createTextNode(partieU));
    }
  }
}
// Bouton menu
function boutonScoreEtPartieJeux() {
  // Bouton score et partie via jeux
  var a = document.createElement("a");
  divGlobal[0].appendChild(a);
  a.href = "scores.php";
  var bouton = document.createElement("button");
  a.appendChild(bouton);
  bouton.textContent = "Scores et nombre de partie jouer";
  bouton.id = "boutonScoreEtPartie";
  bouton.onmouseenter = boutonEnter;
  bouton.onmouseleave = boutonSortie;
  function boutonEnter() {
    bouton.textContent = "Tes sur ? Tu risque de le regretter. Mon score est gros... A quoi tu pensé ? Pervers(e) !";
  }
  function boutonSortie() {
    bouton.textContent = "Scores et nombre de partie jouer";
  } 
}
function boutonMenuJeux() {
  var a = document.createElement("a");
  divGlobal[0].appendChild(a);
  a.href = "menujeux.php";
  var boutonMenuJeux = document.createElement("button");
  a.appendChild(boutonMenuJeux);
  boutonMenuJeux.textContent = "Menu jeux";
}


// Niveaux
// Lancement niveaux seul
function niveaux1() {
  partie = 0;
  partieLancement = 0;
  lancement1Niveaux();
}
function niveaux2() {
  partie = 1;
  partieLancement = 1;
  lancement1Niveaux();
}
function niveaux3() {
  partie = 2;
  partieLancement = 2;
  lancement1Niveaux();
}
function lancement1Niveaux() {
  timer = 0;
  score = 0;
  point = 0;
  partieStorage = 0;
  niveauxSimpleOuTout = "simple";
  lancementNiveauxGlobal();
}
// Lancement tous les niveaux
function toutLesNiveaux() {
  partieLancement = 0;
  partie=0; 
  lancementToutLesNiveaux();
}
function lancementToutLesNiveaux() {
  timer = 0;
  score = 0;
  point = 0;
  partieStorage = 0;
  niveauxSimpleOuTout = "tout";
  lancementNiveauxGlobal();
}
// Lancement des niveaux suivant ou de l'écran de fin
function relance() {
  if (partie <= 2){
    finish();
    partieStorage = 0;
    titreWinChargementNiveaux();
    setTimeout(deleteTitre, 11000);
    setTimeout(formes, 5000);
    setTimeout(deplacement,5000);
    setTimeout(timeDeplacement,8000);
    setTimeout(setIntervalBonu,11000);
    setTimeout(affichageScore,11000);
    setTimeout(timerGlobal,11000);
    setTimeout(onClickWL,11000);
    setTimeout(nombrePartie,11000);
    setTimeout(sondivGlobal,11000);
    setTimeout(creationPause,11000);
    timer = 0;
    score = 0;
    point = 0;
  }
  // Chargement titre de fin
  else {
    finish();
    partieStorage = 0;
    titreWin();
    sonLeviosa.play();
  }
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
  setTimeout(nombrePartie,4000); 
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
function removeDivGlobal() {
  divGlobal[0].remove();
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
function removeSonDivGlobal() {
  divGlobal[0].removeEventListener("click", verifSonDiv);
}

// Formes
// Generation formes
function formes() {

    var inputFormesCouleur = document.getElementById("inputchoixformecouleur");
    var FormesCouleur = inputFormesCouleur.value;
    var inputFormesNoir = document.getElementById("inputchoixformenoir");
    var FormesNoir = inputFormesNoir.value;    

  for(var i=0; i<nombreDeFormes[partie]; i++){
    // Création formes
    var formes = document.createElement("div");
    divGlobal[0].appendChild(formes);
    formes.style.position = 'absolute';
    // Application Hauteur, largeur et border radius des formes
    var taille = Math.floor(Math.random() * 50+15);
    formes.style.width = taille + 'px';
    formes.style.height = taille + 'px';
    // Verif si la forme rond est sélectionner
    if (FormesCouleur == "rond") {
      formes.style.borderRadius = '50%';
    }
    formes.style.zIndex = '1';
    // Changement Couleur des formes
    var nmbrC = Math.floor(Math.random() * couleur.length);
    formes.style.backgroundColor = couleur[nmbrC];
    // Création Class couleur et Class Global
    formes.className = "formesGlobal win";
    }
  // Création formes noir
  for(var i=0; i<nombreDeDivNoir[partie]; i++){
    // Création formes
    var formes = document.createElement("div");
    divGlobal[0].appendChild(formes);
    formes.style.position = 'absolute';
    // Application Hauteur, largeur et border radius des formes
    var taille = Math.floor(Math.random() * 50+15);
    formes.style.width = taille + 'px';
    formes.style.height = taille + 'px';
    formes.style.borderRadius = "50%";
    // Changement Couleur des formes
    formes.style.backgroundColor = "black";
    formes.style.zIndex = '1';
    // Verif si la forme Tete de mort est sélectionner
    if (FormesNoir == "TeteDeMort") {
      formes.className = "formesGlobal visageTM loose";
      var visage = document.getElementsByClassName("visageTM");
      var tete = document.createElement("div");
      visage[i].appendChild(tete);
      tete.className = "teteTM";
      var yeux1 = document.createElement("div");
      tete.appendChild(yeux1);
      yeux1.className = "yeux1TM";
      var yeux2 = document.createElement("div");
      tete.appendChild(yeux2);
      yeux2.className = "yeux2TM";
      var nez = document.createElement("div");
      tete.appendChild(nez);
      nez.className = "nez";
      var barre1 = document.createElement("div");
      tete.appendChild(barre1);
      barre1.className = "barre1";
      var barre2 = document.createElement("div");
      tete.appendChild(barre2);
      barre2.className = "barre2";
      var barre3 = document.createElement("div");
      tete.appendChild(barre3);
      barre3.className = "barre3";
      var barre4 = document.createElement("div");
      tete.appendChild(barre4);
      barre4.className = "barre4";
      var rond1 = document.createElement("div");
      tete.appendChild(rond1);
      rond1.className = "rond1";
      var rond2 = document.createElement("div");
      tete.appendChild(rond2);
      rond2.className = "rond2";
      var rond3 = document.createElement("div");
      tete.appendChild(rond3);
      rond3.className = "rond3";
      var rond4 = document.createElement("div");
      tete.appendChild(rond4);
      rond4.className = "rond4";
    }
    else {
      // Création Class couleur et Class Global
      formes.className = "formesGlobal loose";
    }
  }
}
// Deplacement des formes
function deplacement() {
  // Calcul des nombres de formes a déplacer
  var teteGlobal = document.getElementsByClassName("teteGlobal");
  var nombreDeDiv = loose.length + win.length  + teteGlobal.length;
  for(var i=0; i<nombreDeDiv; i++){
    // Position hauteur et largeur des formes
    var nmbrT = Math.floor(Math.random() * (88)+2);
    var nmbrL = Math.floor(Math.random() * (92)+2);
    formesGlobal[i].style.top = nmbrT + '%';
    formesGlobal[i].style.right = nmbrL + '%';
    formesGlobal[i].style.transitionDuration = deplacementDifficulteSeconde[partieLancement]+"s";
  }
}
function timeDeplacement() {
	deplacement();
  intervalDeplacement = setInterval(deplacement,deplacementDifficulte[partieLancement]);
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
  var teteGlobal = document.getElementsByClassName("teteGlobal");
  if (teteGlobal.length > 0 || win.length >0) {
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
	var intervalBonu = tempsGeneFormeBonus[partieLancement];
	var intervalBonuRandom = intervalBonu / 2;
  var intervalFormeBonu = Math.floor(Math.random() * intervalBonuRandom)+intervalBonu;
  setIntervalFormeBonu = setInterval(formeBonu,intervalFormeBonu); 
}
function formeBonu() {
  var nombreDivTeteGlobal = document.getElementsByClassName("teteGlobal").length;
  // Verification données du joueur
  var inputFormesBonus = document.getElementById("inputchoixformebonus");
  var FormesBonus = inputFormesBonus.value;
  // Vérifi si il reste des formes normal
  if (win.length == 0) {
    clearInterval(setIntervalFormeBonu);
    setIntervalBonu();
  }
  // Génére les formes bonus suivant la forme choisi par l'utilisateur
  else if (FormesBonus == "Aurelie"){
    // Rend la forme normal transparent
    win[0].style.transitionDuration = '0s';
    win[0].style.backgroundColor = 'transparent';
    win[0].className = "teteGlobal formesGlobal";
    // Créer la forme bonus a l'intérieur de la forme normal
    var teteGlobal = document.getElementsByClassName("teteGlobal");
    teteGlobal[nombreDivTeteGlobal].removeEventListener("click", cliqueW);
    teteGlobal[nombreDivTeteGlobal].addEventListener("click", cliqueWB);
    var cheveux = document.createElement("div");
    teteGlobal[nombreDivTeteGlobal].appendChild(cheveux);
    cheveux.className = "cheveux";
    var fond = document.createElement("div");
    cheveux.appendChild(fond);
    fond.className = "fond";
    var tete = document.createElement("div");
    fond.appendChild(tete);
    tete.className = "tete";
    var yeux1 = document.createElement("div");
    tete.appendChild(yeux1);
    yeux1.className = "yeux1";
    var yeux2 = document.createElement("div");
    tete.appendChild(yeux2);
    yeux2.className = "yeux2";
    var bouche = document.createElement("div");
    tete.appendChild(bouche);
    bouche.className = "bouche";
    clearInterval(setIntervalFormeBonu);
    setIntervalBonu();
  }
  else {
    // Rend la forme normal transparent
    win[0].style.transitionDuration = '0s';
    win[0].style.backgroundColor = 'transparent';
    win[0].className = "teteGlobal formesGlobal";
    // Créer la forme bonus a l'intérieur de la forme normal
    var teteGlobal = document.getElementsByClassName("teteGlobal");
    teteGlobal[nombreDivTeteGlobal].removeEventListener("click", cliqueW);
    teteGlobal[nombreDivTeteGlobal].addEventListener("click", cliqueWB);
    var cheveuxC = document.createElement("div");
    teteGlobal[nombreDivTeteGlobal].appendChild(cheveuxC);
    cheveuxC.className = "cheveuxC";
    var teteC = document.createElement("div");
    teteGlobal[nombreDivTeteGlobal].appendChild(teteC);
    teteC.className = "teteC";
    var yeux1C = document.createElement("div");
    teteC.appendChild(yeux1C);
    yeux1C.className = "yeux1C";
    var yeux2C = document.createElement("div");
    teteC.appendChild(yeux2C);
    yeux2C.className = "yeux2C";
    var boucheC = document.createElement("div");
    teteC.appendChild(boucheC);
    boucheC.className = "boucheC";
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
  event.target.closest('.teteGlobal').remove();
  var teteGlobal = document.getElementsByClassName("teteGlobal");
  if (teteGlobal.length > 0 || win.length >0) {
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
  var winTotal = win.length + document.getElementsByClassName("teteGlobal").length;
  if (winTotal == 0 && niveauxSimpleOuTout == "tout") {
    // lance les niveaux suivant
    relance();
  }
  else if (winTotal == 0 && niveauxSimpleOuTout == "simple") {
    // lance l'écran win
    finish();
    titreWin();
    if (partieLancement <= 2) {
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
  finish();
  titreLoose();
}

// Gestion du jeux
// Nombre partie
function nombrePartie() {
  partie++;
  partieStorage++;
}
// Timer
function timerGlobal() {
  // Lance le timer
  intervalTimer = setInterval(timerFunction, 1000);
  var timerMini = document.createElement("h1");
  divGlobal[0].appendChild(timerMini);    
  timerMini.id = "timerMini";
  window.timerMiniCompteARebourd = timesDifficulte[partie];
  // Affichage timer
  window.timerMini.textContent = window.timerMiniCompteARebourd + " secondes restantes";
}
// Affichage timer
function timerFunction() {
  window.timerMiniCompteARebourd--;
  timer++;
  timerMini.textContent = window.timerMiniCompteARebourd + " secondes restantes";
  if (window.timerMiniCompteARebourd<0) {
    // Fin du timer et lancement de l'écran loose
    finish();
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
// Finish
function finish() {
  partieLancement++;
  removeSonDivGlobal();
  removePause();
  sauvegardeScore();
  // changement curseur 
  document.body.style.cursor = "default";

  // Clear des interval
  clearInterval(setIntervalFormeBonu);
  clearInterval(intervalTimer);
  clearInterval(intervalDeplacement);
  // Suppresion de l'affichage du timer et des formes restante
  document.getElementById("timerMini").remove();
  document.getElementById("divScore").remove();
  var teteGlobal = document.getElementsByClassName("teteGlobal");
  var nombreDeDivTotal = win.length + loose.length + teteGlobal.length -1;
    for(var i=nombreDeDivTotal; i>-1; i--){
    formesGlobal[i].remove();
  }
}
// Mettre en pause
function creationPause() {
	// Creation option pause 
	document.addEventListener("keydown", touchePause);
}
function removePause() {
	// Suppresion option pause
	document.removeEventListener("keydown", touchePause);
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
function titreWinChargementNiveaux() {
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
  
}
// Titre loose
function titreLoose() {
  sonWasted.play();
}

function sauvegardeScore() {
  var inputscore = document.getElementById("inputscore");
  valueinputscore = inputscore.value;
  inputscore.value = parseInt(valueinputscore)+score;
  var inputpoint = document.getElementById("inputpoint");
  valueinputpoint = inputpoint.value;
  inputpoint.value = parseInt(valueinputpoint)+point;
  document.querySelector(".form").submit();
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










function ChangementFormesCouleur() {
  recuppointbd();
  var boutonMenuformes = document.querySelector(".boutonMenuformes");
  boutonMenuformes.addEventListener("click", function(){document.querySelector(".form").submit();})
  var formes1 = document.getElementById("divFormes1");
  formes1.addEventListener("click", choixFormesCarre);
  var formes2 = document.getElementById("divFormes2");
  formes2.addEventListener("click", choixFormesRond);
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
    // Verif si le joueur poséde la forme rond
    var inputFormeRond = document.getElementById("formecouleur");
    var checkFormeRond = inputFormeRond.value;
    var inputDePointU = document.getElementById("point");
    var nombreDePointU = inputDePointU.value;
    var inputChoixForme = document.getElementById("choixformecouleur");
    var choixformesU = inputChoixForme.value;
    if (checkFormeRond == "rond"){
      pointNCouleur2.textContent = "obtenu";
    }
    // Récupère le nombre de point de l'utilisateur
    // Affiche le nombre de point de l'utilisateur
    var nombreDePoint = document.createElement("label");
    divGlobal[0].appendChild(nombreDePoint);
    nombreDePoint.textContent = nombreDePointU + " point";
    nombreDePoint.id = "nombreDePoint";
    // Vérification de la forme choisi par le joueur et affichage du check suivant la forme sélectionner
    var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
    if (choixformesU == "null" || choixformesU == "carre") {
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
    if (nombreDePointU < 50 && checkFormeRond == "null") {
      // Affiche un cadenas sur la forme rond
      var divFormes2 = document.getElementById("divFormes2");
      var cadenas = new Image();
      cadenas.src = "image/cadenas.png";
      divFormes2.appendChild(cadenas);
      cadenas.style.position = 'absolute';
      cadenas.style.width = '70%';
      cadenas.style.height = '70%';
      // Affiche le nombre de point nécessaire pour avoir la forme rond
      pointNCouleur2.textContent = "50 point";
    }
    else if (checkFormeRond == "null") {
      // Affiche le nombre de point nécessaire pour avoir la forme rond
      pointNCouleur2.textContent = "50 point";
    }
  }
function choixFormesCarre() {
    var inputFormeRond = document.getElementById("formecouleur");
    var checkFormeRond = inputFormeRond.value;
    var inputDePointU = document.getElementById("point");
    var nombreDePointU = inputDePointU.value;
    var inputChoixForme = document.getElementById("choixformecouleur");
    var choixformesU = inputChoixForme.value;
    inputChoixForme.value = "carre";
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
}

function choixFormesRond() {
  console.log("mdr");
    var inputFormeRond = document.getElementById("formecouleur");
    var checkFormeRond = inputFormeRond.value;
    var inputDePointU = document.getElementById("point");
    var nombreDePointU = inputDePointU.value;
    var inputChoixForme = document.getElementById("choixformecouleur");
    var choixformesU = inputChoixForme.value;
    if (checkFormeRond == "null" && nombreDePointU >= 50) {
      console.log("acheté");
      inputFormeRond.value = "rond";
      inputChoixForme.value = "rond";
      nouveauDePointU = nombreDePointU - 50;
      inputDePointU.value = nouveauDePointU;
      var pointNCouleur2 = document.getElementById("pointNCouleur2");
      pointNCouleur2.textContent = "acheté !";
      checkRond();
    }
    else if (checkFormeRond == "rond") {
      console.log("sélectionner");
      inputChoixForme.value = "rond";
      checkRond();
    }
}
function checkRond() {
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




function recuppointbd() {
  var inputpoint = document.getElementById("point");
  pointusers = inputpoint.value;
  console.log(pointusers);
}