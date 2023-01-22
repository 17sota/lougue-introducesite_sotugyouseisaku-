
'use start'

$(function () {
    const hamburger = $(".hamburger");
    const nav = $(".nav");

    hamburger.click(function () {
        $(this).find(".hamburger_bar").toggleClass("is_active");
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });

    // スクロール
    $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });

    // グローバルナビメニューのリンクをクリックしたらページを閉じる
    $("#g-nav ul li a").on("click", function () {
        $(".hamburger_bar").removeClass("is_active");
        $("#g-nav").removeClass('panelactive');
        return false;
    });
});

document.querySelectorAll('a[href^="#"]').formach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        // const target = document.querySelector(link.hash),
        //   adjust = 50,
        //    offsetTop = window.pageYOffset + target.getBoundingClientRect().top

        console.log(window.pageoffment)
    })
})


