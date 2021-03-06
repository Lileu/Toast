$(document).ready(function () {
  $("#logoutbtn").hide();
  $("#sign-in").on("click", function (event) {
    event.preventDefault();
    $("#signinmodal").modal("show");
  });

  $("#sign-up").on("click", function (event) {
    event.preventDefault();
    // console.log("clicked");
    $("#signinmodal").modal("hide");
    $("#signupmodal").modal("show");
    var isUserLoggedIn = userloggedin();
    if (isUserLoggedIn) {
      console.log("loggedin");
      $("#signinbtn").hide();
      $("#logoutbtn").show();
    }
  });

  $("#logoutbtn").on("click", function () {
    // event.preventDefault();
    // alert("You have logged out successfully");
    // $("#logoutbtn").hide();
    // window.location.reload();
    userloggedout();
  });

  // $("#fblogin").on("click", function (event) {
  //   event.preventDefault();
  //   return;
  //   //userloggedin();
  // });

});
function userloggedout() {
  $.get("/logout").then(function (res) {
    res.json("/");
  });
}

function userloggedin() {

  $.get("/api/user_data").then(function (user) {
    if (user.id !== undefined) {
      console.log("logged in");
      $("#signinbtn").hide();
      $("#logoutbtn").show();
    }
  });
}

userloggedin();
// LOGIN HERE
// Getting references to our form and inputs
var loginForm = $("form.login");
var emailInput = $("input#email-input");
var passwordInput = $("input#password-input");

// When the form is submitted, we validate there's an email and password entered
loginForm.on("submit", function (event) {
  event.preventDefault();
  var userData = {
    email: emailInput.val().trim(),
    password: passwordInput.val().trim()
  };

  if (!userData.email || !userData.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(userData.email, userData.password);
  emailInput.val("");
  passwordInput.val("");
});

// loginUser does a post to our "/" route and if successful, redirects us the the members page
function loginUser(email, password) {
  $.post("/invitation", {
    email: email,
    password: password
  }).then(function (data) {
    window.location.replace(data);
    $("#signinbtn").hide();
    // If there's an error, log the error
  }).catch(function (err) {
    console.log(err);
  });
}

// SIGNUP HERE
// Getting references to our form and input
var signUpForm = $("form.signup");
var emailInput = $("input#email-input");
var passwordInput = $("input#password-input");

// When the signup button is clicked, we validate the email and password are not blank
signUpForm.on("submit", function (event) {
  event.preventDefault();
  var userData = {
    email: emailInput.val().trim(),
    password: passwordInput.val().trim()
  };

  if (!userData.email || !userData.password) {
    return;
  }
  // If we have an email and password, run the signUpUser function
  signUpUser(userData.email, userData.password);
  emailInput.val("");
  passwordInput.val("");
});

// Does a post to the signup route. If succesful, we are redirected to the members page
// Otherwise we log any errors
function signUpUser(email, password) {
  $.post("/api/signup", {
    email: email,
    password: password
  }).then(function (data) {
    window.location.replace(data);
    $("#signinbtn").hide();
    console.log("clicked");
    // If there's an error, handle it by throwing up a boostrap alert
  }).catch(handleLoginErr);
}

function handleLoginErr(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}

// MEMBERS HERE
// This file just does a GET request to figure out which user is logged in
// and updates the HTML on the page
$.get("/api/user_data").then(function (data) {
  $(".member-name").text(data.email);
});

// If user has been logged in and redirected


// Burger Menu 
function myFunction(x) {
  x.classList.toggle("change");
}
