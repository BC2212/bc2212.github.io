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

    $(button[0]).attr("class", "button-active");
    $(section[0]).removeClass("section-hidden");

    var imageBox = $(".image-box");
    var modal = $("#myModal");
    var modalImg = $("#modalContent");
    var modalClose = $("#modalClose");

    $.each(imageBox, function (i, e) {
        $(e).click(function () {
            var imageUrl = $(e).css("background-image");

            modal.css("display", "block");
            modalImg.css('background-image', imageUrl);

            modalClose.click(function () {
                modal.css("display", "none");
            });
        });
    });
});