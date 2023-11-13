// 创建表头
function createHead(parentBox,headData) {
    var table = document.createElement('table');
    parentBox.appendChild(table);
    table.border = '1px';
    table.cellSpacing = 0;
    table.style.textAlign = 'center';


    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);
    tr.backgroundColor = 'lightgray';


    headData.forEach(function (item) {
        var th = document.createElement('th');
        setInnerText(th, item);
        tr.appendChild(th);
        th.border = '1px';
        th.width = '150px';
        th.height = '50px';
        th.bgColor = 'lightgray';
    });
    return table;
}

//创建表体
function createBody(table,bodyData) {
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    bodyData.forEach(function (item) {

        var tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (key in item) {
            var td = document.createElement('td');
            setInnerText(td, item[key]);
            tr.appendChild(td);
        }

        var td = document.createElement('td');
        tr.appendChild(td);

        var a = document.createElement('a');
        setInnerText(a,'删除');
        td.appendChild(a);
        a.href='javaScript:void(0)';

        a.onclick=aclick;
    });

    function aclick() {
        //提示是否删除
        var rem=confirm('是否确定删除');
        if(rem){
            var tr=this.parentNode.parentNode;
            tbody.removeChild(tr);

        }

    };
    
}