$(document).ready(function() {

    // Custom method to validate username
    $.validator.addMethod("usernameRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
    }, "Username must contain only letters, numbers");

    $("#nextButton").click(function() {
        var form = $("#allForm");
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block invalid-feedback',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-control').addClass("is-invalid");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("is-invalid");
            },
            rules: {
                name: {
                    required: true,
                    usernameRegex: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true
                },
                gender: {
                    required: true
                },
                topicPreference: {
                    required: true,
                    minlength: 1
                  }
                

            },
            messages: {
                name: {
                    required: "Harap masukkan nama Anda",
                    minlength: "Minimal 3 huruf",
                },
                email: {
                    required: "Harap masukkan email",
                    email: "Harap masukkan email yang benar"
                },
                gender: {
                    required: "Harap masukkan pilihan",
                },
                topicPreference: {
                    required: "Harap Pilih",
                    minlength: "harap pilih 1"
                  }
            }
        });
        if (form.valid() === true) {
            if ($('#basic_info').is(":visible")) {
                current_fs = $('#basic_info');
                next_fs = $('#topic_preference');
            } else if ($('#topic_preference').is(":visible")) {
                current_fs = $('#topic_preference');
                next_fs = $('#additional_info');
            }

            next_fs.show();
            current_fs.hide();
        }
    });

    $('#prevButton').click(function() {
        if ($('#topic_preference').is(":visible")) {
            current_fs = $('#topic_preference');
            next_fs = $('#basic_info');
        } else if ($('#additional_info').is(":visible")) {
            current_fs = $('#additional_info');
            next_fs = $('#topic_preference');
        }
        next_fs.show();
        current_fs.hide();
    });


});