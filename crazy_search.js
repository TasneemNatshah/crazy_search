(function ($) {
  Drupal.behaviors.crazy_search = {
    attach: function (context, settings) {

    	var lang = Drupal.settings.lang_name;

		$('#search-block-form input').bind('keypress', function(e) {
			if(e.keyCode==13){
				var keyword = $(this).val();
				var baseUrl = document.location.origin;

				window.location.href = baseUrl + "/" + lang + "/search/node/" + keyword;
				// alert(user_id);
			}
		});

	 
    }
  };
})(jQuery);