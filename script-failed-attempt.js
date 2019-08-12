$(document).ready(function(){

    // Initialize pages
    $("section[data-step]").addClass('d-none');
    $("#prevButton").addClass('d-none');
    $("#submitButton").addClass('d-none');
    $("#occupationOption").addClass('d-none');
    $("#CCownership").addClass('d-none');
    $("section input[type='checkbox']").attr("checked","checked");
    
    // display first page
    $("section[data-step=1]").removeClass('d-none');

    // prepare array variable for topic interest 
    var submittedAnswers = {
        name: "",
        email: "",
        gender: "",
        birthday: "",
        topicpreference: [],
        province: "",
        city: "",
        occupation: "",
        NumberOfCreditCards : 0
    };


    // *** Controlling the page button    
    //start page from number 1
    var page = 1;
    checkPage(page);
    displayPage(page);
    
    // when next button clicked, add 1 to page.
    $("#nextButton").click(function(e){
        e.preventDefault();
        page += 1;

        checkPage(page);
        displayPage(page);
        controlButton(page);       
    });

    // only display prev button when page is above 1
    $("#prevButton").click(function(e){
        e.preventDefault();
        page -= 1;
        checkPage(page);
        displayPage(page);
        controlButton(page);
    });


    function checkPage(curPage) {
        console.log('Current Page is: ' + curPage);
    }

    function controlButton(curPage){
        // display prev button when page is above 1
        if( curPage > 1 ) {
            $('#prevButton').removeClass('d-none');
        } else {
            $('#prevButton').addClass('d-none');
        }
        // remove next button from clicking when reaching page 3, change with submit button
        if(curPage == 3) {
            $("#nextButton").addClass('d-none');
            $("#submitButton").removeClass('d-none');
        } else {
            $("#nextButton").removeClass('d-none');
            $("#submitButton").addClass('d-none');  
        }
    }


    function displayPage(curPage){
       switch(curPage){
            case 1:
               
               $("#pageOne").removeClass('d-none');
               $("#pageTwo").addClass('d-none');
               $("#pageThree").addClass('d-none');
                

               validateField( "SubscriberName", "name" ); 

                $("#SubscriberEmail").on('change', function(){
                    if(  $("#SubscriberEmail").val() !== ""){ 
                        submittedAnswers.email = $("#SubscriberEmail").val();
                    } else {
                        $(this).addClass("is-invalid");
                    }
                });
                $("#Gender").on('change', function(){
                    if ( $("#Gender").val() !== "") {
                        submittedAnswers.gender = $("#Gender").val();
                    } else {
                        $(this).addClass("is-invalid");
                    }
                });
                
                $('#nextButton').on('click', function(){

                       console.log(submittedAnswers.name);
                       console.log(submittedAnswers.email);
                       console.log(submittedAnswers.gender);
                });

            break;
            case 2:
              
               $("#pageOne").addClass('d-none');
               $("#pageTwo").removeClass('d-none');
               $("#pageThree").addClass('d-none');

            break;
            case 3:
              
               $("#pageOne").addClass('d-none');
               $("#pageTwo").addClass('d-none');
               $("#pageThree").removeClass('d-none');
            break;
            default:
                console.log('Loh');
            break;
       }
       console.log('this is page '+curPage);
    };


    function validateField( idname, objSpot ) {
        //var theidname = $("#" + idname);
        console.log(idname);
        console.log(objSpot);
        $("#"+idname).on('change', function(){
            if( $("#"+idname).val() !== ""){ 
                submittedAnswers.objSpot = $("#"+idname).val();
               
            } else {
                $(this).addClass("is-invalid");
            }
        });
        console.log(this);
    }


});


