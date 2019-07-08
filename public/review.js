$(document).ready(function(){


    var nav = $('.navbar').outerHeight()+20; 
    

   

// jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},6000);
// 	});
// });

// jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},6000);
// 	});
// });


    $('.linksection').click(function(e){
        
        var link =  $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top - nav
        },1500);
        e.preventDefault();
    });
});
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
          sr.reveal('#left',{
              duration: 1500,
              origin: 'left',
              distance: '300px'
             
          });
          sr.reveal('#right',{
              duration: 1500,
              origin: 'right',
              distance: '300px'
             
          });
          sr.reveal('#para',{
              duration: 1500,
              origin: 'right',
              distance: '300px'
             
          });
          sr.reveal('#paraleft',{
              duration: 1500,
              origin: 'left',
              distance: '300px'
             
          });
          sr.reveal('.java',{
              duration:1500,
              
          })
