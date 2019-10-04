$(document).ready(function () {
  $(".alert-success").hide();
  $(function () {
    $("#submit-rsvp-btn").on("click", function () {
      // hardcoded guest id 
      var id = window.location.pathname.split('/').pop();
      var rsvpData = {
        rsvpStatus: $("input[name=attendance]:checked").val(),
        plusOne: $("input[name=plus-one]:checked").val()
      };

      // Send the PUT request.
      $.ajax("/api/rsvp/" + id, {
        type: "PUT",
        data: rsvpData
      }).then(
        function () {
          console.log("changed rsvp to", newRsvp);
          console.log("changed +1 to", plusOne);
        }
      );
      $(".alert-success").show();
    });
  });
});