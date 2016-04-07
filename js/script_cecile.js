$(document).ready(function () {
  

  /////////////////////////////////////////////////////////////// CODE CAMILLE ///////////////////////////////////////////////////////////////


	var $carrousel = $('.carrousel'),
		$page = $('.page'),
		indexPage = $page.length - 1, //dernier index de la page 
		i = 0,
		currentPage = $page.eq(i);

	$page.css('display', 'none');//cache les pages
	currentPage.css('display', 'flex');// affiche la page courante



	$('.next').click(function(){
		i++;
		$(".com input.next").prop("disabled", true);
		setTimeout(nextPage,3000);
	});

	$('.prev').click(function(){
		i--;

		if (i >= 0) {				
			$page.css('display', 'none');
			currentPage = $page.eq(i);
			currentPage.css('display', 'flex');
		} else {
			i = 0;
		}
	});


	function nextPage() {
			

		if (i <= indexPage){
			$page.css('display', 'none');
			currentPage = $page.eq(i);
			currentPage.css('display', 'flex');
		} else {
			i = indexPage;
		}
	}

/////////////////////////////////////////////////////////////// CODE CECILE ///////////////////////////////////////////////////////////////
	

	reponses = [
				    [0,1,0,0],
				    [1,0,1,0],
				    [1,0,0,0]
				    			];
	$reponseUser = $('.next'); 

  
	$reponseUser.click(function() {
	  	
	  	evInputs = currentPage[0].children[1].children;
	  	seInputs = [0,0,0,0];


	  	setTimeout(function() {

	  

			  for (id = 0; id<evInputs.length;id++) {

			  	if (evInputs[id].className == 'sel') {
			  		seInputs[id] = 1;
			  	}



			  		// console.log(seInputs[id]);
			  		// console.log(reponses[i-1][id]);
			
				if (seInputs[id] === reponses[i-1][id] && seInputs[id] !== 0 && reponses[i-1][id] !== 0) {
					console.log(reponses[i-1][id]);
					$(evInputs[id]).addClass('trueAns');
					currentPage.addClass("trueAnsBack");
			
			  	}	else if (seInputs[id] !== reponses[i-1][id] && seInputs[id] !== 0 && reponses[i-1][id] !== 1) {

			  		$(evInputs[id]).addClass('falseAns');
			  		currentPage.addClass("falseAnsBack");


			  	}	
			
			}

	  	},1000);
	  
	});

/////////////////////////////////////////////////////////////// CODE YOYO ///////////////////////////////////////////////////////////////

	// var inputs = $(".choice input");

	$(".com input.next").prop("disabled", true);

	$(".choice input").click(function(){
		
		console.log(this);

		$(this).toggleClass("sel");

		$(".com input.next").prop("disabled", false);


	

	});


});








