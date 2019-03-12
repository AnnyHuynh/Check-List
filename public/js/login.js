
$(function() {
  //----------////

  console.log("login.js has been loaded");

  // CREATE(POST) OPERATIONS ////

  // Click functionality of register button.
  $("#login-button").on("click", function(event) {
    // Prevent default submit event.
    event.preventDefault();

    // Check to see if this button works.
    console.log("The #login-button has been clicked!");

    // Variables (for Validation) ////
    var userEmail = $("#user-email").val().trim();
    var userPassword = $("#user-password").val().trim();

    var userData = {
      email: $("#user-email").val().trim(),
      password: $("#user-password").val().trim(),
    };

    if (!userEmail) {
      console.log("Please enter email");
    }

    if (!userPassword) {
      console.log("Please enter password");
    }

    loginUser(userData.email, userData.password);

  });

  });

  

