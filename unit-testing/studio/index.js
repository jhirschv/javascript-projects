
let launchOutput = (num) => {
    if(!num % 2 == 0 || !num % 3 == 0 || !num % 5) {
        return "Rutabagas! That doesn't work."
    }
}

let launchcode = {
  "organization": "nonprofit",
  "executiveDirector": "Jeff",
  "percentageCoolEmployees": 100,
  "programsOffered": ["Web Development", "Data Analysis", "Liftoff"],
  "launchOutput": launchOutput
}

module.exports = launchcode

