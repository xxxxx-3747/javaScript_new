//获取box元素
var box = $('box');

//获取小盒子
var small = $('small');
//获取小盒子里面的图片
var smallimg = small.children[0];
//获取mask
var mask = small.children[1];

//获取大盒子
var big = $('big');
//获取大盒子里面的图片
var bigimg = big.children[0];

//注册鼠标进入事件
small.onmouseover = function () {
    mask.style.display = 'block';
    big.style.display = 'block';
}

//注册鼠标离开事件
small.onmouseout = function () {
    mask.style.display = 'none';
    big.style.display = 'none';
}
//注册鼠标移动事件
small.onmousemove = function (e) {
    e = e || event;
    var x = getPage(e).pageX - small.offsetLeft;
    var y = getPage(e).pageY - small.offsetTop;

    //控制鼠标在mask的中间
    x -= mask.offsetWidth / 2;
    y -= mask.offsetHeight / 2;

    //控制mark的范围
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    var smallMaxX=small.offsetWidth-mask.offsetWidth;
    var smallMaxY=small.offsetHeight-mask.offsetHeight;

    //控制mark的范围
    x = x > smallMaxX ? smallMaxX : x;
    y = y > smallMaxY ? smallMaxY : y;


    //设置mark的位置
    mask.style.left = x + 'px';
    mask.style.top = y + 'px';

    //设置大图跟着小图移动
    //小图移动的距离/大图移动的距离=小图能够移动的最大距离/大图能够移动的最大距离

    //获取大图能移动的最大距离
    var bigMaxX=bigimg.offsetWidth-big.offsetWidth;
    var bigMaxY=bigimg.offsetHeight-big.offsetHeight;

    var bigX=x*bigMaxX/smallMaxX;
    var bigY=y*bigMaxY/smallMaxY;

    bigimg.style.left=(-bigX)+'px';
    bigimg.style.top=(-bigY)+'px';

}