$(function() {
    $(".open-modal").animatedModal({
        beforeOpen: function(el) {
            var id = $(el).data('page');
            $('#page-here').html($('#'+id).html());
        }
    });

    $('.badge-skill').click(function() {
        var isActive = $(this).hasClass('active');
        $('.badge-skill').removeClass('active');
        if (isActive) {
            $('.card').removeClass('card-disabled');
        } else {
            $(this).addClass('active');
            $('.card').addClass('card-disabled');
            var projects = $(this).data('projects').toString().split(',').join(', #');
            $('#'+projects).removeClass('card-disabled');
        }
    });
});
