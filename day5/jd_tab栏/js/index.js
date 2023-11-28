//获取相关元素
var message = document.getElementsByClassName('message');

var message_menu = document.getElementsByClassName('message_menu');

var menu_l = document.getElementsByClassName('menu_l');
//获取menu_l中的a标签
var menu_l_a = document.querySelectorAll('.menu_l a');

var jd_line = document.querySelector('.jd_line');

var menu_r = document.getElementsByClassName('menu_r');
var menu_r_a = document.querySelectorAll('.menu_r a');

var message_content = document.getElementsByClassName('message_content');

//获取message_content 中的ul
var message_content_ul=document.querySelectorAll('.message_content ul');


//注册事件
var i = 0, len = menu_l_a.length;
for (; i < len; i++) {
    var a_list = menu_l_a[i];
    a_list.index = i;
    a_list.onmouseover = a_listMouseOver;
}

//下滑线移动事件
function a_listMouseOver() {
    //引用动画函数
    animate(jd_line, this.offsetLeft + 8);
    // jd_line.style.left = this.offsetLeft + 8 + 'px';
    for(var j=0;j<message_content_ul.length;j++){
        var list_ul=message_content_ul[j];
        list_ul.className='';
        message_content_ul[this.index].className='current';
    }
}











