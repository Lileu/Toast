//  $("#groom-name").keyup(function (event) {
//      var stt = $(this).val();
//      $("#text1").text(stt);
//  });
//  $("#bride-name").keyup(function (event) {
//      var stt = $(this).val();
//      $("#text2").text(stt);
//  });
//  $("#venue-name").keyup(function (event) {
//      var stt = $(this).val();
//      $("#text3").text(stt);
//  });
//  $("#venue-address").keyup(function (event) {
//      var stt = $(this).val();
//      $("#text4").text(stt);
//  });
//  $("#date-time").keyup(function (event) {
//      var stt = $(this).val();
//      $("#text5").text(stt);
//  });


//  $(function () {
//      // Remove button click
//      $(document).on('click', '[data-role="dynamic-fields"] > .form-inline [data-role="remove"]', function (e) {
//          e.preventDefault();
//          $(this).closest('.form-inline').remove();
//      });
//      // Add button click
//      $(document).on('click', '[data-role="dynamic-fields"] > .form-inline [data-role="add"]', function (e) {
//          e.preventDefault();
//          var container = $(this).closest('[data-role="dynamic-fields"]');
//          new_field_group = container.children().filter('.form-inline:first-child').clone();
//          new_field_group.find('input').each(function () {
//              $(this).val('');
//          });
//          container.append(new_field_group);
//      });
//  });

