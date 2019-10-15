var $maskRule = $("#mask2"),//规则遮罩层
    $mask = $("#mask"),//红包遮罩层
    $winning = $(".winning");
    //link = false;//判断是否在链接跳转中

//规则
$("#guanbi").click(function () {
    $maskRule.hide();
});

/*中奖信息提示*/
function win(aa) {
    //遮罩层显示
	var tt=aa;
	$("#text").html(tt);
    $mask.show();
    $winning.addClass("reback");
    setTimeout(function () {
        $card.addClass("pull");
    }, 500);

    //关闭弹出层
    $(".btn").click(function () {
    //$close.click(function () {
        $mask.hide();
        $winning.removeClass("reback");
        $card.removeClass("pull");
    });
 
}


