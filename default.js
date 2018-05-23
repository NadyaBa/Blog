$(document).ready(function(){
 		$("#bg").hide();
        $("#eu").hide();
$(".b").mouseenter(function(){


	$("#bg").show()
	});
$(".a").mouseleave(function(){

	$("#bg").hide()
	});


$(".c").mouseenter(function(){
	$("#eu").show()

});
$(".a").mouseleave(function(){
	$("#eu").hide()
});


$("li>a").mouseenter(function(){

$(this).css("color","red");

	});
$("li>a").mouseleave(function(){

$(this).css("color","black");

	});









});
