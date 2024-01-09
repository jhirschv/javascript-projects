// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
} else {
   console.log('WARNING: Insufficient fuel!');
}

if (crewStatus && computerStatus === 'green' && fuelLevel >= 20000){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}