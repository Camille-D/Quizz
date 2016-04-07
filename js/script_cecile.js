// $(document).ready(function () {
  
// 	reponses = [
// 				    [0,1,0,0],
// 				    [0,0,1,0],
// 				    [1,0,0,0]
// 				    			];
// 	$reponseUser = $('.next'); 

  
// 	$reponseUser.click(function() {
	  	
// 	  	sInputs = $('.sel');

// 	  	setTimeout(function() {

	  

// 			  for (var id = 0; id<sInputs.length;id++) {

// 				if(sInputs[id].name == reponses[0][1]) { 
			    
// 			     		 $(sInputs[id]).addClass('trueAns');
			    
// 			  	  } else if (sInputs[id].name != reponses[0][1]) {
			    
// 			    		  $(sInputs[id]).addClass('falseAns');
// 			   	}
// 			}


// 	  	},1000);
	  

// 	});

// });


$(document).ready(function () {
  
	reponses = [
				    [0,1,0,0],
				    [0,0,1,0],
				    [1,0,0,0]
				    			];

  
	$('.next').click(function() {
	  	
	  	sInputs = $('.sel');

	  	setTimeout(function() {

			  for (var id = 0; id<4;id++) {



					if( 0 === reponses[page][1]) { 
					    
					     		$(sInputs[id]).addClass('trueAns');
					    
					  	  } else if ( 0 !== reponses[page][1]) {
					    
					    		 $(sInputs[id]).addClass('falseAns');
					   	}
	

			}


	  	},1000);
	  

	});

});





