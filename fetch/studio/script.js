//TODO: Add Your Code Below


let astronauts

function addAstronauts() {

const container = document.getElementById('container');

astronauts.forEach(astronaut => {
    const astronautDiv = document.createElement('div');
    astronautDiv.className = 'astronaut';

    const bioDiv = document.createElement('div');
    bioDiv.className = 'bio';

    const name = document.createElement('h3');
    name.innerText = `${astronaut.firstName} ${astronaut.lastName}`;
    bioDiv.appendChild(name);

    const ul = document.createElement('ul');
    const hoursInSpace = document.createElement('li');
    hoursInSpace.innerText = `Hours in space: ${astronaut.hoursInSpace}`;
    ul.appendChild(hoursInSpace);

    const activeStatus = document.createElement('li');
    activeStatus.innerText = `Active: ${astronaut.active}`;
    ul.appendChild(activeStatus);

    const skills = document.createElement('li');
    skills.innerText = `Skills: ${astronaut.skills.join(', ')}`;
    ul.appendChild(skills);
    bioDiv.appendChild(ul);

    astronautDiv.appendChild(bioDiv);

    const img = document.createElement('img');
    img.className = 'avatar';
    img.src = astronaut.picture;
    astronautDiv.appendChild(img);

    container.appendChild(astronautDiv);
});
}

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
        })
        .then(function(json) {
            astronauts = json;
            console.log(json);
            addAstronauts(); // Call addAstronauts here, inside the callback
        })
        .catch(function(error) {
            console.error("Could not load astronauts:", error);
        });
    
});