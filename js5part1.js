$(document).ready(function(){

  $("#myform").validate({

		messages: {
			name1: "Please enter your name",
            rating: "Please choose your gender",
            occup: "how often do you exercise",
            ethnicity: "Please choose your favorite hobbie",
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
