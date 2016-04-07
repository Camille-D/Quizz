// $(document).ready(function(){

// 	var $carrousel = $('.carrousel'),
// 		$page = $('.page'),
// 		indexPage = $page.length - 1, //dernier index de la page 
// 		i = 0,
// 		$currentPage = $page.eq(i);

// 	$page.css('display', 'none');//cache les pages
// 	$currentPage.css('display', 'flex');// affiche la page courante



// 	$('.next').click(function(){
// 		i++;
// 		$(".com input.next").prop("disabled", true);
// 		setTimeout(nextPage,3000);
// 	});

// 	$('.prev').click(function(){
// 		i--;

// 		if (i >= 0) {				
// 			$page.css('display', 'none');
// 			$currentPage = $page.eq(i);
// 			$currentPage.css('display', 'flex');
// 		} else {
// 			i = 0;
// 		}
// 	});


// 	function nextPage() {
			

// 		if (i <= indexPage){
// 			$page.css('display', 'none');
// 			$currentPage = $page.eq(i);
// 			$currentPage.css('display', 'flex');
// 		} else {
// 			i = indexPage;
// 		}
// 	}

// });


