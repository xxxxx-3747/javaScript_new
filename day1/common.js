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