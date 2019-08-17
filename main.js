$(function () {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        e.stopPropagation();
        let element = $($(e.target).parents('li').get()).children('.shopping-item').get(0);
        if ($(element).hasClass('shopping-item__checked')) {
            $(element).removeClass('shopping-item__checked');
        } else {
            $(element).addClass('shopping-item__checked');
        }
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        e.stopPropagation();
        let element = $(e.target).parents('li').get();
        $(element).remove();
    });
})