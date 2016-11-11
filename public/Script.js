//Draw a Line

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();





//Examples of drawing on canvas.


/*
//Draw a circle 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
Try it Yourself »


*/


/*
//Draw text

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);


*/

/*
//Stroke text

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);



*/

/*
//Draw linear Gradient

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

*/

/*
//Draw circular Gradient

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
*/

/*
//Draw image

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img,10,10);
*/


// End of: Examples of drawing on canvas.



/*Create a Function to Set The Google Map Properties
This example defines a Google Map centered in London, England:


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

    Example Explained
The mapOptions variable defines the properties for the map.

The center property specifies where to center the map (using latitude and longitude coordinates).

The zoom property specifies the zoom level for the map (try to experiment with the zoom level).

The mapTypeId property specifies the map type to display. The following map types are supported: ROADMAP, SATELLITE, HYBRID, and TERRAIN.

The line: var map=new google.maps.Map(document.getElementById("map"), mapOptions); creates a new map inside the <div> element with id="map", using the parameters that are passed (mapOptions).


End of Google Map example.
*/