function id(id) { 
	return document.getElementById(id); 
} 

let count = 0; 
let idcount = 0; 

window.onload = () => { 
	for (let i = 0; i < 256; i++) { 

		// Create tile & gave it CSS of the 
		// tile and then append it 
		let tile = document.createElement("p"); 
		tile.id = idcount; 
		idcount++; 
		tile.classList.add("tile"); 
		tile.textContent = ""; 
		// console.log(); 
		id("grid").appendChild(tile); 
	} 

	// Grid will be displayed if setting 
	// the display to none 
	id("togglebtn").addEventListener("click", () => { 
		if (count % 2 == 0) { 
			id("grid").style.display = "none"; 
			count++; 
		} else { 
			id("grid").style.display = "flex"; 
			count++; 
		} 
	}); 
}; 
