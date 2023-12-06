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
//设置一个定时器
var timeId = null;
//定时移动的时间
var time=2000;


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
        //图片在最后一张的时候
        if (index === len) {
            //设置ul的样式
            index = 0;
            ul.style.left = '0px';
        }

        index++;
        if (index < len) {
            ol.children[index].click();
        } else {
            //以动画的方式切换到克隆的最后一张图片
            animate(ul, -index * (screenWidth + 14));

            //设置序号的样式
            for (i = 0; i < len; i++) {
                ol.children[i].className = '';
            }
            ol.children[0].className = 'current';


        }

    }
    left.onclick = function () {
        if (index === 0) {
            index = len;
            ul.style.left = -(index * (screenWidth + 14)) + 'px';
        }
        index--;
        if (index >= 0) {
            ol.children[index].click();
        }
    }
}

//克隆一个元素加在ul的最后
var cloneLi = ul.children[0].cloneNode(true);
ul.appendChild(cloneLi);

//注册鼠标进入事件
box.onmouseenter = function () {
    arr.style.display = 'block';

    //清除定时器
    clearInterval(timeId);
}

box.onmouseleave = function () {
    arr.style.display = 'none';

    //设置定时任务
    timeId=setInterval(function () {
        right.click();
    },time);
}

//设置定时器定时移动
timeId=setInterval(function () {
    right.click();
},time);


function lisClick() {
    for (i = 0; i < len; i++) {
        ol.children[i].className = '';
    }
    this.className = 'current';
    moveWidth = (screenWidth + 14) * this.index;
    animate(ul, -moveWidth);
    index = this.index;
}


