//var submitBtn = $("#submitButton");
    
    //submitBtn.click(function() {
    //    alert( "Valid: " + submitBtn.valid() );
    // });

// if user not filled all the fields, display alert 

// if the required fields has value, then go to next page


// page one button when click next 
//$("#nextButtonPage1").click(function() {
  //  $("#pageOne").addClass('d-none');
  //  $("#pageTwo").removeClass('d-none');
// });

// page two button when click next 
$("#nextButtonPage2").click(function() {
    $("#pageTwo").addClass('d-none');
    $("#pageThree").removeClass('d-none');

    // page two if banks or / insurance is checked
        if( ($("#preferenceBank").is(':checked')) || ($("#preferenceInvestment").is(':checked')) || ($("#preferenceInsurance").is(':checked')) ){
            $("#CCownership").removeClass('d-none');
            $("#occupationOption").removeClass('d-none');
        } else {
            $("#CCownership").addClass('d-none');
            $("#occupationOption").addClass('d-none');
        }
});

// page two button when click back 
$("#prevButtonPage2").click(function() {
    $("#pageTwo").addClass('d-none');
    $("#pageOne").removeClass('d-none');
});

// page three button when click back 
$("#prevButtonPage3").click(function() {
    $("#pageThree").addClass('d-none');
    $("#pageTwo").removeClass('d-none');
});

