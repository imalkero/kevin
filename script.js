const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        callback(xhr.status, xhr.response);
    };
    xhr.send();
};
//Abrufen der API durch getJSON
//Ausführung bei kompletter Ladung window.onload
window.onload = (E) => {
	const bmiform = document.querySelector("#bmiCalculator");
	const gggg = document.querySelector("#gggg");
	const head1 = document.querySelector("h1");
	const Textfeld = document.querySelector("#bodyweight");
	
	
//html Elemente	
	bmiform.addEventListener("submit", (event) => {
		event.preventDefault();
		
		getJSON("https://www.scorebat.com/video-api/v1/", (status, res) => {
			var neu = [];
			res.forEach(el => {
				if(el.title.toUpperCase().includes(Textfeld.value.toUpperCase())) {
					neu.push(el);
				}
			});
			
			if(neu.length === 0) {
				gggg.innerHTML = "";
				head1.innerText = "Nicht gefunden";
			} else {			
				var match = neu[Math.round(Math.random() * (neu.length - 1))];
				// züfällig aus "res" ein Zeug holen(Randomizer)
				gggg.innerHTML = match.embed;
			
				head1.innerText = match.title;
			}
		});
		
	});
// Klickevent wird ausgeführt und durch prevent wird neuladen verhindert

	
}