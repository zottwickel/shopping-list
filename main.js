$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    let listItem = $(this.parent().parent().parent().children('.shopping-item'))
    if (listItem.hasClass('shopping-item__checked')) {
        listItem.removeClass('shopping-item__checked');
    } else {
        listItem.addClass('shopping-item__checked');
    }
});

$('.shopping-list').on('click', 'shopping-item-delete', function(e) {
    $(this.parent().parent().parent()).remove();
});