function displayClass(){
		//provides visualisation for the students in the class.
			for(let i=0; i<classSize; i++){
				var button = document.createElement("button");
				button.setAttribute("id", students[i].id);
				var body = document.getElementById("sidebar");
				button.style.backgroundColor = engagementColours[students[i].engagement-1];
				button.innerHTML = students[i].name;
				body.appendChild(button);
				
				}

}

function updateEngagementIndicator(){
			for(let i=0; i<classSize; i++){
				let button = document.getElementById(students[i].id);
				button.style.backgroundColor = engagementColours[students[i].engagement-1];
			}
}

function updateEngagementAvg(){
	let workingTotal = 0;
	for(let i = 0; i<classSize; i++){
		workingTotal+=students[i].engagement;
	}
	const averageEngagement = workingTotal/classSize;
	engagementAvg.push(averageEngagement);
}

function timeStep(){
	document.getElementById("timestamp").innerHTML = timeStamp;
	timeStamp++;
	randomiseEngagement();
	updateEngagementAvg();
	updateEngagementIndicator();
	if(timeStamp<maxClassTime+1){
		setTimeout(timeStep, 1000);
	}
} 

//for demo only
function randomiseEngagement(){
	for(let i=0; i<classSize; i++){
		students[i].engagement = Math.floor(5*Math.random());
	}
}

function createStudents(){
	for(let i = 0; i<15; i++){
		students.push({id: i, name: "Student " + (i+1), engagement: 1});
	}
}