'use start'

$(function () {
    const hamburger = $(".hamburger");
    const nav = $(".nav");

    hamburger.click(function () {
        $(this).find(".hamburger_bar").toggleClass("is_active");
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });


});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// グローバルナビメニューのリンクをクリックしたらページを閉じる
$(function () {
    $("#g-nav ul li a").on("click", function () {
        $("#g-nav ul").toggleClass();
        $("body").removeClass("open");
    });
});