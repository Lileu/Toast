$(document).ready(function () {
    showEvent( window.location.pathname.split('/').pop());
});

function showEvent(eventId) {
    var $trackingBody = $('#trackingBody');
    
    $.get('/api/tracking/' + eventId, function (data) {
        for(var i = 0; i < data.length; i++) {
            var row = $("<tr>" +
                "<td>" + data[i].guestName  + "</td>" +
                "<td>" + data[i].guestEmail + "</td>" +
                "<td>" + data[i].dateSent +"</td>" +
                "<td>" + data[i].plusOne +"</td>" +
                "<td>" + data[i].rsvpStatus +"</td>" +
                "</tr>"
            );

            $trackingBody.append(row);
        }
    });
}
