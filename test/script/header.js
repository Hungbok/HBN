$(function() {
    $('header').prepend($(`
    <div class="header">
        <div class="header-section hide">
            <a class={header_class} {header_link} data-lang={header_data_lang}>{header_menu}</a>
        </div>
    </div>`));
});

window.addEventListener('load', function () {
    $(".header").remove();
})