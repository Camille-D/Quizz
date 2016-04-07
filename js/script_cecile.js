$(document).ready(function () {
  
  $reponses = ["Answer 3"]; // stocker dans un tableau toutes les réponses possibles
  $reponseUser = $('.next'); // sélection du bouton cliqué
  /* $next = $('.btnNext'); */

  
  $reponseUser.click(function() {
  	
  	e = $('.sel');

  	
  	
  	setTimeout(function() {

  
    
  for (var id = 0; id<e.length;id++) {

    if(e[id].value == $reponses[0]) { // vérif si les deux réponses sont identiques
    
      $(e[id]).toggleClass('trueAns');
    
    } else if (e[id].value != $reponses[0]) {
    
      $(e[id]).toggleClass('falseAns');
    }
    }


  	},2000);
  




    // $index +=1; // incrémentation pour se déplacer dans array tableau
  });







});







