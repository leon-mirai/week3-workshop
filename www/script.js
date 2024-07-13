$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    $.post(
      "/login",
      {
        email: $("#email").val(),
        password: $("#password").val(),
      },
      function (data) {
        if (data.valid) {
          $("#errormsg").removeClass("showmessage").addClass("hidemessage");
          alert("Login successful!");
        } else {
          $("#errormsg").removeClass("hidemessage").addClass("showmessage");
        }
      }
    );
  });
});
