(function($){
	$().ready(function(){
		var winScreen=window.screen.width;
		if(winScreen>=640){
			winScreen=320;
		}
		$('html').css('font-size',winScreen/10+'px');


		$(".proListCon .indexIcon").each(function(i){
	 		$(".proListCon .indexIcon").eq(i).addClass('animated zoomIn');
	 	});

	 	$('.proListCon .trigStyle').attr('bBtn','0');

		$('.proListCon .proList a').on('click',function(){
			if($('.trigStyle',this).attr('bBtn')=='0'){
				$('.trigStyle',this).css({
					'-webkit-transform':"rotateZ(360deg)"
				})

				$('.trigStyle',this).attr('bBtn','1');
			}else{
				$('.trigStyle',this).css({
					'-webkit-transform':"rotateZ(0deg)"
				})

				$('.trigStyle',this).attr('bBtn','0');
			}

		});


		

	});




})(jQuery);

















