$(document).ready(function () {
    $(".alert-success").hide();
    $('#formGuestInvitation').on('submit', onFormGuestInvitationSubmit);
});

function onFormGuestInvitationSubmit(event) {
    event.preventDefault();

    var formData = { guests: [] };
    var fields = [
        "groomName",
        "brideName",
        "venueName",
        "venueAddress",
        "eventDate"
    ];

    for (var i = 0; i < fields.length; i++) {
        var el = $('[name="'+fields[i]+'"]');    
        formData[fields[i]] = el.val();
    }
    
    var guestNames = $('[name="guestName[]"]');
    
    guestNames.each(function() {
        formData.guests.push({
            name: $(this).val(),
            email: $(this).parent().find('[name="guestEmail[]"]').val()
        });
    });

    // Send the PUT request.
    $.ajax("/api/invitation1/", {
        type: "POST",
        data: formData
    }).then(
        function () {
            // location.reload();
        }
    );

    $(".alert-success").show();
}


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

