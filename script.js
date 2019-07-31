// Tableau couleur
var couleur = ["red","darkorange","yellow","lime","blue","blueviolet","cyan","gold","greenyellow"];
// Nombre partie et score
var partie = 0;
var partieLancement = 0;
var partieStorage = 0;
var score = 0;
var point = 0;
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
  var verifTailleTableau = localStorage.length;
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
  for( var k in localStorage){
    if (typeof localStorage[k] !== 'function' && k != 'length') {
      var pseudo = k;
      var scoreU = JSON.parse(localStorage[k]).scoreUtilisateur;
      var partieU = JSON.parse(localStorage[k]).partieUtilisateur;
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
// Pseudo
function menuEntrerPseudo() {
  removeDivGlobal();
  creationDivGlobal();
  // Titre entrer pseudo
  var formPseudo = document.createElement("form");
  divGlobal[0].appendChild(formPseudo);
  var labelPseudo = document.createElement("label");
  formPseudo.appendChild(labelPseudo);
  labelPseudo.textContent = "Entrer votre pseudo";
  labelPseudo.id = "label";
  // Input entrer pseudo
  var entrerPseudo = document.createElement("input");
  formPseudo.appendChild(entrerPseudo);
  entrerPseudo.id = "entrerPseudo";
  entrerPseudo.value = pseudo;
  entrerPseudo.addEventListener("keypress", enterMenuJeux);
}
function enterMenuJeux() {
  if (event.keyCode == 13) {
    reponseFormulaire();
    removeDivGlobal();
    menuJeux();
  }
}
function reponseFormulaire() {
  pseudo = document.getElementById("entrerPseudo").value;
}
// Menu Jeux
function menuJeux() {
  // Pause/Reset son
  sonOuii.pause();
  sonOuii.currentTime = 0;
  sonLeviosa.pause();
  sonLeviosa.currentTime = 0;
  sonWasted.pause();
  sonWasted.currentTime = 0;
  creationDivGlobal();
  // Titre choix niveaux
  var labelNiveaux = document.createElement("label");
  divGlobal[0].appendChild(labelNiveaux);
  divGlobal[0].id = "globalDivMenuJeux";
  labelNiveaux.textContent = "Choix du niveau";
  labelNiveaux.id = "labelChoixDuNiveaux";
  // Bouton niveaux noob
  var buttonLancement = document.createElement("button");
  divGlobal[0].appendChild(buttonLancement);
  buttonLancement.textContent = "Niveaux noob";
  buttonLancement.onmouseenter = buttonLancementEnter;
  buttonLancement.onmouseleave = buttonLancementSortie;
    function buttonLancementEnter() {
      buttonLancement.textContent = "On cherche la simplicité ?";
    }
    function buttonLancementSortie() {
      buttonLancement.textContent = "Niveaux noob";
    }  
  buttonLancement.addEventListener("click", niveaux1);
  buttonLancement.id ="buttonNiveauxNoob";
  // Bouton niveaux hardcore
  var boutonNiveaux2 = document.createElement("button");
  divGlobal[0].appendChild(boutonNiveaux2);
  boutonNiveaux2.textContent = "Niveaux hardcore";
  boutonNiveaux2.onmouseenter = boutonNiveaux2Enter;
  boutonNiveaux2.onmouseleave = boutonNiveaux2Sortie;
    function boutonNiveaux2Enter() {
      boutonNiveaux2.textContent = "Un peux chaux mais pas trop ?";
    }
    function boutonNiveaux2Sortie() {
      boutonNiveaux2.textContent = "Niveaux hardcore";
    }  
  boutonNiveaux2.addEventListener("click", niveaux2);
  boutonNiveaux2.id = "buttonNiveauxHardcore";
  // Bouton ultraviolence
  var boutonNiveaux3 = document.createElement("button");
  divGlobal[0].appendChild(boutonNiveaux3);
  boutonNiveaux3.textContent = "Niveaux ultraviolence";
  boutonNiveaux3.onmouseenter = boutonNiveaux3Enter;
  boutonNiveaux3.onmouseleave = boutonNiveaux3Sortie;
    function boutonNiveaux3Enter() {
      boutonNiveaux3.textContent = "Chaux bouillant ? Mais pour combien de temps ?";
    }
    function boutonNiveaux3Sortie() {
      boutonNiveaux3.textContent = "Niveaux ultraviolence";
    }  
  boutonNiveaux3.addEventListener("click", niveaux3);
  boutonNiveaux3.id = "buttonNiveauxUltraviolence";
  // Bouton tous les niveaux
  var boutonToutLesNiveaux = document.createElement("button");
  divGlobal[0].appendChild(boutonToutLesNiveaux);
  boutonToutLesNiveaux.textContent = "Tous les niveaux";
  boutonToutLesNiveaux.onmouseenter = boutonToutLesNiveauxEnter;
  boutonToutLesNiveaux.onmouseleave = boutonToutLesNiveauxSortie;
    function boutonToutLesNiveauxEnter() {
      boutonToutLesNiveaux.textContent = "Enflamé ? On verra si tu résiste a aucune pause.";
    }
    function boutonToutLesNiveauxSortie() {
      boutonToutLesNiveaux.textContent = "Tout les niveaux";
    }  
  boutonToutLesNiveaux.addEventListener("click", toutLesNiveaux);
  boutonToutLesNiveaux.id = "buttonToutLesNiveaux";
  // Titre options
  var labelOptions = document.createElement("label");
  divGlobal[0].appendChild(labelOptions);
  labelOptions.textContent = "Options";
  labelOptions.id = "labelOptionsMenuJeux";
  // Bouton entrer pseudo
  boutonEnterPseudo();
  var buttonMenuEntrerPseudo = document.getElementsByClassName("buttonMenuEntrerPseudo");
  buttonMenuEntrerPseudo[0].id = "buttonMenuEntrerPseudoMenuJeux";
  // Bouton accueil
  boutonAccueil();
  var buttonAccueil = document.getElementsByClassName("buttonAccueil");
  buttonAccueil[0].id = "buttonAccueilMenuJeux";
  // Titre options jeux
  var labelOptionsJeux = document.createElement("label");
  divGlobal[0].appendChild(labelOptionsJeux);
  labelOptionsJeux.textContent = "Options jeux";
  labelOptionsJeux.id = "labelOptionsJeuxMenuJeux";
  // Bouton choix formes
  boutonChoixFormes();
  var buttonMenuChoixFormes = document.getElementsByClassName("buttonMenuChoixFormes");
  buttonMenuChoixFormes[0].id = "buttonChoixFormesMenuJeux";
  // Bouton choix son
  boutonChoixSon();
  var buttonMenuSon = document.getElementsByClassName("buttonMenuSon");
  buttonMenuSon[0].id = "buttonMenuSonMenuJeux";
}
// Options jeux
function menuChoixSon() {
}
function menuChoixFormes() {
  removeDivGlobal();
  creationDivGlobal();
  divGlobal[0].id = "globalDivMenuFormes"
  // Titre choix formes
  var labelFormes = document.createElement("label");
  divGlobal[0].appendChild(labelFormes);
  labelFormes.textContent = "Choix formes";
  labelFormes.id = "labelFormes";
  // Boutton choix formes couleur
  var boutonMenuFormesCouleur = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuFormesCouleur);
  boutonMenuFormesCouleur.textContent = "Formes couleur";
  boutonMenuFormesCouleur.addEventListener("click", ChangementFormesCouleur);
  boutonMenuFormesCouleur.id = "boutonMenuFormesCouleur";
  // Boutton choix formes noir
  var boutonMenuFormesNoir = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuFormesNoir);
  boutonMenuFormesNoir.textContent = "Formes noir";
  boutonMenuFormesNoir.addEventListener("click", ChangementFormesNoir);
  boutonMenuFormesNoir.id = "boutonMenuFormesNoir";
  // Boutton choix formes bonus
  var boutonMenuFormesBonus = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuFormesBonus);
  boutonMenuFormesBonus.textContent = "Formes bonus";
  boutonMenuFormesBonus.addEventListener("click", ChangementFormesBonus);
  boutonMenuFormesBonus.id = "boutonMenuFormesBonus";
  // Label ou retour 
  var labelOuRetour = document.createElement("label");
  divGlobal[0].appendChild(labelOuRetour);
  labelOuRetour.textContent = "OU";
  labelOuRetour.id = "LabelOuRetourMenuFormes";
  // Bouton menu jeux
  boutonMenuJeux();
  boutonMenuJeuxCN[0].id = "boutonMenuJeuxMenuFormes";
}
// Menu changement forme
function ChangementFormesCouleur() {
  removeDivGlobal();
  creationDivGlobal();
  divGlobal[0].id = "globalDivMenuFormesC";
  // Titre choix formes couleur
  var labelChoixFormes = document.createElement("label");
  divGlobal[0].appendChild(labelChoixFormes);
  labelChoixFormes.textContent = "Choix formes couleur";
  labelChoixFormes.id = "labelChoixFormesCouleur";
  // Div forme 1 (Carre)
  var formes1 = document.createElement("div");
  divGlobal[0].appendChild(formes1);
  formes1.id = "divFormes1";
  formes1.addEventListener("click", choixFormesCarre);
  // Forme carre
  var formesChoix1 = document.createElement("div");
  formes1.appendChild(formesChoix1);
  formesChoix1.id = "formesCouleur1";
  var pointNCouleur1 = document.createElement("label");
  formes1.appendChild(pointNCouleur1);
  // Affiche le nombre de point nécessaire
  pointNCouleur1.id = "pointNCouleur1";
  pointNCouleur1.textContent = "gratuit";
  // Div forme 2 (Rond)
  var formes2 = document.createElement("div");
  divGlobal[0].appendChild(formes2);
  formes2.id = "divFormes2";
  var formesChoix2 = document.createElement("div");
  formes2.appendChild(formesChoix2);
  // Forme rond
  formesChoix2.id = "formesCouleur2";
  formes2.addEventListener("click", choixFormesRond);
  var pointNCouleur2 = document.createElement("label");
  formes2.appendChild(pointNCouleur2);
  // Id affichage point nécessaire
  pointNCouleur2.id = "pointNCouleur2";
  // Bouton retour
  boutonMenuFormes();
  // Verification données du joueur, si null affiche une page de base
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur == null) {
    // Affiche un check sur la forme carre
    var divFormes = document.getElementById("divFormes1");
    var imgCheck = new Image();
    imgCheck.src = "image/check.png";
    divFormes.appendChild(imgCheck);
    imgCheck.style.position = 'absolute';
    imgCheck.style.width = '100%';
    imgCheck.style.height = '80%';
    imgCheck.id = "check1";
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
  else {
    // Verif si le joueur poséde la forme rond
    var checkFormeRond = pseudoUtilisateur.articleFormesCouleur;
    if (checkFormeRond == "Rond"){
      pointNCouleur2.textContent = "obtenu";
    }
    // Récupère le nombre de point de l'utilisateur
    var nombreDePointU = pseudoUtilisateur.pointUtilisateur;
    // Affiche le nombre de point de l'utilisateur
    var nombreDePoint = document.createElement("label");
    divGlobal[0].appendChild(nombreDePoint);
    nombreDePoint.textContent = nombreDePointU + " point";
    nombreDePoint.id = "nombreDePoint";
    // Vérification de la forme choisi par le joueur et affichage du check suivant la forme sélectionner
    var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
    var choixformesU = pseudoUtilisateur.choixFormesCouleur;
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
    if (nombreDePointU < 50 && checkFormeRond == null) {
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
    else if (checkFormeRond == null) {
      // Affiche le nombre de point nécessaire pour avoir la forme rond
      pointNCouleur2.textContent = "50 point";
    }
  }
}
function choixFormesCarre() {
  // Verification données du joueur, pour éviter les erreurs
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur != null) {
    var checkRond = pseudoUtilisateur.articleFormesCouleur;
    var Score = pseudoUtilisateur.scoreUtilisateur;
    var Partie = pseudoUtilisateur.partieUtilisateur;
    var Point = pseudoUtilisateur.pointUtilisateur;
    var FormeNoir = pseudoUtilisateur.choixFormesNoir;
    var aFormeNoir = pseudoUtilisateur.articleFormesNoir;
    var FormeBonus = pseudoUtilisateur.choixFormesBonus;
    var aFormeBonus = pseudoUtilisateur.articleFormesBonus;
    // Verif si le joueur posséde ou pas la forme rond, et applique le choix de la forme carre
    if (checkRond == "Rond") {
      var infoUtilisateurN ={
      scoreUtilisateur: Score,
      partieUtilisateur: Partie,
      pointUtilisateur: Point,
      choixFormesCouleur: "carre",
      articleFormesCouleur: "Rond",
      choixFormesNoir: FormeNoir,
      articleFormesNoir: aFormeNoir,      
      choixFormesBonus: FormeBonus,
      articleFormesBonus: aFormeBonus,
    }
    var infoN = JSON.stringify(infoUtilisateurN);
    localStorage.setItem(pseudo, infoN);
    }
    else if (checkRond == null) {
      var infoUtilisateurN ={
      scoreUtilisateur: Score,
      partieUtilisateur: Partie,
      pointUtilisateur: Point,
      choixFormesCouleur: "carre",
      articleFormesCouleur: null,
      choixFormesNoir: FormeNoir,
      articleFormesNoir: aFormeNoir,  
      choixFormesBonus: FormeBonus,
      articleFormesBonus: aFormeBonus,
    }
    var infoN = JSON.stringify(infoUtilisateurN);
    localStorage.setItem(pseudo, infoN);
    }
  } 
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
  // Verification données du joueur, pour éviter les erreurs
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur != null) {
    var verifCheck = document.getElementById("check2");
    // Verif si le check est déjà afficher et l'affiche quand la forme rond est sélectionner
    if (verifCheck < 1) {
      var Score = pseudoUtilisateur.scoreUtilisateur;
      var Partie = pseudoUtilisateur.partieUtilisateur;
      var ancienPoint = pseudoUtilisateur.pointUtilisateur;
      var articleFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
      var FormeNoir = pseudoUtilisateur.choixFormesNoir;
      var aFormeNoir = pseudoUtilisateur.articleFormesNoir;
      var FormeBonus = pseudoUtilisateur.choixFormesBonus;
      var aFormeBonus = pseudoUtilisateur.articleFormesBonus;
      var divFormes = document.getElementById("divFormes2");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      imgCheck.id = "check2";
      var imgCheck1 = document.getElementById("check1");
      // Verifie si le joueur posséde la forme rond, si ce n'est pas le cas la forme est acheté. Sinon la forme est sélectionner
      if (articleFormesCouleur == null && ancienPoint >= 50) {
      var pointNCouleur2 = document.getElementById("pointNCouleur2");
      pointNCouleur2.textContent = "acheté !";
      var nouveauPoint = parseInt(ancienPoint - 50); 
      var infoUtilisateurBase ={
        scoreUtilisateur: Score,
        partieUtilisateur: Partie,
        pointUtilisateur: nouveauPoint,
        choixFormesCouleur: "Rond",
        articleFormesCouleur: "Rond",
        choixFormesNoir: FormeNoir,
        articleFormesNoir: aFormeNoir,  
        choixFormesBonus: FormeBonus,
        articleFormesBonus: aFormeBonus,
      }
      var infoBase = JSON.stringify(infoUtilisateurBase);
      localStorage.setItem(pseudo, infoBase);
      var nombreDePoint = document.getElementById("nombreDePoint");
      nombreDePoint.textContent = nouveauPoint + " point";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      check1.remove();
      }
      // sélectionne la forme rond
      else if (articleFormesCouleur == "Rond"){
        var infoUtilisateurN ={
        scoreUtilisateur: Score,
        partieUtilisateur: Partie,
        pointUtilisateur: ancienPoint,
        choixFormesCouleur: "Rond",
        articleFormesCouleur: "Rond",
        choixFormesNoir: FormeNoir,
        articleFormesNoir: aFormeNoir,  
        choixFormesBonus: FormeBonus,
        articleFormesBonus: aFormeBonus,
      }
      var infoN = JSON.stringify(infoUtilisateurN);
      localStorage.setItem(pseudo, infoN);
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      check1.remove();
      }
    }
  }
}
function ChangementFormesNoir() {
  removeDivGlobal();
  creationDivGlobal();
  divGlobal[0].id = "globalDivMenuFormesC";
  // Titre choix formes couleur
  var labelChoixFormes = document.createElement("label");
  divGlobal[0].appendChild(labelChoixFormes);
  labelChoixFormes.textContent = "Choix formes noir";
  labelChoixFormes.id = "labelChoixFormesCouleur";
  // Div forme 1 (noir)
  var formes1 = document.createElement("div");
  divGlobal[0].appendChild(formes1);
  formes1.id = "divFormes1";
  formes1.addEventListener("click", choixFormesNoir);
  // Forme noir
  var formesChoix1 = document.createElement("div");
  formes1.appendChild(formesChoix1);
  formesChoix1.id = "formesCouleurNoir";
  var pointNCouleur1 = document.createElement("label");
  formes1.appendChild(pointNCouleur1);
  // Affiche le nombre de point nécessaire
  pointNCouleur1.id = "pointNCouleur1";
  pointNCouleur1.textContent = "gratuit";
  // Div forme 2 (Tete de mort)
  var formes2 = document.createElement("div");
  divGlobal[0].appendChild(formes2);
  formes2.id = "divFormes2";
  formes2.addEventListener("click", choixFormesTeteDeMort);
  // Forme Tete de mort
  var visage = document.createElement("div");
  formes2.appendChild(visage);
  visage.className = "visageTM";
  var tete = document.createElement("div");
  visage.appendChild(tete);
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
  // Id affichage point nécessaire
  var pointNCouleur2 = document.createElement("label");
  formes2.appendChild(pointNCouleur2);
  pointNCouleur2.id = "pointNCouleur2";
  // Bouton retour
  boutonMenuFormes();
  // Verification données du joueur, si null affiche une page de base
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur == null) {
    // Affiche un check sur la forme noir
    var divFormes = document.getElementById("divFormes1");
    var imgCheck = new Image();
    imgCheck.src = "image/check.png";
    divFormes.appendChild(imgCheck);
    imgCheck.style.position = 'absolute';
    imgCheck.style.width = '100%';
    imgCheck.style.height = '80%';
    imgCheck.id = "check1";
    // Affiche un cadenas sur la forme tete de mort
    var divFormes2 = document.getElementById("divFormes2");
    var cadenas = new Image();
    cadenas.src = "image/cadenas.png";
    divFormes2.appendChild(cadenas);
    cadenas.style.position = 'absolute';
    cadenas.style.width = '70%';
    cadenas.style.height = '70%';
    // Affiche le nombre de point nécessaire pour avoir la forme tete de mort
    pointNCouleur2.textContent = "250 point";
  }
  else {
    // Verif si le joueur poséde la forme tete de mort
    var checkFormeTeteDeMort = pseudoUtilisateur.articleFormesNoir;
    if (checkFormeTeteDeMort == "TeteDeMort"){
      pointNCouleur2.textContent = "obtenu";
    }
    // Récupère le nombre de point de l'utilisateur
    var nombreDePointU = pseudoUtilisateur.pointUtilisateur;
    // Affiche le nombre de point de l'utilisateur
    var nombreDePoint = document.createElement("label");
    divGlobal[0].appendChild(nombreDePoint);
    nombreDePoint.textContent = nombreDePointU + " point";
    nombreDePoint.id = "nombreDePoint";
    // Vérification de la forme choisi par le joueur et affichage du check suivant la forme sélectionner
    var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
    var choixformesU = pseudoUtilisateur.choixFormesNoir;
    if (choixformesU == "null" || choixformesU == "noir") {
      // Affiche un check sur la forme noir
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
      // Affiche un check sur la forme tete de mort
      var divFormes = document.getElementById("divFormes2");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      imgCheck.id = "check2";
    }
    // Verifi si le joueur posséde la forme tete de mort
    if (nombreDePointU < 250 && checkFormeTeteDeMort == null) {
      // Affiche un cadenas sur la forme tete de mort
      var divFormes2 = document.getElementById("divFormes2");
      var cadenas = new Image();
      cadenas.src = "image/cadenas.png";
      divFormes2.appendChild(cadenas);
      cadenas.style.position = 'absolute';
      cadenas.style.width = '70%';
      cadenas.style.height = '70%';
      // Affiche le nombre de point nécessaire pour avoir la forme tete de mort
      pointNCouleur2.textContent = "250 point";
    }
    else if (checkFormeTeteDeMort == null) {
      // Affiche le nombre de point nécessaire pour avoir la forme Tete de mort
      pointNCouleur2.textContent = "250 point";
    }
  }
}
function choixFormesNoir() {
  // Verification données du joueur, pour éviter les erreurs
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur != null) {
    var checkTeteDeMort = pseudoUtilisateur.articleFormesNoir;
    var Score = pseudoUtilisateur.scoreUtilisateur;
    var Partie = pseudoUtilisateur.partieUtilisateur;
    var Point = pseudoUtilisateur.pointUtilisateur;
    var FormesCouleur = pseudoUtilisateur.choixFormesCouleur;
    var aFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
    var FormeBonus = pseudoUtilisateur.choixFormesBonus;
    var aFormeBonus = pseudoUtilisateur.articleFormesBonus;
    // Verif si le joueur posséde ou pas la forme tete de mort, et applique le choix de la forme carre
    if (checkTeteDeMort == "TeteDeMort") {
      var infoUtilisateurN ={
      scoreUtilisateur: Score,
      partieUtilisateur: Partie,
      pointUtilisateur: Point,
      choixFormesCouleur: FormesCouleur,
      articleFormesCouleur: aFormesCouleur,
      choixFormesNoir: "noir",
      articleFormesNoir: "TeteDeMort",      
      choixFormesBonus: FormeBonus,
      articleFormesBonus: aFormeBonus,
    }
    var infoN = JSON.stringify(infoUtilisateurN);
    localStorage.setItem(pseudo, infoN);
    }
    else if (checkTeteDeMort == null) {
      var infoUtilisateurN ={
      scoreUtilisateur: Score,
      partieUtilisateur: Partie,
      pointUtilisateur: Point,
      choixFormesCouleur: FormesCouleur,
      articleFormesCouleur: aFormesCouleur,
      choixFormesNoir: "noir",
      articleFormesNoir: null,  
      choixFormesBonus: FormeBonus,
      articleFormesBonus: aFormeBonus,
    }
    var infoN = JSON.stringify(infoUtilisateurN);
    localStorage.setItem(pseudo, infoN);
    }
  } 
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
function choixFormesTeteDeMort() {
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  var verifCheck = document.getElementById("check2");
  if (pseudoUtilisateur != null) {
    if (verifCheck < 1) {
      var Score = pseudoUtilisateur.scoreUtilisateur;
      var Partie = pseudoUtilisateur.partieUtilisateur;
      var ancienPoint = pseudoUtilisateur.pointUtilisateur;
      var articleFormesNoir = pseudoUtilisateur.articleFormesNoir;
      var articleFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
      var FormesCouleur = pseudoUtilisateur.choixFormesCouleur;
      var aFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
      var FormeBonus = pseudoUtilisateur.choixFormesBonus;
      var aFormeBonus = pseudoUtilisateur.articleFormesBonus;
      var divFormes = document.getElementById("divFormes2");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      imgCheck.id = "check2";
      var imgCheck1 = document.getElementById("check1");
      // Verifie si le joueur posséde la forme Tete de mort, si ce n'est pas le cas la forme est acheté. Sinon la forme est sélectionner
      if (articleFormesNoir == null && ancienPoint >= 250) {
      var pointNCouleur2 = document.getElementById("pointNCouleur2");
      pointNCouleur2.textContent = "acheté !";
      var nouveauPoint = parseInt(ancienPoint - 250); 
      var infoUtilisateurBase ={
        scoreUtilisateur: Score,
        partieUtilisateur: Partie,
        pointUtilisateur: nouveauPoint,
        choixFormesCouleur: FormesCouleur,
        articleFormesCouleur: aFormesCouleur,
        choixFormesNoir: "TeteDeMort",
        articleFormesNoir: "TeteDeMort",  
        choixFormesBonus: FormeBonus,
        articleFormesBonus: aFormeBonus,
      }
      var infoBase = JSON.stringify(infoUtilisateurBase);
      localStorage.setItem(pseudo, infoBase);
      var nombreDePoint = document.getElementById("nombreDePoint");
      nombreDePoint.textContent = nouveauPoint + " point";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      check1.remove();
      }
      // sélectionne la forme Tete de mort
      else if (articleFormesNoir == "TeteDeMort"){
        var infoUtilisateurN ={
        scoreUtilisateur: Score,
        partieUtilisateur: Partie,
        pointUtilisateur: ancienPoint,
        choixFormesCouleur: FormesCouleur,
        articleFormesCouleur: aFormesCouleur,
        choixFormesNoir: "TeteDeMort",
        articleFormesNoir: "TeteDeMort",  
        choixFormesBonus: FormeBonus,
        articleFormesBonus: aFormeBonus,
      }
      var infoN = JSON.stringify(infoUtilisateurN);
      localStorage.setItem(pseudo, infoN);
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      check1.remove();
      }
    }
  }
}
function ChangementFormesBonus() {
  removeDivGlobal();
  creationDivGlobal();
  // Titre choix formes bonus
  divGlobal[0].id = "globalDivMenuFormesC";
  var labelChoixFormes = document.createElement("label");
  divGlobal[0].appendChild(labelChoixFormes);
  labelChoixFormes.textContent = "Choix formes bonus";
  labelChoixFormes.id = "labelChoixFormesCouleur";
  // Div forme 1 (Christophe)
  var formes1 = document.createElement("div");
  formes1.addEventListener("click", choixFormesChristophe);
  divGlobal[0].appendChild(formes1);
  formes1.id = "divFormes1";
  // Forme Christophe
  var cheveuxC = document.createElement("div");
  formes1.appendChild(cheveuxC);
  cheveuxC.className = "cheveuxCF";
  var teteC = document.createElement("div");
  formes1.appendChild(teteC);
  teteC.className = "teteCF";
  var yeux1C = document.createElement("div");
  teteC.appendChild(yeux1C);
  yeux1C.className = "yeux1CF";
  var yeux2C = document.createElement("div");
  teteC.appendChild(yeux2C);
  yeux2C.className = "yeux2CF";
  var boucheC = document.createElement("div");
  teteC.appendChild(boucheC);
  boucheC.className = "boucheCF";
  // Affiche le nombre de point nécessaire
  var pointNCouleur1 = document.createElement("label");
  formes1.appendChild(pointNCouleur1);
  pointNCouleur1.id = "pointNCouleur1";
  pointNCouleur1.textContent = "gratuit";
  // Div forme 2 (Aurelie)
  var formes2 = document.createElement("div");
  divGlobal[0].appendChild(formes2);
  formes2.id = "divFormes2";
  formes2.addEventListener("click", choixFormesAurelie);
  // Forme Aurelie
  var tete = document.createElement("div");
  formes2.appendChild(tete);
  tete.className = "teteF";
  var yeux1 = document.createElement("div");
  tete.appendChild(yeux1);
  yeux1.className = "yeux1F";
  var yeux2 = document.createElement("div");
  tete.appendChild(yeux2);
  yeux2.className = "yeux2F";
  var bouche = document.createElement("div");
  tete.appendChild(bouche);
  bouche.className = "boucheF";
  var cheveux = document.createElement("div");
  cheveux.className = "cheveuxF";
  formes2.appendChild(cheveux);
  var pointNCouleur2 = document.createElement("label");
  formes2.appendChild(pointNCouleur2);
  // Id affichage point nécessaire
  pointNCouleur2.id = "pointNCouleur2";
  // Bouton retour
  boutonMenuFormes();
  // Verification données du joueur, si null affiche une page de base
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur == null) {
    // Affiche un check sur la forme Christophe
    var divFormes = document.getElementById("divFormes1");
    var imgCheck = new Image();
    imgCheck.src = "image/check.png";
    divFormes.appendChild(imgCheck);
    imgCheck.style.position = 'absolute';
    imgCheck.style.width = '100%';
    imgCheck.style.height = '80%';
    imgCheck.id = "check1";
    // Affiche un cadenas sur la forme Aurelie
    var divFormes2 = document.getElementById("divFormes2");
    var cadenas = new Image();
    cadenas.src = "image/cadenas.png";
    divFormes2.appendChild(cadenas);
    cadenas.style.position = 'absolute';
    cadenas.style.width = '70%';
    cadenas.style.height = '70%';
    // Affiche le nombre de point nécessaire pour avoir la forme Aurelie
    pointNCouleur2.textContent = "500 point";
  }
  else {
    // Verif si le joueur poséde la forme Aurelie
    var checkFormeAurelie = pseudoUtilisateur.articleFormesBonus;
    if (checkFormeAurelie == "Aurelie"){
      pointNCouleur2.textContent = "obtenu";
    }
    // Récupère le nombre de point de l'utilisateur
    var nombreDePointU = pseudoUtilisateur.pointUtilisateur;
    // Affiche le nombre de point de l'utilisateur
    var nombreDePoint = document.createElement("label");
    divGlobal[0].appendChild(nombreDePoint);
    nombreDePoint.textContent = nombreDePointU + " point";
    nombreDePoint.id = "nombreDePoint";
    // Vérification de la forme choisi par le joueur et affichage du check suivant la forme sélectionner
    var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
    var choixformesU = pseudoUtilisateur.choixFormesBonus;
    if (choixformesU == "null" || choixformesU == "Christophe") {
      // Affiche un check sur la forme Christophe
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
      // Affiche un check sur la forme Aurelie
      var divFormes = document.getElementById("divFormes2");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      imgCheck.id = "check2";
    }
    // Verifi si le joueur posséde la forme Aurelie
    if (nombreDePointU < 500 && checkFormeAurelie == null) {
      // Affiche un cadenas sur la forme Aurelie
      var divFormes2 = document.getElementById("divFormes2");
      var cadenas = new Image();
      cadenas.src = "image/cadenas.png";
      divFormes2.appendChild(cadenas);
      cadenas.style.position = 'absolute';
      cadenas.style.width = '70%';
      cadenas.style.height = '70%';
      // Affiche le nombre de point nécessaire pour avoir la forme Aurelie
      pointNCouleur2.textContent = "500 point";
    }
    else if (checkFormeAurelie == null) {
      // Affiche le nombre de point nécessaire pour avoir la forme Aurelie
      pointNCouleur2.textContent = "500 point";
    }
  }
}
function choixFormesChristophe() {
  // Verification données du joueur, pour éviter les erreurs
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur != null) {
    var checkAurelie = pseudoUtilisateur.articleFormesBonus;
    var Score = pseudoUtilisateur.scoreUtilisateur;
    var Partie = pseudoUtilisateur.partieUtilisateur;
    var Point = pseudoUtilisateur.pointUtilisateur;
    var FormesCouleur = pseudoUtilisateur.choixFormesCouleur;
    var aFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
    var FormeNoir = pseudoUtilisateur.choixFormesNoir;
    var aFormeNoir = pseudoUtilisateur.articleFormesNoir;
    // Verif si le joueur posséde ou pas la forme Aurelie, et applique le choix de la forme Christophe
    if (checkAurelie == "Aurelie") {
      var infoUtilisateurN ={
      scoreUtilisateur: Score,
      partieUtilisateur: Partie,
      pointUtilisateur: Point,
      choixFormesCouleur: FormesCouleur,
      articleFormesCouleur: aFormesCouleur,
      choixFormesNoir: FormeNoir,
      articleFormesNoir: aFormeNoir,  
      choixFormesBonus: "Christophe",
      articleFormesBonus : "Aurelie",
    }
    var infoN = JSON.stringify(infoUtilisateurN);
    localStorage.setItem(pseudo, infoN);
    }
    else if (checkAurelie == null) {
      var infoUtilisateurN ={
      scoreUtilisateur: Score,
      partieUtilisateur: Partie,
      pointUtilisateur: Point,
      choixFormesCouleur: FormesCouleur,
      articleFormesCouleur: aFormesCouleur,
      choixFormesNoir: FormeNoir,
      articleFormesNoir: aFormeNoir,  
      choixFormesBonus: "Christophe",
      articleFormesBonus : null,
    }
    var infoN = JSON.stringify(infoUtilisateurN);
    localStorage.setItem(pseudo, infoN);
    }
  }   
  // Verif si le check est déjà afficher et l'affiche quand la forme Christophe est sélectionner
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
function choixFormesAurelie() {
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  var verifCheck = document.getElementById("check2");
  if (pseudoUtilisateur != null) {
    if (verifCheck < 1) {
      var Score = pseudoUtilisateur.scoreUtilisateur;
      var Partie = pseudoUtilisateur.partieUtilisateur;
      var ancienPoint = pseudoUtilisateur.pointUtilisateur;
      var articleFormesBonus = pseudoUtilisateur.articleFormesBonus;
      var articleFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
      var FormesCouleur = pseudoUtilisateur.choixFormesCouleur;
      var aFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
      var FormeNoir = pseudoUtilisateur.choixFormesNoir;
      var aFormeNoir = pseudoUtilisateur.articleFormesNoir;
      var divFormes = document.getElementById("divFormes2");
      var imgCheck = new Image();
      imgCheck.src = "image/check.png";
      imgCheck.id = "check2";
      var imgCheck1 = document.getElementById("check1");
      // Verifie si le joueur posséde la forme Aurelie, si ce n'est pas le cas la forme est acheté. Sinon la forme est sélectionner
      if (articleFormesBonus == null && ancienPoint >= 500) {
      var pointNCouleur2 = document.getElementById("pointNCouleur2");
      pointNCouleur2.textContent = "acheté !";
      var nouveauPoint = parseInt(ancienPoint - 500); 
      var infoUtilisateurBase ={
        scoreUtilisateur: Score,
        partieUtilisateur: Partie,
        pointUtilisateur: nouveauPoint,
        choixFormesCouleur: FormesCouleur,
        articleFormesCouleur: aFormesCouleur,
        choixFormesNoir: FormeNoir,
        articleFormesNoir: aFormeNoir,  
        choixFormesBonus: "Aurelie",
        articleFormesBonus : "Aurelie",
      }
      var infoBase = JSON.stringify(infoUtilisateurBase);
      localStorage.setItem(pseudo, infoBase);
      var nombreDePoint = document.getElementById("nombreDePoint");
      nombreDePoint.textContent = nouveauPoint + " point";
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      check1.remove();
      }
      // sélectionne la forme Aurelie
      else if (articleFormesBonus == "Aurelie"){
        var infoUtilisateurN ={
        scoreUtilisateur: Score,
        partieUtilisateur: Partie,
        pointUtilisateur: ancienPoint,
        choixFormesCouleur: FormesCouleur,
        articleFormesCouleur: aFormesCouleur,
        choixFormesNoir: FormeNoir,
        articleFormesNoir: aFormeNoir,  
        choixFormesBonus: "Aurelie",
        articleFormesBonus : "Aurelie",
      }
      var infoN = JSON.stringify(infoUtilisateurN);
      localStorage.setItem(pseudo, infoN);
      divFormes.appendChild(imgCheck);
      imgCheck.style.position = 'absolute';
      imgCheck.style.width = '100%';
      imgCheck.style.height = '80%';
      check1.remove();
      }
    }
  }
}

// Bouton menu
function boutonScoreEtPartieAccueil() {
  // Bouton score et partie via accueil
  var bouton = document.createElement("button");
  divGlobal[0].appendChild(bouton);
  bouton.id = "boutonScoreEtPartie";
  bouton.textContent = "Scores et nombre de partie jouer";
  bouton.onmouseenter = boutonEnter;
  bouton.onmouseleave = boutonSortie;
  function boutonEnter() {
    bouton.textContent = "Tes sur ? Tu risque de le regretter. Mon score est gros... A quoi tu pensé ? Pervers(e) !";
  }
  function boutonSortie() {
    bouton.textContent = "Scores et nombre de partie jouer";
  } 
  bouton.addEventListener("click", tableauScoreEtPartieGlobalAccueil);
}
function boutonScoreEtPartieJeux() {
  // Bouton score et partie via jeux
  var bouton = document.createElement("button");
  divGlobal[0].appendChild(bouton);
  bouton.id = "boutonScoreEtPartie";
  bouton.textContent = "Scores et nombre de partie jouer";
  bouton.onmouseenter = boutonEnter;
  bouton.onmouseleave = boutonSortie;
  function boutonEnter() {
    bouton.textContent = "Tes sur ? Tu risque de le regretter. Mon score est gros... A quoi tu pensé ? Pervers(e) !";
  }
  function boutonSortie() {
    bouton.textContent = "Scores et nombre de partie jouer";
  } 
  bouton.addEventListener("click", tableauScoreEtPartieGlobalJeux);
}
function boutonAccueil() {
  var boutonAccueil = document.createElement("button");
  divGlobal[0].appendChild(boutonAccueil);
  boutonAccueil.textContent = "Accueil";
  boutonAccueil.addEventListener("click", removeDivGlobal);
  boutonAccueil.addEventListener("click", accueil);
  boutonAccueil.className = "buttonAccueil";
}
function boutonMenuJeux() {
  var boutonMenuJeux = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuJeux);
  boutonMenuJeux.textContent = "Menu jeux";
  boutonMenuJeux.addEventListener("click", removeDivGlobal);
  boutonMenuJeux.addEventListener("click", menuJeux);
  boutonMenuJeux.className = "boutonMenuJeuxCN";
}
function boutonEnterPseudo() {
  var boutonMenuEnterPseudo = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuEnterPseudo);
  boutonMenuEnterPseudo.textContent = "Changer pseudo";
  boutonMenuEnterPseudo.addEventListener("click", menuEntrerPseudo);
  boutonMenuEnterPseudo.className ="buttonMenuEntrerPseudo";
}
function boutonChoixFormes(){
  var boutonChoixFormes = document.createElement("button");
  divGlobal[0].appendChild(boutonChoixFormes);
  boutonChoixFormes.textContent = "Changer de formes";
  boutonChoixFormes.addEventListener("click", menuChoixFormes);
  boutonChoixFormes.className = "buttonMenuChoixFormes";
}
function boutonChoixSon() {
  var boutonChoixSon = document.createElement("button");
  divGlobal[0].appendChild(boutonChoixSon);
  boutonChoixSon.textContent = "Changer de sons";
  boutonChoixSon.addEventListener("click", menuChoixSon);
  boutonChoixSon.onmouseenter = boutonChoixSonEnter;
  boutonChoixSon.onmouseleave = boutonChoixSonSortie;
  function boutonChoixSonEnter() {
    boutonChoixSon.textContent = "Un jour peut-être";
  }
  function boutonChoixSonSortie() {
    boutonChoixSon.textContent = "Changer de sons";
  } 
  boutonChoixSon.className = "buttonMenuSon";
}
function boutonMenuFormes() {
  var boutonMenuformes = document.createElement("button");
  divGlobal[0].appendChild(boutonMenuformes);
  boutonMenuformes.textContent = "Retour";
  boutonMenuformes.addEventListener("click", menuChoixFormes);
  boutonMenuformes.className = "boutonMenuformes";
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
  removeDivGlobal();
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
  // Verification données du joueur
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur != null) {
    // Verification choix de la forme
    var FormesCouleur = pseudoUtilisateur.choixFormesCouleur;
    var FormesNoir = pseudoUtilisateur.choixFormesNoir;
  }
  // Création formes de couleur
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
    if (FormesCouleur == "Rond") {
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
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  if (pseudoUtilisateur != null) {
    var FormesBonus = pseudoUtilisateur.choixFormesBonus;
  }
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
  // changement curseur 
  document.body.style.cursor = "default";
  // Verification des données du joueur
  var pseudoUtilisateur = JSON.parse(localStorage.getItem(pseudo));
  // Création du tableau d'information si nouveau joueur (Et sauvegarde des scores, point, nombre de partie joué)
  if (pseudoUtilisateur == null) {
    var infoUtilisateur ={
      scoreUtilisateur: score,
      partieUtilisateur: partieStorage,
      pointUtilisateur: point,
      choixFormesCouleur: "carre",
      articleFormesCouleur: null,
      choixFormesNoir: "noir",
      articleFormesNoir: null,
      choixFormesBonus: "Christophe",
      articleFormesBonus : null,
    }
    var infoU = JSON.stringify(infoUtilisateur);
    localStorage.setItem(pseudo, infoU);
  }
  // Sauvegarde des informations si ancien joueur (Scores, point, nombre de partie joué)
  else {
  var ancienScore = pseudoUtilisateur.scoreUtilisateur;
  var ancienPartie = pseudoUtilisateur.partieUtilisateur;
  var ancienPoint = pseudoUtilisateur.pointUtilisateur;
  var FormesCouleur = pseudoUtilisateur.choixFormesCouleur;
  var aFormesCouleur = pseudoUtilisateur.articleFormesCouleur;
  var FormesNoir = pseudoUtilisateur.choixFormesNoir;
  var aFormesNoir = pseudoUtilisateur.articleFormesNoir;  
  var FormesBonus = pseudoUtilisateur.choixFormesBonus;
  var aFormesBonus = pseudoUtilisateur.articleFormesBonus;
  var nouveauScore = ancienScore + score;
  var nouveauPartie = ancienPartie + partieStorage;
  var nouveauPoint = ancienPoint + point;
  var infoUtilisateurN ={
    scoreUtilisateur: nouveauScore,
    partieUtilisateur: nouveauPartie,
    pointUtilisateur: nouveauPoint,
    choixFormesCouleur: FormesCouleur,
    articleFormesCouleur: aFormesCouleur,
    choixFormesNoir: FormesNoir,
    articleFormesNoir: aFormesNoir,
    choixFormesBonus: FormesBonus,
    articleFormesBonus : aFormesBonus,
  }
  var infoUN = JSON.stringify(infoUtilisateurN);
  localStorage.setItem(pseudo, infoUN);
  }
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
  var titreWin = document.createElement("h1");
  divGlobal[0].appendChild(titreWin);
  titreWin.id = "winFin";
  titreWin.textContent = "You Win ! Votre temps est de " + timer + " seconde";
  boutonScoreEtPartieJeux();
  boutonMenuJeux();
}
// Titre loose
function titreLoose() {
  sonWasted.play();
  var titreLoose = document.createElement("h1");
  divGlobal[0].appendChild(titreLoose);
  titreLoose.id = "loose";
  titreLoose.textContent = "You lose ! Votre score est de " + score;
  boutonScoreEtPartieJeux();
  boutonMenuJeux();
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

