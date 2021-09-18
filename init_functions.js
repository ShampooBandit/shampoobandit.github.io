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
	var t = document.getElementById('text1'), t2 = document.getElementById('text2');
	t.style.animation = 'driftUp 5s forwards';
	t.addEventListener('animationend', () => {
		t.style.animation = 'vanish 2s forwards';
		t.addEventListener('animationend', () => {
			t.classList.add('hidden');
			t2.style.animation = 'driftUp 5s forwards';
		})
	})
	t2.addEventListener('animationend', () => {
		t2.style.animation = 'vanish 2s forwards';
		t2.addEventListener('animationend', () => {
			t2.classList.add('hidden');
		})
	})
}

function loadData() {

}