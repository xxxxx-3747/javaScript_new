//获取盒子元素
var box = $('box');

//获取内容元素
var content = $('content');

//获取滚动条相关元素
var scroll = $('scroll');

var bar = $('bar');

//设置滚动条的高度
var boxHeight = box.offsetHeight;

var contentHeight = content.offsetHeight;

var scrollHeight = scroll.offsetHeight;

var height = boxHeight / contentHeight * scrollHeight;

bar.style.height = height + 'px';


//滚动条滚动事件
bar.onmousedown = function (e) {

    //获取滚动条滚动的距离
    var barY = getPage(e).pageY - box.offsetTop - bar.offsetTop;

    bar.onmousemove = function (e) {
        //获取滚动条的新位置
        var y = getPage(e).pageY - box.offsetTop - barY;

        //控制滚动条的范围
        y = y < 0 ? 0 : y;

        //滚动条移动的最大距离
        var barMaxY = scroll.offsetHeight - bar.offsetHeight;

        y = y > barMaxY ? barMaxY : y;

        bar.style.top = y + 'px';

        //控制文字根据滚动条移动
        //  bar滚动出去的距离/文字滚动出去的距离 =  bar滚动出去的最大距离/content的最大距离

        var contentMaxY = content.offsetHeight - box.offsetHeight;
        var contentY = y*contentMaxY/barMaxY;

        content.style.top = (-contentY) + 'px';

    }
}

document.onmouseup = function () {
    bar.onmousemove = null;
}