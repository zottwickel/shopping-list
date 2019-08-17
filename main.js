$(function () {
    $('.shopping-list').on('click', '.shopping-item-toggle', e => {
        e.stopPropagation();
        const element = $($(e.target).parents('li').get()).children('.shopping-item').get(0);
        if ($(element).hasClass('shopping-item__checked')) {
            $(element).removeClass('shopping-item__checked');
        } else {
            $(element).addClass('shopping-item__checked');
        }
    });

    $('.shopping-list').on('click', '.shopping-item-delete', e => {
        e.stopPropagation();
        const element = $(e.target).parents('li').get();
        $(element).remove();
    });

    $('#js-shopping-list-form').submit( e => {
        e.preventDefault();
        const input = $(e.currentTarget).find('#shopping-list-entry').val();
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${input}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `)
    });
})