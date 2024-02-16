//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score) {
        this.scores.push(score)
    }

    average() {
        let totalOfScores = 0
        for(let i = 0; i < this.scores.length; i++) {
            totalOfScores = totalOfScores + this.scores[i]
        }
        let averageScore = totalOfScores / this.scores.length
        return Math.round(averageScore)
    }
    
    status() {
        let averageScore = this.average()
        if(averageScore >=  90) {
            return 'Accepted'
        } else if (averageScore >= 80 ) {
            return 'Reserve'
        } else if (averageScore >= 70 ) {
            return 'Probationary'
        } else if (averageScore < 70 ) {
            return 'Rejected'
        }
    }
}

let BubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let MerryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let GladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

let attemptsToReserve = 0;

while(GladGator.status() !== 'Reserve') {
        GladGator.addScore(100)
        attemptsToReserve ++
}
let attemptsToAccepted = 0

while(GladGator.status() !== 'Accepted') {
        GladGator.addScore(100)
        attemptsToAccepted ++
}



console.log(`${BubbaBear.name} earned an average test score of ${BubbaBear.average()} % and has a status of ${BubbaBear.status()} .`)
console.log(`${MerryMaltese.name} earned an average test score of ${MerryMaltese.average()} % and has a status of ${MerryMaltese.status()} .`)
console.log(`${GladGator.name} earned an average test score of ${GladGator.average()} % and has a status of ${GladGator.status()} .`)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(attemptsToAccepted)
console.log(attemptsToReserve)


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.