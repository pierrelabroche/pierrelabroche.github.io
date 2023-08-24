//variables
var body = document.getElementsByTagName('body')[0];
var ship = document.getElementById('ship');
var message = document.getElementById('message');
var hit_counter_txt = document.getElementById('hits');
var miss_counter_txt = document.getElementById('miss');
var lastPress = 0;
var blaster = document.getElementById("blaster");
var explosion_sfx = document.getElementById("explosion_sfx");
var win = document.getElementById("win");
var winning = document.getElementById("winning");
var go = document.getElementById('go');
var go1 = document.getElementById('go1');
var bg = document.getElementById("bg");
bg.volume = 0.3;


// aliens array
var aliens = [];
var alienBackgroundPosition = 0;

// bullets array
var bullets = [];

// trackers
var hits = 0;
var misses = 0;

//Activate our ship
body.addEventListener('keydown', shipActions);

var first_time = 0;
// Handle keydown Event using ShipActions Function
function shipActions(keydownEvent)
{
	if (first_time == 0) { 
		var audio = document.getElementById('bg');
		audio.play();
		first_time = 1;
	}
	var now = Date.now();
	// get the bounding box that surronds the ship
	var bounds = ship.getBoundingClientRect();

	// left arrow key code
	if (keydownEvent.keyCode == '37')
	{
		if(bounds.x - 20 <= 0)
			return;
		ship.style.left = (bounds.x - 20) + "px";
	}

	// right arrow key code
	if (keydownEvent.keyCode == '39')
	{
		if(bounds.x+20  >= window.innerWidth)
			return;
		ship.style.left = (bounds.x+20) + "px";
	}

	// spacebar key code
	if (keydownEvent.keyCode == '32')
	{
		if( now - lastPress < 500) 
		{
			// don't fire any bullets if the time which the player
			// last fired a bullet is less than 500 milliseconds
			return;
		}

		lastPress = now;
		var laser_beam = document.createElement('div');
		laser_beam.classList.add('bullet');
		
		laser_beam.style.left = (bounds.x + 49) + "px";

		bullets.push(laser_beam);
		body.appendChild(laser_beam);
		blaster.play();
		blaster.volume = 0.3;


	}

}

// Manages bullet after is has be fired
	var animateBullets = setInterval(
		function()
	{
		bullets.forEach(
			function(bullet,i)
			{
				var bulletBounds = bullet.getBoundingClientRect();
				if(bulletBounds.top < 0)
				{
					bullets.splice(i,1);
					body.removeChild(bullet);
					// when player misses, count it as a miss
					miss_counter_txt.innerHTML = "Miss: "+ (++misses);
				}

				// checks for collisions between bullet and alien
				aliens.forEach(
					function(alien, pos)
					{
						var alienBoundingBox = alien.getBoundingClientRect();

						// when a collisions between bullet and alien
						if
						( 
							bulletBounds.top <= alienBoundingBox.bottom && 
							bulletBounds.left >= alienBoundingBox.left && 
							bulletBounds.right <= alienBoundingBox.right
						) {
							// remove bullet from the screen
							if(bullet.parentNode == body)
							{
								bullets.splice(i, 1);
								body.removeChild(bullet);


							}
							aliens.splice(pos, 1);
							body.removeChild(alien);

							// increment hit counter text
							hit_counter_txt.innerHTML = "Hits: "+ (++hits);


							// show explosion when alien gets hit
							var explosion = document.createElement('div');
							explosion.classList.add('explosion');
							explosion.style.top = alienBoundingBox.top + "px";
							explosion.style.left = alienBoundingBox.left + "px";
							body.appendChild(explosion);
							explosion_sfx.play();
							explosion_sfx.volume = 0.3;

							// removes explosion gif after 1 sec
							setTimeout(
								function()
								{
									body.removeChild(explosion);
								}
								,1000);

							// checks if player wins
							if (aliens.length <= 0)
							{
								stopGame('You Win!');
								win.play();
								bg.volume = 0.0;
								explosion_sfx.volume = 0.0;
								
		    					setTimeout(function(){ winning.play();}, 2250);
							
								return;
								
							}
						}// end of collision

						

					} 



					);
			}
		);
	}

	,100);

for(var i=0; i<10; i++)
{
	//picks a random number from 1 - 3
	var alien_type = Math.floor(Math.random()*3)+1;
	var positionX = Math.floor(Math.random()*(window.innerWidth - 300));
	var positionY = Math.floor(Math.random() * 200);

	//show alien on screen
	var alien = document.createElement('div');
	alien.classList.add('alien');
	alien.classList.add('alien'+alien_type);

	//sets XY position of the alien on screen
	alien.style.top = positionY + "px";
	alien.style.left = positionX + "px";

	//we created this HTML element <div class="alien "> </div>
	//adds our newly created element to an array
	aliens.push(alien);

	//display alien on screen
	body.appendChild(alien);
}

var animateAliens = setInterval(
	function()
	{
		//type code here
		alienBackgroundPosition = Math.abs(alienBackgroundPosition - 50);

		//shifts background image for animation
		aliens.forEach(
			function(alien)
			{
				alien.style.backgroundPositionX = alienBackgroundPosition + "px";
			}

			);
	}
	,500);

//move aliens vertically
var moveAliens = setInterval(
	function()
	{
		aliens.forEach(
			function(alien)
			{
				var alienBoundingBox = alien.getBoundingClientRect();

				//decide what alien will do
				var think = Math.floor(Math.random() * 3) - 1;
				var Xdirection = Math.floor(Math.random()* 100) + 1;

				//calculate a new Horizontal position
				var horizontal_position = alienBoundingBox.left + Xdirection * think;

				//moves aliens on screen
				alien.style.top = alienBoundingBox.top + 2  +'px';
				alien.style.left = horizontal_position + 'px';

				if(alienBoundingBox.top >= window.innerHeight - 150)
				{
					stopGame("GAME OVER!");
					bg.volume = 0.0;
					explosion_sfx.volume = 0.0;

					go1.play();
					setTimeout(function(){ go.play();}, 2250);

					return;
				}

			}

			);
	}


	,1500);

function stopGame(msg)
{
	// STOP ALL GAME BEHAVIORS
	clearInterval(animateAliens);
	clearInterval(moveAliens);
	clearInterval(animateBullets);

	// stop ship from moving and firing
	body.removeEventListener('keydown',shipActions);

	message.innerHTML = msg;
	message.style.display = "block";
}







