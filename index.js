let express = require('express') // 引入express express是个函数
let app = express() // express执行 固定叫做app

// 放在需要处理的路径前面处理通用逻辑 可以用来进行权限校验等 
// 必须写 next 才会继续往下走 拦截req,res
app.use(function(req,res,next){
    // 通用放乱码头
    res.setHeader('content-type','text/plain;charset=utf8')
    next()
})
// 不带路径表示匹配所有 带路径表示匹配这个路径上的进行处理
// 中间件的作用 访问路径之前 可以提前做一些逻辑处理 但是中间件必须放在你要处理的路径之前
app.use('/sign',function(req,res,next){
    console.log('use sign')
    next()
})

// :id 路径参数 表示必须有但是不固定
// 通过req.params取到路径参数
// /list/1/zqc
app.get('/list/:id/:name',function(req,res){
    console.log(req.params) // { id: '45', name: 'zqc' }
    res.send('请求一个')
})
app.get('/list',function(req,res){
    res.send('请求多个')
})

// express把各个请求方法进行封装 参数就是 路径 回调函数  
// 路径是不带任何参数的绝对路径 否则访问不到
// 代码执行顺序 从上到下执行 如果匹配到路径了 就不再继续往下走
app.get('/sign',(req,res)=>{
    // 请求方式 全是大写
    console.log(req.method) // GET
    // express封装的不带任何参数的路径
    console.log(req.path) // /sign
    // 查询?后面的参数
    console.log(req.query) // { id: '1',name: '1' }
    console.log(req.params) // {}
    // 请求头
    console.log(req.headers)
    // user-agent 判断什么浏览器

    // res.setHeader('content-type','text/plain;charset=utf8')
    res.end('get登录')
    // res.send('登录') // 是对防乱码的封装
})

app.post('/login',(req,res)=>{
    res.end('post登录')
})

app.get('/app',(req,res)=>{
    res.send('not found')
    res.status(404)
})

// 所有的请求 * 一定要放到最后 因为一旦匹配到路径就不继续往下执行
app.all('*',(req,res)=>{
    // res.send('not found')
    // res.status(404)
    res.sendStatus(404)
})

app.listen(8080,()=>console.log('OK'))

