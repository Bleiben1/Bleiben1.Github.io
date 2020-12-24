'use strict';

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/

function responsiveNav() {
    var navegacion = document.getElementById("navegacion");
    if (navegacion.className === "") {
        navegacion.className += "responsive";
        console.log("jajajajaj");
    } else {
        navegacion.className = "";
    }
}