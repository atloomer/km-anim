$('#video video').bind('ended', function(){
   $(this).parent().fadeOut("slow");
   $('.loading-page').fadeOut("slow");
});
