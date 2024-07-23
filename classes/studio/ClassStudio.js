//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores =[]){
       this.name = name;
       this.mass = mass;
       this.scores = scores;
    }
 
    addScore(newScore) {
       this.scores.push(newScore);
    }
    average() {
        let sum = 0; 
        if(!this.scores.length){
          return sum;  
        }
        for (let i = 0; i < this.scores.length; i++){
            sum += this.scores[i];
        } 
        return (Math.round(sum / this.scores.length*10))/10;
     }
     status() {
        let status = 'Rejected' 
        if (this.average()>= 90){
            status = 'Accepted';
        }
        if (this.average()>= 80 && this.average() <90 ){
            status = 'Reserve';
        }
        if (this.average()>= 70 && this.average() <80 ){
            status = 'Probationary';
        }
       //let candidateStatus = `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
       return  status
     }
 }

 let bear = new CrewCandidate('Bubba Bear', 135, [88, 85,90]);
 let dog = new CrewCandidate('Merry Maltese', 1.5, [93, 88,97]);
 let gator = new CrewCandidate('Glad Gator', 225, [75, 78,62]);

 function displayStatus(candidate){
    let report = `${candidate.name} earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}.`;
   return report
 }

//--------------------------------------------------------------------- Part 1 Display --------------------------------------------------------------------------

console.log(bear);
console.log(dog);
console.log(gator);

//--------------------------------------------------------------------- Part 2 Display ---------------------------------------------------------------------------

bear.addScore(83)
console.log(bear.scores);

//--------------------------------------------------------------------- Part 3 Display ---------------------------------------------------------------------------
console.log(dog.average());

console.log(displayStatus(bear));
console.log(displayStatus(dog));
console.log(displayStatus(gator)); 

//--------------------------------------------------------------------- Part 4 Display ---------------------------------------------------------------------------

let count = 0;
let oldAdmissionStatus = gator.status();
let newAdmissionStatus = '';
while (gator.average()<90){
    gator.addScore(100);
    count++  
    newAdmissionStatus = gator.status();
    if(newAdmissionStatus !== oldAdmissionStatus){
        console.log(`It took ${count} tests at 100% to raise ${gator.name}'s status to ${gator.status()}`)
        oldAdmissionStatus = gator.status();
    }
}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.