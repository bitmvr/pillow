"use strict";

window.addEventListener("DOMContentLoaded", function () {

	var clearPillow		=	document.getElementsByName("pillow")[0].value = '';
	var pillowButton	=	document.getElementById("pillow-submit");

	document.getElementById(pillowButton).addEventListener("click", function () {
  	clearPillow();
	});
});
