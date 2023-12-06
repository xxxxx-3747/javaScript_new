function animate(element, target,callback) {
    // var target = 500;
    //获取当前的位置
    var current = element.offsetLeft;

    var step = 15;

    if (element.timeId != null) {
        clearInterval(element.timeId);
    }

    element.timeId = setInterval(function () {
        if (current > target) {
            step = -Math.abs(step);
        }

        if (Math.abs(current - target) <= Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timeId);
            //回调函数
            if(callback){
                callback();
            }
            return;
        }
        current += step;
        element.style.left = current + 'px';

    }, 20);

}