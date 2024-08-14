window.addEventListener('load',function() {

    const container = document. getElementById('container');
//-------------------------------------- Fetch Using Traditional syntax------------------------------------------------

    // this.fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
    //     response.json().then(function(data){
    //         console.log(data);

    //         for ( let i=0; i < data.length; i++){
    //             let astronaut = data[i];
    //             container.innerHTML += `
    //             <div class="astronaut">
    //                 <div class="bio">
    //                     <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    //                     <ul>
    //                     <li>Hours in space: ${astronaut.hoursInSpace}</li>
    //                     <li>Active: ${astronaut.active}</li>
    //                     <li>Skills: ${astronaut.skills.join(", ")}</li>
    //                     </ul>
    //                 </div>
    //                 <img class="avatar" src="${astronaut.picture}">
    //             </div>
    //             `;
    //         }
    //     });
    // });
//-----------------------------------------------------------------------------------------------------------------

//-----------------------------Fetch Using modern async/await Sytanx-----------------------------------------------
    async function fetchAndDisplayAstronauts() {
        let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        let data = await response.json();
        // Sorting Descending Hours in Space
        data.sort(function(a,b){
            return a.hoursInSpace < b.hoursInSpace ? 1: -1
        });

        // Count of Astronauts
        const count = document.getElementById('count');
        count.innerHTML = `There are ${data.length} astronauts on this page`

        for ( let i=0; i < data.length; i++){
        let astronaut = data[i];

        // Green text for active astronauts
        let activeClass = astronaut.active ? "active" : "";

        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li class="${activeClass}">Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
        </div>
        `;
        }
    }
    fetchAndDisplayAstronauts();
//------------------------------------------------------------------------------------------------------------------------------
});
