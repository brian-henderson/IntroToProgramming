function North() {
	var message = "You can not go north this way! Try a different direction.";

	if (currentLocation === "beach") {
		jungle();
	} else if (currentLocation === "cliff") {
		cliffBridge();
	} else if (currentLocation === "archway") {
		jungleDeadEnd();
	} else if (currentLocation === "jungleClearing"){
		archway();
	} else if (currentLocation === "temple") {
		templePyramid();
	} else if (currentLocation === "templePyramid") {
		templePyramidThrone();					
	} else {
		showMessage(message);
	}
}

function East() {
	var message = "You can not head east here! Try a different direction.";

	if (currentLocation === "jungle") {
		cliff();
	} else if (currentLocation ==="cliffBridge") {
		archway();
	} else if (currentLocation === "jungleClearing") {
		temple();
	} else if (currentLocation === "temple") {
		templeTomb();
	} else if (currentLocation === "templeStatue") {
		temple();					
	} else {
		showMessage(message);
	}		
}