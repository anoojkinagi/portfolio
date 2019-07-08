AOS.init();
function flip0()
{
	$('.card0').toggleClass('flipped');	
}
function flip1()
{
	$('.card1').toggleClass('flipped');	
}
function flip2()
{
	$('.card2').toggleClass('flipped');	
}function flip3()
{
	$('.card3').toggleClass('flipped');	
}function flip4()
{
	$('.card4').toggleClass('flipped');	
}function flip5()
{
	$('.card5').toggleClass('flipped');	
}


		 
		window.sr = ScrollReveal();
		sr.reveal('.para',{
			duration: 1500,
			origin: 'right',
			distance: '300px'
		   
		});
		sr.reveal('.paraleft',{
			duration: 1500,
			origin: 'left',
			distance: '300px'
		   
		});
		
		
  
		$(document).ready(function(){


			var nav = $('.navbar').outerHeight()+20; 
			
		  
			$('.linksection').click(function(e){
				
				var link =  $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(link).offset().top - nav
				},1500);
				e.preventDefault();
			});

			

		});

		$(window).scroll(function(){
			var skill = $('.skills1').offset().top;
			var prog = $('.colorbar');
			if($(window).scrollTop()>skill-200)
			{
				prog.eq(0).animate({
					width: "90%"
				},2000)
				
				prog.eq(1).animate({
					width: "95%"
				},2000)

				prog.eq(2).animate({
					width: "95%"
				},2000)

				prog.eq(3).animate({
					width: "90%"
				},2000)

				prog.eq(4).animate({
					width: "90%"
				},2000)

				prog.eq(5).animate({
					width: "80%"
				},2000)

				prog.eq(6).animate({
					width: "70%"
				},2000)

				prog.eq(7).animate({
					width: "50%"
				},2000)

				prog.eq(8).animate({
					width: "70%"
				},2000)

				prog.eq(9).animate({
					width: "60%"
				},2000)
			}
		})
	
	