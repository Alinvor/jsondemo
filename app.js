let express = require('express');
let Mock = require('mockjs');
// let fs = require('fs');

let app = express();
/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/list', function (req, res) {
    res.json(Mock.mock({
        "status": 200,
        "message": "成功",
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }));
})
const server = app.listen(12345, function () {
    console.log("服务器已启动，监听12345 端口");
})
