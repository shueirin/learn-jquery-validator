$(document).ready(function(){

    // Initialize pages
    $("section[data-step]").addClass('d-none');
    $("button.btn-outline-secondary").addClass('d-none');
    $("#occupationOption").addClass('d-none');
    $("#CCownership").addClass('d-none');
    $("section input[type='checkbox']").attr("checked","checked");
    
    // display first page
    $("section[data-step=1]").removeClass('d-none');

    // prepare array variable for topic interest 
    var pickedTopic = [];


   

    
     // Set date input from the form
     var bdayform = $('#BirthdayForm');

     bdayform.on('change', function(){

         var birthyear = $("#Birthyear").val();
         var birthmonth =  $("#Birthmonth").val();  
         var birthdate =  $("#Birthdate").val();

         var birthday = birthyear + "-" + birthmonth + "-" + birthdate;

         // assign the birthday value;
         $('#Birthday').val(birthday);
         
     });



    
    // Set click events for validate and navigate
    $("button[type='submit']").on("click",function(e){
        
        e.preventDefault();
        var step = $("form").data("step");
        var isValid = true;
       

        // validate check for all text input
        $("section[data-step='" + step +"'] input[required='required']").each(function(idx, elem) { 
            $(elem).removeClass("is-invalid");
            if($(elem).val().trim() === "") {
                isValid = false;
                $(elem).addClass("is-invalid");
            } 
        });

        // validate check for all select input 
        $("section[data-step='" + step +"'] select").each(function(idx, selc) { 
            $(selc).removeClass("is-invalid");
            if($(selc).val() === "") {
                isValid = false;
                $(selc).addClass("is-invalid");
            } 
        });

        
        // collect the values from selected checkbox
        $("section[data-step='" + step +"'] input[type='checkbox']:checked").each(function(idx, chkb) {
            pickedTopic.push($(this).val());
        });
        
        // assign selected topics to array
        $("#topicPreference").val(pickedTopic.join(", "));


        // show CC ownership and Occupation field when checkbox with value bank, investment, and insurance is chosen 
        if (($.inArray("Bank", pickedTopic) !== -1) || ($.inArray("Insurance", pickedTopic) !== -1) || ($.inArray("Investment", pickedTopic) !== -1))
        {
            //console.log("Ada!"); if one of above topic exist, show the cc ownership and occupation field
            $("#CCownership").removeClass('d-none');
            $("#occupationOption").removeClass('d-none');

        } else {
            //console.log("Ga ada!"); else, don't display them
            $("#CCownership").addClass('d-none');
            $("#occupationOption").addClass('d-none');

        }

       
        // if fields valid, go to next page, adjust the step, hide the current page, display the next page
        if (isValid) {
            step += 1;
            if (step > $("section[data-step").length){
                $("form").submit();  // submit the form to URL in acton attribute
            }
            $("form").data("step", step);
            $("section[data-step]").addClass('d-none');
            $("section[data-step='"+ step + "']").removeClass('d-none');
            $("button.btn-outline-secondary").removeClass('d-none');

           
    


            console.log(pickedTopic);
        }

        //console.log(step);
        //console.log(pickedTopic);
       
        // on last step, change the button text to 'submit
        if (step == 3) {
            $('#submitButton').text("Submit");
        }

        if (step == 4) {
            $('#prevButtonPage3').addClass("d-none");
            $('#submitButton').addClass("d-none");

            var result = $("form").serializeArray();
            $.each(result.reverse(), function(i, field){
                $('#closingWord').after(field.name + " : " + field.value + "<br />");
            });
            
        }

    
    });

    // when back button clicked, adjust the step and hide the current page, display the previous page
    $("button.btn-outline-secondary").click(function(e){
        e.preventDefault();
        var step = $("form").data("step");
        step -= 1;
        $("form").data("step", step);
        $("section[data-step]").addClass('d-none');
        $("section[data-step='"+ step +"']").removeClass('d-none');  
        if(step === 1) {
            $("button.button-outline").addClass('d-none');
        }              
    });
});