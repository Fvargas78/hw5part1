$(document).ready(function(){

  $("#myform").validate({

		messages: {
	    fname: "Please enter your name",
            gender: "Please choose your gender",
            exercise: "how often do you exercise",
            hobbies: "Please choose your favorite hobbie",
	    },

  /* the following is needed to place an error msg after the radio and checkbox elements */

  errorPlacement: function(error, element) {
  if ( element.is(":radio") || element.is(":checkbox")) {
    error.appendTo( element.parent());
  } else {
    error.insertAfter(element.parent());
  }
  } // end errorPlacement
 }); 
});
