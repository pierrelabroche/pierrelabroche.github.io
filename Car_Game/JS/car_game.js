// Create variables
var points = 0;
var speed = 60;
var converted_speed = 60;
var production_time = 1000;


// Target HTML Elements using JS
var cars_avoided = document.getElementById('cars_avoided');
var current_speed = document.getElementById('speed');
var OrangeCar = document.getElementById('OrangeCar');
var message = document.getElementById('message');
var body = document.getElementsByTagName('body')[0];
var left_lane = "60px";
var center_lane = "130px";
var right_lane = "200px";

// Sound Effect
var sfx = document.getElementById("engine_rev");
sfx.volume = 0.6;
var sfx2 = document.getElementById('derezzed');
sfx2.volume = 0.3;
var sfx3 = document.getElementById('gameover1');

var sfx4 = document.getElementById('gameover2');

var sfx5 = document.getElementById('gameover3');


 // Function to start audio playback after a delay
 function startAudioDelayed(delay) {
	setTimeout(function() {
		var audio = document.getElementById('derezzed');
		audio.play();
	}, delay);
}

// Call the function to start audio after a 5-second delay
startAudioDelayed(1000); 


// Set the initial values for points and speed
cars_avoided.innerHTML = points +" cars avoided";
current_speed.innerHTML = speed +" mph";

// Position the Orange Car on the road

// positions car vertically
OrangeCar.style.top = parseInt(window.innerHeight) - 80 +"px";

// positions car horizontally
OrangeCar.style.left = center_lane;

// Listen out for a keypress event
body.addEventListener('keypress', moveCar);

// Handle a key press event
function moveCar(trigger)
{
	var current_lane = OrangeCar.style.left;

	// Moves car from center lane to left lane
	if(trigger.key == 'a' && current_lane == center_lane) 
		OrangeCar.style.left = left_lane;

	// Moves car from center lane to right lane
	if(trigger.key == 'd' && current_lane == center_lane) 
		OrangeCar.style.left = right_lane;

	// Left lane change to center
	if(trigger.key == 'd' && current_lane == left_lane)
		OrangeCar.style.left = center_lane;

	// Right lane change to center
	if(trigger.key == 'a' && current_lane == right_lane)
		OrangeCar.style.left = center_lane;

}

var cars = new Array();

function GenerateRedCar()
{
	// create a new car
	var img = new Image(); // <img src="" alt="">
	img.src = "./Media/red.png"; // <img src="../media/red.png" alt

	// Position the car on the screen
	img.style.height = "80px";
	img.style.position = "absolute";
	img.style.top = "-80px";

	// choose a lane at random - Math.random()
	var lane = Math.floor(Math.random()*3) + 1;

	if(lane == 1) img.style.left = left_lane;
	if(lane == 2) img.style.left = center_lane;
	if(lane == 3) img.style.left = right_lane;	

	// add car to cars array
	cars.push(img);

	// Append/Show car on the screen
	body.appendChild(img);

}	

// setInterval(run_a_function, at_certain_time_periods)
var factory = setInterval(GenerateRedCar,1000);

function MoveRedCars()
{
	// Get the posiiton and current lane for the player car
	var OrangeCarFrontBumper = parseInt(OrangeCar.style.top);
	var OrangeCarLane = OrangeCar.style.left;

	// Move the red cars downwards
	for(var x=0; x < cars.length; x++)
	{
		// move the red cars
		var redCarPosition = (parseInt(cars[x].style.top) + 10) + "px";
		cars[x].style.top = redCarPosition;

		// check for collision
		var RedCarFrontBumper = parseInt(cars[x].style.top) + 80;
		var RedCarLane = cars[x].style.left;

		// Remove passing cars
		if(RedCarFrontBumper >= OrangeCarFrontBumper+80)
		{
			body.removeChild(cars[x]);
			cars.splice(x,1);

			// add a point
			points++;
			cars_avoided.innerHTML = points + " cars avoided.";

			// updates speed after passing 5 cars
			if(points % 7 == 0)
			{
				sfx.play();
				sfx.volume = 0.4;


				// Stops the Loops(s)
				clearInterval(start);
				clearInterval(factory);
				

				// Increases players speed on the board
				converted_speed +=7;
				current_speed.innerHTML = converted_speed + "mph";

				// Subtracts 7 milliseconds from red car speed
				speed -=7;
				start = setInterval(MoveRedCars, speed);
				factory = setInterval(GenerateRedCar, production_time-100);


			}
			
		}

		if(RedCarFrontBumper >= OrangeCarFrontBumper && OrangeCarLane == RedCarLane)
		{
			clearInterval(start);
			clearInterval(factory);

			sfx.volume = 0.0;
			sfx2.volume = 0.0;
			sfx3.play();
		    setTimeout(function(){ sfx4.play();}, 1600);
		    sfx4.volume = 0.4;
		    setTimeout(function(){ sfx5.play();}, 20000);
			// console.log("crash detected");
			//Outputs message to screen
		    message.innerHTML = "Game Over!";
		}


	}
}

var start = setInterval(MoveRedCars, speed);












