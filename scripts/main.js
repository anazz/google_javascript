/*
	On recupere les elements HTML dans des variables javascript
*/

let buttonCentre = document.getElementById('button_centre');
let googleCentre = document.getElementById('corps_page');
let maPageWeb = document.querySelector('html');

/*
	On applique la fonction setTimeout() afin d'ouvrir une fenetre pop-up a
*/

//setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
maPageWeb = setTimeout(function(){alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);

/*
	On implemente onclick sur le grand button afin de le faire disparaitre
	et faire apparaitre le block GOOGLE
*/

buttonCentre.onclick = function () {
	//si le block GOOGLE n'est pas affiché

	if (googleCentre.style.display = "none") 
	{
		//on fait disparaitre le button
		buttonCentre.style.display = "none";

		//on fait apparaitre le block GOOGLE
		googleCentre.style.display = "block";
	} else 
	{
		//la page reste telle quelle 
        googleCentre.style.display = "none";
    }
}




