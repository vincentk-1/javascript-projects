// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff"); 
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const rocket = document.getElementById('rocket');
    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    takeOffButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    
        if (response === true)
        {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        document.getElementById("shuttleBackground").style.background = "blue"
        altitude = 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = altitude 
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        }
        });

    landButton.addEventListener('click', event => {
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        resetRocket();

        });    

    abortButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that you want to abort the mission.");
    
        if (response === true)
        {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        resetRocket();    
        }
        });
            
    document.addEventListener("click",function(event){
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
        if (event.target.id ==="left" && rocketPosX > -(bkgWidth/2-40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px'
        }
        if (event.target.id ==="right" && rocketPosX < (bkgWidth/2-40)) {
            rocketPosX += 10
            rocket.style.marginLeft = rocketPosX + 'px'

        }
        if (event.target.id ==="up" && altitude < 250000) {
            rocketPosY += 10   
            rocket.style.marginBottom = rocketPosY + 'px'
            altitude += 10000
            document.getElementById("spaceShuttleHeight").innerHTML = altitude;
        }
        if (event.target.id ==="down" && altitude > 0 ) {
            rocketPosY -= 10
            rocket.style.marginBottom = rocketPosY + 'px'
            altitude -= 10000
            document.getElementById("spaceShuttleHeight").innerHTML = altitude;
        }

    });

    function resetRocket() {
        document.getElementById("shuttleBackground").style.background = "green"
        altitude = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = altitude;
        rocketPosX =0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px'
    }

}

window.addEventListener("load", init);
