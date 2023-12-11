//设置盒子相对定位
var _position = 'absolute';
var _map = null;
// var _div = null;

//创建一个盒子对象
function Box(option) {
    //盒子的颜色、长、宽、位置
    option = option || {};
    this.backgroundColor = option.backgroundColor || 'blue';
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;

    this._div=null;
}


//把盒子渲染到页面上
Box.prototype.render = function (map) {
    _map=map;
    var div = document.createElement('div');
    this._div=div;
    map.appendChild(div);
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = _position;
}

//获取盒子的位置
Box.prototype.random = function () {
    if (!map) return;
    this.x = Tool.getRamdom(0, _map.offsetWidth / this.width - 1) * this.width;
    this.y = Tool.getRamdom(0, _map.offsetHeight / this.height - 1) * this.height;
    this._div.style.left = this.x + 'px';
    this._div.style.top = this.y + 'px';
}





