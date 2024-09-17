//your JS code here. If required.

const squares=document.querySelectorAll(".square");
// console.log(squares);
squares.forEach(square=>{
	// console.log(square);
	square.addEventListener("mouseenter",function(){
		squares.forEach(otherdiv=>{
			if(otherdiv!==this){
				otherdiv.style.backgroundColor='#6F4E37';
			}
		});
	});
	square.addEventListener("mouseleave",function(){
		squares.forEach(otherdiv=>{
			otherdiv.style.backgroundColor='#E6E6FA';
		});
	});
});