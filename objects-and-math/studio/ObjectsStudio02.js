// Code your orbitCircumference function here:
function orbitCircumference(altitude){
  circumference = Math.trunc(2 * Math.PI * altitude);
  return circumference
}

// Code your missionDuration function here:

function missionDuration(noOfCompletedOrbit, orbitRadius = 2000, orbitalSpeed = 28000){
  let distance = orbitCircumference(orbitRadius) * noOfCompletedOrbit;
  let time = Math.round(distance/orbitalSpeed*100)/100;
  return time;
}

let distance = orbitCircumference(2000) * 5;
console.log( `The mission will travel ${distance} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(candidateIds){
  let selectedCandidates = [];
  while (selectedCandidates.length<1){
    let index = Math.floor(Math.random()*candidateIds.length);
    if (!selectedCandidates.includes(candidateIds[index])){
    selectedCandidates.push(candidateIds[index]);
    }
  }
  return selectedCandidates;
}

// Bonus Missions

function smallestOxygenAnimal(all6Animals) {
  let selectedAnimal = all6Animals[0];
  let finalcandidate = [];
 for (i = 0; i < all6Animals.length; i++){
        if (all6Animals[i].o2Used(1) < selectedAnimal.o2Used(1)) {
          selectedAnimal = all6Animals[i];
        }                                    
  }
  finalcandidate.push(selectedAnimal);
  return finalcandidate;
}

// Code your oxygenExpended function here:
function oxygenExpended(oneCandidate, orbitRadius, orbitalSpeed){
  let hours = missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygen = Math.round(oneCandidate[0].o2Used(hours) * 1000)/1000;
  return `${oneCandidate[0].name} will perform the spacewalk, which will last ${hours} hours and require ${oxygen} kg of oxygen.`
}

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
 let allCrew = [candidateA,candidateB,candidateC, candidateD,candidateE,candidateF];

 console.log(oxygenExpended(selectRandomEntry(crew),2000,28000))
 console.log(oxygenExpended(smallestOxygenAnimal(allCrew),2000,28000))

