$(document).ready(function () {
  $reponses = ["Answer 3"]; // stocker dans un tableau toutes les réponses possibles
  $reponseUser = $('.btnReponse'); // sélection du bouton cliqué
  /* $next = $('.btnNext'); */

  $reponseUser.click(function() {
    $txReponseUser = $(this).val(); // variable qui récupère la valeur du bouton choisi par l'utilisateur
    // $index = 0; // pour $reponse[index]
    if($txReponseUser === $reponses[0]) { // vérif si les deux réponses sont identiques
      $(this).css("background-color", "green"); // oui = vert
    } else if ($txReponseUser !== $reponses[0]) {
      $(this).css("background-color", "red"); // non = rouge
    }
/*  $next.click(function () {
    $reponseUser.css("background-color", "grey");
  })*/
    // $index +=1; // incrémentation pour se déplacer dans array tableau
  });
});
