/* Some event */

/* global x */

$('.barmi').on('click', function(e) {
        var thath = $(this);
        var textname = $(this).attr("data-type");
        $('pre').removeClass('prettyprinted');
        $.get(textname, function(loadText) {
            $('pre').text(loadText);
            PR.prettyPrint();
            thath.next('div').show();
        });
    }
);

$('.bezaro-gomb').on('click', function(e) {
    $('.modal').hide();
});


$('#myTabs a').click(function (e) {
  e.preventDefault();
  var hrf = $(this).attr("data-url");
  $('pre').removeClass('prettyprinted');
    
  $('.tab-content .active pre').load(hrf, function() {
    PR.prettyPrint();
  });
});

$("#colOne").height($("#colTwo").height());