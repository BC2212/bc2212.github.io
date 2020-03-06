$(function () {
    var button = $(".button");
    var section = $(".section");

    $.each(button, function (i, e) {
        $(e).click(function () {
            $(".button-active").attr("class", "button");
            $(e).attr("class", "button-active");
            section.addClass("section-hidden");
            $(section[i]).removeClass("section-hidden");
        })
    })

    // $(".button").click(function () {
    //     console.log(getIndex($(this)))

    //     $(this).attr('class', 'button-active');
    // });

    $(button[0]).attr("class", "button-active");
    $(section[0]).removeClass("section-hidden");
})