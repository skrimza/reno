$('#form-btn').on('click', function (e) {
    e.preventDefault();
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
            $('.popup').removeClass('active');
            $('.form_messages').toggleClass('active');
            $('.mobile-menu').removeClass('active');
        },
        error: function (response) {
            alert("error");
        }
    });

    return false;
});


$('.form_messages__btn').on('click', function() {
    $('.form_messages').removeClass('active');
});