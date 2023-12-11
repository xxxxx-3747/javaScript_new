//获取需要的对象
var map = document.querySelector('.map');

//获取地图的长宽
// var mapWidth = map.offsetWidth;
// var mapHeight = map.offsetHeight;

//盒子的随机位置
// var num1 = Math.floor(Tool.getRamdom(0, mapWidth));
// var num2 = Math.floor(Tool.getRamdom(0, mapHeight));


//存储生成的盒子
var arr=[];

for(var i=0;i<10;i++){
    // 设置随机颜色
    var r=Tool.getRamdom(0,255);
    var g=Tool.getRamdom(0,255);
    var b=Tool.getRamdom(0,255);
    var box = new Box({
        width: 20,
        height: 20,
        backgroundColor: 'rgb('+r+','+g+','+b+')'
        // x: num1,
        // y: num2
    });
    box.render(map);
    arr.push(box);
}

random();
//定时设置盒子的位置
setInterval(random,1000);

function random() {
    arr.forEach(function (item) {
        item.random();
    })
}