$('#video video').bind('ended', function(){
   $(this).parent().fadeOut();
   $('.loading-page').fadeOut();
});
