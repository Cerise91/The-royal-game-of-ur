var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var largeur = canvas.width;
var hauteur = canvas.height;
var casesSpeciale=[4,8,14];

//Fonction qui dessine dans le canvas, l'intégralité du plateau de jeu
function dessinePlateau(){
	//rectangle blanc (esthétique)
	ctx.fillStyle = '#FFFFFF'; //'#FFC0CB'
	ctx.fillRect(0,hauteur/2, largeur/3, hauteur/4);
	ctx.fillRect(2*largeur/3,hauteur/2, largeur/3, hauteur/4);

	//case rosace
	ctx.fillStyle = '#bf7d40'; //'#FFC0CB'
	//case 4 joueur 1 
	ctx.fillRect(0,0, largeur/3, hauteur/8);
	//case 4 joueur 2
	ctx.fillRect(2*largeur/3,0, largeur/3, hauteur/8);
	//case 8
	ctx.fillRect(largeur/3,3*hauteur/8, largeur/3, hauteur/8);
	//case 14 joueur 1 
	ctx.fillRect(0,6*hauteur/8, largeur/3, hauteur/8);
	//case 14 joueur 2 
	ctx.fillRect(2*largeur/3,6*hauteur/8, largeur/3, hauteur/8);

	ctx.lineWidth = 1.3
	//barres horizontales
	i=0
	while(i<=8){
		if (i!=5){
			ctx.beginPath();  
			ctx.moveTo(3, i*hauteur/8);
			ctx.lineTo(largeur, i*hauteur/8);
			ctx.stroke();
		}
		else{
			ctx.beginPath();  
			ctx.moveTo(largeur/3, i*hauteur/8);
			ctx.lineTo(2*largeur/3, i*hauteur/8);
			ctx.stroke();
		}
		
		i++
	}

	//barres verticales
	i=0
	while(i<=3){
		if (i==1 || i==2){
			ctx.beginPath();  
			ctx.moveTo(i*largeur/3, 3);
			ctx.lineTo(i*largeur/3, hauteur);
			ctx.stroke();
		}
		else{
			ctx.beginPath();  
			ctx.moveTo(i*largeur/3, 3);
			ctx.lineTo(i*largeur/3, hauteur/2);
			ctx.moveTo(i*largeur/3, 6*hauteur/8);
			ctx.lineTo(i*largeur/3, hauteur);
			ctx.stroke();
		}
		i++
	}
}

//Retourne nombre de cases de déplacement du pion
function Lancer_4D(){
	var lancer, face, pile;
	lancer=0;
	face=0;
	pile=0;
	for(i=0;i<4;i++){
		lancer = Math.random();
		if(lancer>0.5)
		{    
			pile=pile+1;
		}
		else{
			face=face+1;
		}
	}
	return pile;
}

//Fonction qui néinitialise à 0 la position d'un pion en particulier 
function ReinitializePionJoueur(Value) {	
	jsonPion[Value]=0;	
}

var Joueur = {
    nbCase: 0,
}

//faire une fonction qui dessine les pions des joueur 1 et joueur 2 en connaissant leurs positions 
function AffichePion(JoueurPion, numJoueur){
	ctx.beginPath();
	if(numJoueur==1){
		if (JoueurPion==0){
		}
		if (JoueurPion==1){
			ctx.arc(3*largeur/16, 7*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==2){
			ctx.arc(3*largeur/16, 5*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==3){

			ctx.arc(3*largeur/16, 3*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==4){
			ctx.arc(3*largeur/16, hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==13){
			ctx.arc(3*largeur/16, 15*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==14){
			ctx.arc(3*largeur/16, 13*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
	}
	if(numJoueur==2){
		if (JoueurPion==1){
			ctx.arc(13*largeur/16, 7*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==2){
			ctx.arc(13*largeur/16, 5*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==3){
			ctx.arc(13*largeur/16, 3*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==4){
			ctx.arc(13*largeur/16, hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==13){
			ctx.arc(13*largeur/16, 15*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
		if(JoueurPion==14){
			ctx.arc(13*largeur/16, 13*hauteur/16, 13, 0, 2 * Math.PI, false);
		}
	}
	//case centrale = commune
	if(JoueurPion==5){
		ctx.arc(8*largeur/16, hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==6){
		ctx.arc(8*largeur/16, 3*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==7){
		ctx.arc(8*largeur/16, 5*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==8){
		ctx.arc(8*largeur/16, 7*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==9){
		ctx.arc(8*largeur/16, 9*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==10){
		ctx.arc(8*largeur/16, 11*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==11){
		ctx.arc(8*largeur/16, 13*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(JoueurPion==12){
		ctx.arc(8*largeur/16, 15*hauteur/16, 13, 0, 2 * Math.PI, false);
	}
	if(numJoueur==1) ctx.fillStyle = 'blue';
	else ctx.fillStyle = 'red';
	ctx.fill();
}
var score1=0;
var score2 =0;
//Fonction pour afficher le score des joueurs et affiche le joueur gagnant
function AfficheScore(){
	document.getElementById("Score").innerHTML="J1 : "+score1+" J2 :  "+score2;
	if(score1==nPion) document.getElementById("Score").innerHTML="Le Joueur 1 a gagné"
	if(score2==nPion) document.getElementById("Score").innerHTML="Le Joueur 2 a gagné"	
}

//Fonction qui permet d'afficher tout les pions de la partie
function AfficheJEU(n){
	for(i=1;i<=n;i++){
		AffichePion(jsonPion["J"+1+".P"+i],1); //afficher les pions du J1
		AffichePion(jsonPion["J"+2+".P"+i],2); // du J2
		AfficheScore();
	}
	
}
dessinePlateau();

//Fonction permettant d'ajouter des pions au joueur ajout de bouton ayant pour value J1P1, J1P2...J1Pn
function ajouteBoutonsPourJoueur(joueur, n) {
    for(i=1; i<=n; i++) {
		valuePion = "J" + joueur + "P" + i  
		bouton = document.createElement("input")
		bouton.setAttribute("type", "button")
		bouton.setAttribute("class", "Groupe" + joueur) //regroupe les pions du J1 dans une classe Groupe1 (idem J2 => class Groupe2)
		bouton.setAttribute("J", joueur) //J=1 ou J=2 selon le numero du joueur
		bouton.setAttribute("P", i)    //P=numero du pion
		bouton.setAttribute("value", valuePion)//les values des pions seront : J1P1, J1P2....J1Pn
		bouton.onclick = tourJoueur
		
		$("#div" + "J" + joueur).append(bouton) 
    }
}

////AJOUTER LE NOMBRE DE PION CHOISI PAR L'UTILISATEUR////
nPion=0;
$('#nombre').on("input", function(e){
	$('#divJ1').empty() //réinitialise la div1 qui comportait les pions du J1
	$('#divJ2').empty() //idem pour J2
	nPion=Number(e.currentTarget.value); //recuperer le nombre entrer dans le input
	if(!isNaN(nPion)){
		ajouteBoutonsPourJoueur("1", nPion) //Ajout des pions du joueur 1 sur la page
		ajouteBoutonsPourJoueur("2", nPion) //du joueur 2
		jsonPion={}  //Declaration du json
		for(i=1;i<=nPion;i++)
		{
			jsonPion["J"+1+".P"+i]=0  //{J1.P1: 0, J1.P2: 0....}
			jsonPion["J"+2+".P"+i]=0  //{...J2.P1: 0, J2.P2: 0....}
		}
	}
});


//Bouton pour lancer le dé
boutonLancer = document.getElementById("Lancer")
boutonLancer.addEventListener("click", function(){
	Lancer_4D();   //lancer du dé : 0, 1, 2, 3 ou 4
	Joueur.nbCase=Lancer_4D();
	document.getElementById("lancer").innerHTML=Joueur.nbCase; //Le nombre obtenu par le dé s'affiche dans l'html
	AfficheJEU(nPion);
}, false);

Effetcase8=false; //variable global effet case 8
//Effet case 8 est activé : un pion ne peut être occupé par un pion adverse
BoutonOui=document.getElementById("case8_oui")
BoutonOui.addEventListener("click",function(){
	Effetcase8=true;
}, false);
//Effet case 8 est désactivé
BoutonNon=document.getElementById("case8_non")
BoutonNon.addEventListener("click",function(){
	Effetcase8=false;
}, false);

//Fonction qui permet de savoir si le pion est autoriser à aller sur la case 8 
function estAutoriseAAllerCase8() {
	if (Effetcase8==true){
		for(pion in jsonPion) {
			if(jsonPion[pion]==8)
				return false;
		}
	}
	return true;
	
}

//Fonction qui recherche si le pionX est à la même position qu'un autre pion et si il s'agit d'un pion adverse ou pas
function RecherchePion(position,joueur,pion){
	positionsSpeciales = [0,1,2,3,4,13,14]
	
	MemePion="";
	AdversePion="";
	numJ=joueur;
	i=1;
	while(i<=nPion && MemePion==""){ //on parcourt les pions du joueur 1
		//si il ne s'agit pas du meme pion que pionX
		if(numJ==joueur && pion!=i ){
			Vcourant="J"+numJ+".P"+i
			pionY1=jsonPion[Vcourant];
			if(position==8){
				if(!estAutoriseAAllerCase8()) {
					return["effetcase8",""];
				}
			}
			if(position==pionY1) MemePion=Vcourant;  //il s'agit alors d'un pion adverse
		}
		i++;
	}
	if(joueur==1) numJ=2;
	else numJ=1;
	i=1;
	while(i<=nPion && AdversePion=="" && MemePion==""){ //on parcourt les pions du joueur 2
		if(positionsSpeciales.includes(position)) return ["",""];
		Vcourant="J"+numJ+".P"+i;
		pionY2=jsonPion[Vcourant];
		if(position==8){
			if(!estAutoriseAAllerCase8()) {
				return["effetcase8",""];
			}
		}
		if(position==pionY2) AdversePion=Vcourant;  //il s'agit alors d'un pion adverse
		i++;
	}
	tab=[MemePion, AdversePion];
	return tab;
}


joueurCourant = "" //variable indiquant quel joueur est en train de jouer
//Fonction qui donne la main à l'autre joueur 
function donnerMain(j){
	if (j == "J1") {
		joueurCourant = "J2"
		$(".Groupe1").prop('disabled', true);
		$(".Groupe2").prop('disabled', false);
	}
	else {
		joueurCourant = "J1"
		$(".Groupe2").prop('disabled', true);
		$(".Groupe1").prop('disabled', false);
	}
}

//Fonction qui effectue les déplacements du pion qui à été déplacé en fonction du bouton qui à été cliqué et du nombre obtenu par le dé
function tourJoueur(e){ //e=Evenement pour savoir sur quel bouton le joueur à cliqué
	//console.log(e)
	target = e.currentTarget
	targetJ=target.getAttribute("J")
	targetP=target.getAttribute("P")
	joueurcourant="J" + targetJ;
	V = "J" + targetJ + ".P"+ targetP; //exemple "J1.P4"
	nbcase=Joueur.nbCase;
	while(nbcase>0) {
		rechercheSaut = RecherchePion(jsonPion[V] + 1, targetJ,targetP)
		//si un pion arrive dans une case non libre :
		//si dans cette case non libre il s'agit d'un pion du même joueur on saute des cases
		if(rechercheSaut[0]=="")
			nbcase--;
		
		jsonPion[V]++; //on avance d'une case en plus
	}
	//sinon le pion qui arrive sur la case va prendre la place
	if(rechercheSaut[1] != "") {
		ReinitializePionJoueur(rechercheSaut[1]);
	}
	//Si le pion dépasse le terrain de jeu alors on cache le bouton
	if(jsonPion[V]>14){
		e.currentTarget.hidden=true; 

		if(targetJ==1) score1++; //si il s'agit du J1
		else score2++; //du J2
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	dessinePlateau();
	AfficheJEU(nPion);
	if(!casesSpeciale.includes(jsonPion[V])){ //si le pion n'est pas dans une case spéciale alors il ne rejoue pas
		donnerMain("J" + targetJ)
	}
	
}
