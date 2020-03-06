$(function () {
    $(".button").click(function () {
        $(".button-active").attr('class', 'button');
        $(this).attr('class', 'button-active');
    })
})