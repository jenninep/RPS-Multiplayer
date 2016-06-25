// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCU8Lex08pVzZT4ZV-8fBLRK3ZJJxsxnlQ",
    authDomain: "rps-multiplayer-cd7d7.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-cd7d7.firebaseio.com",
    storageBucket: "rps-multiplayer-cd7d7.appspot.com",
  };
  firebase.initializeApp(config);
  var database = firebase.database();


// Global variables
var player1 = ""
var player2 = ""
var player1Pick = ""
var player2Pick
  



  $("#scissors").on('click', function(){
  var result = compare('scissors', player2());
  $("#decision").html(result);
});

$('#rock').on('click', function(){
  var result = compare('rock', player2());
  $("#decision").html(result);
});

$('#paper').on('click', function(){
	var result = compare('paper', player2());
	$('#decision').html(result);
});

var compare = function(player1, player2){
	if(player1 === 'rock') {
		if(player2 === 'rock'){
			return 'Tie';
		} else if (player2 === 'paper') {
			'Rock lost to paper!';

		} else if (player2 === 'scissors') {
			return 'Rock crushed scissors!';
		}
	} else if (player2 === 'rock'){
		return 'Paper beat rock!;'
	} else if (player2 === 'scissors') {
		return 'Paper got cut by scissors!';
	}
// }else if (player1 === 'scissors') {
	
	if(player2 === 'scissors') {
		return 'Tie';

	} else if (player2 === 'paper') {
		return "Scissors beat paper!";
	}else if (player2 === 'rock') {
		return "Scissors got crushed!";
	}
// } else {
	// return "Thats just crazy!"
};

$('#playerName').on('submit', function () {
			var firstName = $('#firstName').val();
			console.log(firstName)
			database.ref().text(firstName);
			$('#playerName').append(firstName);
			// $('#playerName').text('#P1')
		});

