$(document).ready(function() {
    $('#medical_form').validate({
        rules:
            {
                fname: {required: true},
                lname: {required: true},
                exercise_level: {required: true},
                favorite_sport: {required: true},
            },
        errorElement: "div",
        errorPlacement: function(error, element) {
            element.before(error);
            }
    });
})


function validate() {
    if ($('#medical_form').valid()) {
        window.open("https://fvargas78.github.io/hw5part1/", "_top")
    }
}
