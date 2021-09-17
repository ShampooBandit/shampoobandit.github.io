function checkForData() {
	firstTime();
	if(!localStorage.getItem('save')) {
		populateStorage();
	}
	else {
		loadData();
	}
}

function populateStorage() {
	localStorage.setItem('save', true);
}

function firstTime() {
	document.getElementById('text1').style.animation = 'driftUp 5s forwards';
}

function loadData() {

}