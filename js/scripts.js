$(function() {
  $(".checkme").on({
    mouseover: function() {
      $(this).css({
        left: (Math.random() * 200) + "px",
        top: (Math.random() * 200) + "px",
      });
    }
  });
});

/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
