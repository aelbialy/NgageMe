function displayClass(){
		//provides visualisation for the students in the class.
			for(let i=0; i<classSize; i++){
				var button = document.createElement("button");
				button.setAttribute("id", students[i].id);
				var body = document.getElementById("audienceIndicator");
				button.style.backgroundColor = engagementColours[students[i].engagement];
				button.innerHTML = students[i].name;
				body.appendChild(button);
				
				}

}

function updateEngagementIndicator(){
			for(let i=0; i<classSize; i++){
				let button = document.getElementById(students[i].id);
				button.style.backgroundColor = engagementColours[students[i].engagement];
			}
			for(let i=0; i<classSize; i++){
				students[i].engagement = 0;
			}
}

function updateEngagementAvg(){
	let workingTotal = 0;
	let nonAbsent = 0;
	for(let i = 0; i<classSize; i++){
		let engagement = students[i].engagement;
		workingTotal+=engagement;
		if(engagement!=0){
			nonAbsent++;
		}
	}
	const averageEngagement = workingTotal/nonAbsent;
	engagementAvg.push(averageEngagement);
}



//for demo only
function randomiseEngagement(){
	for(let i=0; i<classSize; i++){
		students[i].engagement = Math.floor(6*Math.random());
	}
}

function createStudents(){
	for(let i = 0; i<15; i++){
		students.push({id: i, name: "Student " + (i+1), engagement: 0});
	}
}

function generateTimeAxis(){
			for(let i = 0; i<31; i++){
				timeAxis.push(i);
			}
}

function chartMe() {
		timeAxis = [];
		generateTimeAxis();
		let avgDataPoints = [];
		
		for(let i = 0; i<timeAxis.length; i++){
			avgDataPoints.push({x: i+1, y:engagementAvg[i]?engagementAvg[i]:null});
		}
    var chart = new CanvasJS.Chart("content",
    {
      theme: "theme9",
      title:{
        text: ""
      },
      axisX: {
        interval:3,
		includeZero:true
      },
      axisY:{
        includeZero: false,
		maximum: 5,
		minimum: 1,
        interval:1
      },
      data: [
      {        
        type: "spline", 
		color: 	"#1abc9c",
		markerType: "none",
        dataPoints: avgDataPoints
      }
      ]	
    });

	chart.render();
}

