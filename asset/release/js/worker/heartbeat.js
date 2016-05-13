/**
 * Created by zw on 2016/1/28.
 */
var onmessage = function (msg) {
    try {
        var data = JSON.parse(msg.data);
        ajax(data);
    }
    catch (err) {
        console.error("heartbeat error=" + JSON.stringify(err));
    }
};

var heartbeat = function (data) {
    return function () {
        ajax(data);
    }
};

var ajax = function (data) {
    var xmlHttpReq = null;   //声明一个空对象用来装入XMLHttpRequest
    if (self.ActiveXObject) {//IE5 IE6是以ActiveXObject的方式引入XMLHttpRequest的
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (self.XMLHttpRequest) {//除IE5 IE6 以外的浏览器XMLHttpRequest是window的子对象
        xmlHttpReq = new XMLHttpRequest();//实例化一个XMLHttpRequest
    }

    if (xmlHttpReq != null) {  //如果对象实例化成功
        xmlHttpReq.open("POST", data.url, true);     //调用open()方法并采用异步方式
        xmlHttpReq.onreadystatechange = RequestCallBack; //设置回调函数
        if (typeof data.formData === 'undefined' || data.formData === null) {
            data.formData = new FormData();
        }
        else {
            var formData = new FormData();
            for (var key in data.formData) {
                if (data.formData.hasOwnProperty(key)) {
                    formData.append(key, data.formData[key]);
                }
            }
            data.formData = formData;
        }
        xmlHttpReq.send(data.formData);  //因为使用get方式提交，所以可以使用null参调用
    }

    function RequestCallBack() {//一旦readyState值改变，将会调用这个函数
        if (xmlHttpReq.readyState == 4) {
            if (xmlHttpReq.status == 200) {
                setTimeout(heartbeat(data), 10000);
            }
        }
    }
};