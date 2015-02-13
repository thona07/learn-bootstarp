/**
 *	PROJECT			:		Bootstrap
 *	Developer		:		Glean Team
 *	Date			:		10-February-2015
 */
 
 $( function() {
	var Bootstrap = {
		init: function() {
			this.clickMe();
			this.changeBackground();
		},
		
		test: function() {
			alert('It works!');
		},
		
		clickMe: function() {
			$('button').click( function() {
				$( this ).removeClass('btn-success');
				$( this ).addClass('btn-danger');
			});
		},
		
		changeBackground: function() {
			$('body').css({
				'background': 'blue'
			});
		}
	}
	
	$( document ).ready( function() {
		Bootstrap.init();
	});
 });