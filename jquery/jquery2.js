
// sets the image to the button you click
$(document).ready(function(){
	$("#btn1").click(function(){
	  var rock = $('#rock');
	  var userChoice = $('#userChoice');
	  var btn4 = $('#btn4');
		if(rock.hasClass('display-none')){
			$('#rock').show(200);
			rock.removeClass('display-none');
			userChoice.css( { color:'#7a7887' } );
			btn4.css({ background:'#f00' });
		} else {
			$('#rock').toggle(200);
			userChoice.css( { color:'black' } );
			btn4.css( {background:'#dddddd'} );
		}
	});
	$("#btn2").click(function(){
	  var paper = $('#paper');
	  var userChoice = $('#userChoice');
	  var btn4 = $('#btn4');
		if(paper.hasClass('display-none')){
			$('#paper').show(200);
		    paper.removeClass('display-none');
		    userChoice.css( { color:'#2306f9' } );
		    btn4.css({ background:'#f00' });
		} else {
			$('#paper').toggle(200);
			userChoice.css( { color:'black' } );
			btn4.css( {background:'#dddddd'} );
		}
	});
	$("#btn3").click(function(){
	  var scissors = $('#scissors');
	  var userChoice = $('#userChoice');
	  var btn4 = $('#btn4');
		if(scissors.hasClass('display-none')){
			$('#scissors').show(200);
		    scissors.removeClass('display-none');
		    userChoice.css( { color:'#059e00' } );
		    btn4.css({ background:'#f00' });
		} else {
			$('#scissors').toggle(200);
			userChoice.css( { color:'black' } );
			btn4.css( {background:'#dddddd'} );
		}
	});
	$('#btn4').click(function(){
		var choices = ['rock', 'paper', 'scissors'];
		var rock2 = $('#rock2');
		var paper2 = $('#paper2');
		var scissors2 = $('#scissors2');
		var btn4 = $('#btn4');
		var computerChoice = $('#computerChoice');
		var choice = Math.random();
			if(choice < 0.33){
				  btn4.remove();
				  rock2.fadeIn(200);
				  rock2.removeClass('display-none');
				  computerChoice.css( { color:'red' } );
				} else if(choice <= 0.66){
				   btn4.remove();
				   paper2.show(200);
				   paper2.removeClass('display-none');
				   computerChoice.css( { color:'red' } );
				} else {
				  btn4.remove();
				  scissors2.fadeIn();
				  scissors2.removeClass('display-none');
				  computerChoice.css( { color:'red' } );
				};
				console.log(scissors2);
				console.log(paper2);
				console.log(rock2);
	});
});
