// 引入express
let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')

let jwt = require("jsonwebtoken")

let banner = require("./banner")

// 拿到服务器
let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// 登录持久化验证接口 访问这个接口的时候 一定要访问token（前端页面每切换一次，就访问一下这个接口，问一下我有没有登录/登陆过期）
// 先访问登录接口，得到token，在访问这个，看是否成功
app.post('/validate',function(req,res){
    let token = req.headers.authorization;
    // console.log(token)
    // 验证token合法性 对token进行解码
    jwt.verify(token,'abcd',function(err,decode){
        if(err){
            res.json({
                msg:'当前用户未登录'
            })
        }else {
            // 证明用户已经登录
            res.json({
                username:decode.username,
                msg:'已登录'
            })
            token:jwt.sign({username:decode.username},'abcd',{
                // 过期时间
                expiresIn:"1h"
            })
        }
    })
})

// get 和 delete 方式请求
// 参数：路径 回调函数（成功数据，失败数据）
app.get('/banner',function(req,res){
    console.log(req.query.id)
    // res.json("get请求成功")
    res.json({
        banner
    })
})

// post 和 put 请求 都有请求体
app.post('/a',function(req,res){
    console.log(req.body)
    res.json({
        code:200
    })
})

// 模拟一个登陆的接口
app.post('/login',function(req,res){
    let {username} = req.body
    console.log(username)
    res.json({
        // 进行加密的方法
        // sing 参数一：加密的对象 参数二：加密的规则 参数三：对象
        token:jwt.sign({username:username},'abcd',{
            // 过期时间
            expiresIn:"1h"
        }),
        username,
        code:200
    })
})
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpxYyIsImlhdCI6MTU1OTEzMjc1NCwiZXhwIjoxNTU5MTM2MzU0fQ.BrHvzn0LDgDz0YTzfObT0-OBUEdqF7_QYu4g1NimKmY

// listen 后面跟着的是端口
app.listen(8000,function(){
    console.log('OK')
})