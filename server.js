let express = require('express')
let app = express()

let cors = require('cors')
let bodyParser = require('body-parser')
// 引入路径模块
let path = require('path')

app.listen(3000,function(){
    console.log('3000 OK')
})
 

// 访问静态文件
// app.use(express.static('public'))
// 如果写了一个路径 会在访问路径前面添加这个路径
// localhost:3000/static
// app.use('/static',express.static('public'))
// path 路径方法 path.join 拼接路径
// 为了访问更加安全 可以使用绝对路径
// app.use(express.static(path.join(__dirname,'public')))
// console.log(path.join(__dirname,'public'))
// __dirname 表示绝对路径
// app.use(express.static(__dirname))
app.use('/public',express.static(__dirname + '/public'));

// 跨域
app.use(cors())
// 解析请求体
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// 路由
// 引入登陆注册
// http://localhost:3000/user/login
let user = require('./user/user')
app.use('/user',user)
// 引入购物车
// http://localhost:3000/car/one
let car = require('./car/car')
app.use('/car',car)
