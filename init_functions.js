function initSquares()
{
	//itemSpots = {}
   	var i;
   	for(i = 0; i < 1; i++)
   	{
   		var elm = document.createElement("img");

   		//itemSpots[i] = new itemSpot();

   		elm.src = "Images/receptacle.png";
   		elm.addEventListener('mouseenter', scale(1,1));
   		elm.addEventListener('mouseleave', scale(0.5,0.5));
   	}
}