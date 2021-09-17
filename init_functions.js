function checkForData() {
	if(!localStorage.getItem('save')) {
		populateStorage();
		firstTime();
	}
	else {
		loadData();
	}
}

function populateStorage() {
	localStorage.setItem('save', true);
}

function firstTime() {
	document.getElementById('text1').style.animation('driftUp 5s')
}

function loadData() {

}