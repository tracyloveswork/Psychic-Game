window.onload = function(){

// Declare variables
			var win = 0;
			var lose = 0;
			var turn = 9;
			var guessList = " ";
			var userKey;

		// Populate starting score

			wins.textContent = win;
			losses.textContent = lose;

		// Reset variables and write variables in span tags id's

			function resetVariables() {
				turn = 9;
				guessList = " ";
				guesses.textContent = guessList;
				turns.textContent = turn;
			}

		resetVariables();
		
		// Generate a random letter for computer guess
		
			function randomGuess() {
			var text;
			var charset = "abcdefghijklmnopqrstuvwxyz";
			text = charset.charAt(Math.floor(Math.random() * charset.length));
			return text;
			}

			var computerGuess = randomGuess();

			console.log(computerGuess);

		// Check if key pressed is letter
			function allLetter(inputtxt)  {
				var letters = "abcdefghijklmnopqrstuvwxyz";
				if (letters.indexOf(inputtxt) > 0) {
					return true;
					}
					else
					{
					return false;
					}
				}

		// get user guess and compare to computer guess

			document.onkeyup = function(event) {

				// Check if you have a turn left
				if (turn > 0) {

					var userKey = event.key;

					userKey = userKey.toLowerCase();

					console.log(allLetter(userKey));

					// Test if it is a letter

					if (allLetter(userKey)) {

						turn--;

						turns.textContent = turn;

						console.log(userKey);
						
						guessList += (userKey + ", " );
							
						guesses.textContent = guessList;

						if (userKey == computerGuess) {

							alert("Correct. You must be Psychic.");

							win++;

							wins.textContent = win;

							resetVariables();

						} else {

						alert("That was not the letter I am thinking of.")

							}

					} else {

						alert("That is not a letter. Try again.");

					}

						} else {

							lose++;

							losses.textContent = lose;

							resetVariables();

							alert("No turns left.  You lose this round.");

						}
				}

};