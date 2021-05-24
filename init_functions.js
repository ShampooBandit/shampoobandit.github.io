function initSquares()
{
	//itemSpots = {}
   	var i;
   	for(i = 0; i < 1; i++)
   	{
   		var elm = document.createElement("input");
   		var body = document.getElementById("body");

   		//itemSpots[i] = new itemSpot();

   		elm.type = "image";
   		elm.src = "Images/receptacle.png";
   		elm.addEventListener('mouseenter', scale(1,1));
   		elm.addEventListener('mouseleave', scale(0.5,0.5));

   		body.appendChild(elm);
   	}
}