// Code your orbitCircumference function here:
function orbitCircumference (radius) {
  return Math.round(2 * Math.PI * radius)
}



// Code your missionDuration function here:
function missionDuration (numOfOrbits, orbitRadius, speed) {
  let circumfrence = orbitCircumference(orbitRadius)
  let totalDistance = circumfrence * numOfOrbits
  let duration = totalDistance / speed
  return Math.round(duration*100)/100
}



// Copy/paste your selectRandomEntry function here:
selectRandomEntry = (array) => {
    let index = Math.floor(Math.random() * array.length)
    return array[index]
}
  

// Code your oxygenExpended function here:


// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];

oxygenExpended = (crewMember, numOfOrbits, orbitRadius, speed ) => {
  let duration = missionDuration(numOfOrbits, orbitRadius, speed)
  let oxygenUsed = Math.round(crewMember.o2Used(duration)*1000)/1000
  let message = `${crewMember.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`
  return message
}
console.log(oxygenExpended(selectRandomEntry(crew), 3, 2000, 28000))
 