//回调
$(function () {
    window.doAllThings();
});


(function (window, $) {
    window.doAllThings = function () {
        MY_Methods.init();
    }
    var MY_Methods = {};//方法都定义在这里

    var MY_JQUERYS = {};//jQuery对象集

    MY_Methods.init = function () {

        MY_JQUERYS = {
            $overflowDiv:$(".overflowDiv"),

        }

        this.createSpans();
    }
    /**
     * 创造滚动的span
     */
    MY_Methods.createSpans = function () {
        var content= "好消息！！！好消息！！！本店全场亏本大甩卖了，只要五元，只要五元！！！";
        var conten2 = "天灾军团打过来了，前线顶不住了。。。大家快跑啊。。。。快。。。。。。。";
        content = content + conten2;
        var array = content.split("");
        var leftNum = 5;
        $.each(array,function (i, char) {
            var $span = $('<span class="overflowSpan"></span>');
            $span.text(char);
            $span.css("left",leftNum);
            MY_JQUERYS.$overflowDiv.append($span);
            leftNum+=21;
        });
        MY_Methods.scroll_level(MY_JQUERYS.$overflowDiv);
    }
    /**
     * 让一个div里面的span内容水平滚动
     */
    MY_Methods.scroll_level =function ($div) {
        var $spans = $div.find('span.overflowSpan');
        var divWidth = $div.width();
        var spanWidth = 16;
        var allSpanWidth = spanWidth*$spans.length;

        var negative = [];//left属性为负数的数组
        setInterval(function () {
            $.each($spans,function (i, span) {
                var leftpx = $(span).css("left");
                var leftNum = Number(leftpx.split("px")[0]) - 1;

                if(leftNum < -allSpanWidth/3){
                    $(span).css("left",divWidth);
                    return;
                }
                $(span).css("left",leftNum);
            });
        },20)
    }



})(window, jQuery)