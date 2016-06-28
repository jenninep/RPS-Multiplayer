// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCU8Lex08pVzZT4ZV-8fBLRK3ZJJxsxnlQ",
    authDomain: "rps-multiplayer-cd7d7.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-cd7d7.firebaseio.com",
    storageBucket: "rps-multiplayer-cd7d7.appspot.com",
  };
firebase.initializeApp(config);
var database = firebase.database().ref();


database.child('player1').set({
playerName: '',
playerWins: '',
playerLosses: '',
playerChoice: ''

})

  

var obj = {
	choice: "",
	hasPlayed: false,
}



//player picks a choice 
//	player fires pick function
// check to see if opponent has made a choice
// if opponent hasnt picked "display, waiting for you"


  $("#scissors").on('click', function(){
  	obj.hasPlayed = true;
  	obj.choice = "scissors";
  var result = compare('scissors', player2);
  $("#decision").html(result);
});

$('#rock').on('click', function(){
  var result = compare('rock', player2);
  $("#decision").html(result);
});

$('#paper').on('click', function(){
	var result = compare('paper', player2);
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
			database.set(firstName);
			$('#P1').html(firstName);
			return false;
			// $('#playerName').text('#P1')
		});

