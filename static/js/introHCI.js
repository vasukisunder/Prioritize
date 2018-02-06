'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("CLICK ME");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick)
}

function projectClick(e) {
	/*console.log("Project clicked");*/
	e.preventDefault();
	$(this).css("background-color", "#ff0000");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	//$(this).fadeToggle("slow", "linear");
    	$(".project-description").fadeToggle("slow", "linear");
    	//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}