$(function () {
    $(".button").click(function () {
        $(".button-active").attr('class', 'button');
        $(this).attr('class', 'button-active');
    });

    $($(".button")[0]).attr("class", "button-active");
})