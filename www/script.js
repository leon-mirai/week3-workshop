$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get email and password values from the form
    const email = $("#email").val();
    const password = $("#password").val();

    // Send AJAX POST request to login route
    $.post("/login", { email: email, password: password })
      .done(function (data) {
        // Handle successful login response (data from server)
        console.log("Login successful:", data);
        // You can update the page here (e.g., display success message)
      })
      .fail(function (error) {
        // Handle login failure (error message from server)
        console.error("Login failed:", error.responseText);
        $("#errormsg")
          .text("Login failed. Please check your credentials.")
          .removeClass("hidemessage");
      });
  });
});
