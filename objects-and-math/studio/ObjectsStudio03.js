// Code your crewMass function here:


// Code your fuelRequired function here:


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
let crew = [candidateB,candidateD,candidateF];

crewMass = (crew) => {
  totalMass = 0
  for(let i = 0; i < crew.length; i++) {
    totalMass = totalMass + crew[i].mass
  }
  return Math.round(totalMass*10)/10
 
}

fuelRequired = () => {
  let massOfRocket = 75000
  let massOfCrew = crewMass(crew)
  totalFuelNeeded = 9 * massOfRocket + massOfCrew
  for(let i = 0; i < crew.length; i ++) {
    if(crew[i].species == 'cat' || crew[i].species == 'dog') {
      totalFuelNeeded = totalFuelNeeded + 200
    } else {
      totalFuelNeeded = totalFuelNeeded + 100
    }
  }
  return Math.round(totalFuelNeeded)
}

console.log(fuelRequired())
 