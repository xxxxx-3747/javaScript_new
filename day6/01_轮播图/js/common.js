//获取元素之间的内容
function getInnerText(element) {
    if (typeof element.innerText === 'string') {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

//设置元素之间的内容
function setInnerText(element, context) {
    if (typeof element.innerText === 'string') {
        element.innerText = context;
    } else {
        element.textContent = context;
    }
}

//根据id获取相关的元素
function $(id) {
    return document.getElementById(id);
}

//处理firstElementChild的兼容性问题
function getFirstElementChild(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    }

    var node, nodes = parent.firstElementChild, i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

//处理lastElementChild的兼容性问题
function getLastElementChild(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    }

    var node, nodes = parent.lastElementChild, i = 0;
    while (node = nodes[i--]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

// 注册事件兼容性问题
function addEventListener(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, callback);
    } else {
        element['on' + eventName] = callback;
    }
}

// 移除事假兼容性问题
function removeEventListener(element, eventName, callback) {
    if (element.removeEventListener) {
        element.removeEventListener(eventName, callback, false);
    } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, callback);
    } else {
        element['on' + eventName] = '';
    }
}

//获取页面滚动出去的距离，处理兼容性问题
function getScroll() {
    return {
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft

    }
}

//获取鼠标在页面上的距离
function getPage(e) {
    e = e || window.event;
    return {
        pageX: e.clientX + getScroll().scrollLeft,
        pageY: e.clientY + getScroll().scrollTop
    }
}

//获取min~max之间的随机整数
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}