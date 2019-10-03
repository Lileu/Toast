$(document).ready(function () {
    $(".alert-success").hide();
    $(function () {
        $("#submit-event").on("click", function () {
            var eventDetails = {
                groomName: $("#groom-name").val(),
                brideName: $("#bride-name").val(),
                venueName: $("#venue-name").val(),
                venueAddress: $("#venue-address").val(),
                eventDate: $("#date-time").val(),
            }

            // Send the PUT request.
            $.ajax("/api/invitation/", {
                type: "PUT",
                data: eventDetails
            }).then(
                function () {
                    console.log(groomName);
                    console.log(brideName);
                    console.log(venueName);
                    console.log(venueAddress);
                    console.log(eventDate);
                }
            );
            $(".alert-success").show();
        });
    });
});

    $("#groom-name").keyup(function (event) {
        var stt = $(this).val();
        $("#text1").text(stt);
    });
    $("#bride-name").keyup(function (event) {
        var stt = $(this).val();
        $("#text2").text(stt);
    });
    $("#venue-name").keyup(function (event) {
        var stt = $(this).val();
        $("#text3").text(stt);
    });
    $("#venue-address").keyup(function (event) {
        var stt = $(this).val();
        $("#text4").text(stt);
    });
    $("#date-time").keyup(function (event) {
        var stt = $(this).val();
        $("#text5").text(stt);
    });

