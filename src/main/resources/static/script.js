var pageCounter = 1;
var btn = document.getElementById("btn");
var swapiDiv = document.getElementById("info"); 

btn.addEventListener("click", function() {

	var ourRequest = new XMLHttpRequest();


	ourRequest.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json" + pageCounter + "/?format=json");

	
	ourRequest.send();

	
	
	ourRequest.onload = function() {

	console.log(ourRequest.responseText);
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
	};

		
	pageCounter++; 
	
	ArrayList<complete> comp = new ArrayList<complete>();
	for (int i = 0; i < comp.size(); i++) {
		complete complete = (complete)comp.get(i);
	    
	}
	
	
//	if (pageCounter > 15) {
//		btn.classList.add("hide-me"); // hides button after we get to 15
//	}
});


function renderHTML(data) { 
	var htmlString = "<p>" + data.year"</p>";
	swapiDiv.insertAdjacentHTML("beforeend", htmlString);
}
	




