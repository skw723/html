$(function(){
	$('.navi').click(function(){
		$('.navi_menu').toggle();
	});
	
	$('#header .navi_menu li').click(function(e){
		$('.navi_menu').toggle();
		$('.content_list').hide();
		var no = e.toElement.value;
		$('#content'+no).show();
	})
	$('#content12').show();
});