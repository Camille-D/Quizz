$(document).ready(function(){

$(".com input.next").prop("disabled", true);

	$(".choice input").click(function(){
		$(this).toggleClass("sel");
		
		$(".com input.next").prop("disabled", false);
	});

	



});





	// $(".com input").click(function(){
	// 	$(this).toggleClass("next");
	// });



	// if focus = on {
	// 	$(".com input.next").prop("disabled", true);
	// }





