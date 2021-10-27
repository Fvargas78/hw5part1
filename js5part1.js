$(document).ready(function(){

  $("#myform").validate({

		messages: {
			name1: "Please enter your name",
            rating: "Please rate your helth",
            occup: "please enter your occupation",
            ethnicity: "Please enter your ethnicity",
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

function validate() {
    if ($('#myform').valid()) {
        window.open("https://fvargas78.github.io/hw5part1.2/","_top")
    }
}
