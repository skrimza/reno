$('#form-btn').click(function () {
    
    var checkbox = $('input[checkbox]').val();
    var project = $('#project').val();
    var community = $('#community').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    
    
    $.ajax({
        url: "sendmail.php", 
        type: "POST", 
        dataType: "json", 
        data: { 
            "checkbox": checkbox,
            "project": project,
            "community": community,
            "email": email,
            "phone": phone
        },
        success: function (data) {
            $('.popup').removeclass('active');
            $('.form_messages').addClass('active');
        }
    });
    
});