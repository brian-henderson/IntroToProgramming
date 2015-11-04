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

function South() {
	var message = "You can't go south here. Try a different direction.";

	if (currentLocation === "jungle") {
		beach();
	} else if (currentLocation === "cliffBridge") {
		cliff();
	} else if (currentLocation === "jungleDeadEnd") {
		archway();
	} else if (currentLocation === "archway") {
		jungleClearing();
	} else if (currentLocation === "templePyramid") {
		temple();
	} else if (currentLocation === "templePyramidThrone") {
		templePyramid();					
	} else {
		showMessage(message);
	}
}