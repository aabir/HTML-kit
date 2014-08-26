/* Place holder */
jQuery('input,textarea').focus(function(){
   jQuery(this).data('placeholder',$(this).attr('placeholder'))
   jQuery(this).attr('placeholder','');
});
jQuery('input,textarea').blur(function(){
   jQuery(this).attr('placeholder',$(this).data('placeholder'));
});	
/* Place holder */