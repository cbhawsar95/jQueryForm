/*For Create slide down Form*/
  $(document).ready(function(){
    $("#login").click(function(){
        $("#panel").slideToggle("slow");
    });
    $("#registration").click(function(){
        $("#panel1").slideToggle("slow");
    });
    $("#inquiry").click(function(){
        $("#panel2").slideToggle("slow");
    });
    $("#feedback").click(function(){
        $("#panel3").slideToggle("slow");
    });

    $("#login,#registration,#inquiry,#feedback").click( function() { 
          $(this).css("color", "#c40b1e");
          $(this).css("background-color", "#eee");
    });

});
/*For Login Form Validations*/
  $(document).ready(function() {

  $('#loginForm').submit(function(e) {
    e.preventDefault();
    var first_name = $('#fname').val();
    var last_name = $('#lname').val();
    var email = $('#email').val();
    var password = $('#password').val();

    $(".error").remove();

    if (first_name.length < 1) {
      $('#fname').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#lname').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        /*alert("Not a valid e-mail address");*/
        $('#email1').after('<span class="error">Enter a valid email</span>');
        return false;
        }
      /*  var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }*/
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    }
  });

});

/*For Registration Form Validations*/
  $(document).ready(function() {

  $('#registerForm').submit(function(e) {
    e.preventDefault();
    var first_name = $('#fname1').val();
    var last_name = $('#lname1').val();
    var email = $('#email1').val();
    var password = $('#password1').val();
    var d = document.forms["registerForm"]["date"].value;
    var m = document.forms["registerForm"]["month"].value;
    var y = document.forms["registerForm"]["year"].value;
    $(".error").remove();

    if (first_name.length < 1) {
      $('#fname1').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#lname1').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email1').after('<span class="error">This field is required</span>');
    } else {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        /*alert("Not a valid e-mail address");*/
        $('#email1').after('<span class="error">Enter a valid email</span>');
        return false;
    }

/*      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email1').after('<span class="error">Enter a valid email</span>');
      }*/
    }
    if (password.length < 8) {
      $('#password1').after('<span class="error">Password must be at least 8 characters long</span>');
    }

        if(d == null || d == ""){
            /*alert("Please select date.");*/
            $('#y').after('<span class="error">Please select Date</span>');
            return false;
        }
        if(m == null || m == ""){
           /* alert("Please select date.");*/
           $('#y').after('<span class="error">Please select Date</span>');
            return false;
        }
        if(y == null || y == ""){
            /*alert("Please select date.");*/
            $('#y').after('<span class="error">Please select Date</span>');
            return false;
        }
        if((m == 4 || m == 6 || m == 9 || m == 11) && d == 31) {
            /*alert("Selected month contains only 30 days.");*/
            $('#y').after('<span class="error">Selected month contains only 30 days.</span>');
            return false;
        }
        if(m == 2 && d > 29 && (y%4 == 0)) {
            /*alert("Selected month contains only 29 days.");*/
            $('#y').after('<span class="error">Selected month contains only 29 days.</span>');
            return false;
        }

        if((m == 2) && d > 28) {
            /*alert("Selected month contains only 28 days.");*/
            $('#y').after('<span class="error">Selected month contains only 28 days.</span>');
            return false;
        }
        return true;
  });

});

/*For InquiryForm Validations*/
  $(document).ready(function() {

  $('#inquiryForm').submit(function(e) {
    e.preventDefault();
    var first_name = $('#fname2').val();
    var last_name = $('#lname2').val();
    var email = $('#email2').val();
    var password = $('#password2').val();

    $(".error").remove();

    if (first_name.length < 1) {
      $('#fname2').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#lname2').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email2').after('<span class="error">This field is required</span>');
    } else {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        /*alert("Not a valid e-mail address");*/
        $('#email1').after('<span class="error">Enter a valid email</span>');
        return false;
        }
/*      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email2').after('<span class="error">Enter a valid email</span>');
      }*/
    }
    if (password.length < 8) {
      $('#password2').after('<span class="error">Password must be at least 8 characters long</span>');
    }
  });

});

/*For Feedback Form Validations*/

$(document).ready(function() {

  $('#feedbackForm').submit(function(e) {
    e.preventDefault();
    var email = $('#email3').val();
    var feedback = $('#feedback1').val();

    $(".error").remove();

    if (email.length < 1) {
      $('#email3').after('<span class="error">This field is required</span>');
    } else {
      var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        /*alert("Not a valid e-mail address");*/
        $('#email1').after('<span class="error">Enter a valid email</span>');
        return false;
      }
   /*var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email3').after('<span class="error">Enter a valid email</span>');
      }*/
    }

    if (feedback.length < 1) {
      $('#feedback1').after('<span class="error">This field is required</span>');
    }
  });

});