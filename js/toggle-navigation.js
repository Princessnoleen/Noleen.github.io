<script type="text/javascript"  src="https://code.jquery.com/jquery-1.10.0.min.js"></script>	
<script type="text/javascript" src="js/toggle-navigation.js"></script>

$(document).ready(function() {
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
	$menulink.click(function() {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
  	return false;
	});
});
