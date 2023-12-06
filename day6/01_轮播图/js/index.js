//获取相关的元素
var box = document.querySelector('.box');

var screen = document.querySelector('.screen');

var ul = document.querySelector('.screen ul');

var li = ul.children;

var ol = document.querySelector('.screen ol');

var arr = document.querySelector('#arr');

var left = document.querySelector('#left');
var right = document.querySelector('#right');

//获取图片的个数
var i = 0, len = li.length;
var moveWidth = 0;
var index = 0;


//获取相框的宽度
var screenWidth = screen.offsetWidth;
console.log(screenWidth);

//在ol中添加li
for (; i < len; i++) {
    var lis = document.createElement('li');
    lis.index = i;
    li.index = i;
    setInnerText(lis, i + 1);
    ol.appendChild(lis);

    //默认第一个选中
    ol.children[0].className = 'current';

    //点击序号图片跟着改变
    lis.onclick = lisClick;

    //点击箭头，图片跟着改变
    right.onclick = function () {
        index++;
        if (index < len) {
            ol.children[index].click();
        }

    }
    left.onclick = function () {
        index--;
        if (index >= 0) {
            ol.children[index].click();
        }
    }
}

//注册鼠标进入事件
box.onmouseenter = function () {
    arr.style.display = 'block';

    //注册鼠标点击事件
    // left.onclick = function () {
    // }
}

box.onmouseleave = function () {
    arr.style.display = 'none';
}


function lisClick() {
    for (i = 0; i < len; i++) {
        ol.children[i].className = '';
    }
    this.className = 'current';
    moveWidth = (screenWidth+14) * this.index;
    animate(ul, -moveWidth);
}


