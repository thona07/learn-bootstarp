/**
 *	PROJECT			:		Bootstrap
 *	Developer		:		Glean Team
 *	Date			:		10-February-2015
 */
 
 $( function() {
	var Bootstrap = {
		init: function() {
			//this.test();
			this.clickMe();
			this.fonecolor();
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
		
		fonecolor: function() {
			$('td:odd').css({
				'color': 'red'
			});
		},
		changeBackground: function() {
			$('body').css({
				'background': 'grey'
			});
		}
	}
	
	$( document ).ready( function() {
		Bootstrap.init();
	});
 });
 