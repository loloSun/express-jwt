// 购物车模块
// express 路由
let express = require('express')
// 创建一个路由集合 Router是一个函数
// http://localhost:3000/car/one
// 访问路由的路径 car/one
let router = express.Router()
router.post('/carlist',function(req,res){
    console.log(req.params)
    console.log(req.body)
    res.end('购物车列表')
})
router.get('/one',function(req,res){
    res.send('查找一个商品')
})
// 导出路由
module.exports = router;