# express
node的框架
- npm init -y 一键初始化

## 文件夹的命名不能用和框架和包（jq,loadash）重名 不能用中文 不要用数字

- npm install express -s 下载express

- app.listen() 简单原理：基于http封装的
  app.listen = function(...arg){ // 把参数合成数组传进去
    require('http').createServer(app).listen(...arg) // 把参数展开
  }

- node 运行
  - 命令行运行：node + 文件名

- express主要是对req和res进行封装

- res.sendStatus(404) 等于 下面两个加起来
  res.send('not found')
  res.status(404)

- app.all 所有的请求 不分get/post等

- nodemon 可以自动重启
  ```
  npm install nodemon -g
  ```

## 中间件 官方文档 资源 中间件
  - express 里中间件都是函数
  - 中间件使用 都是 app.use()
  - cors 中间件 跨域 
    - cors跨域全称：跨域资源共享
    ```
    npm install cors
    app.use(cors())
    ```
  - body-parser中间件 解析带请求体的数据(post,put) 
    ```
    npm install body-parser
    app.use(bodyParser.json())
    ```
    - 解析form-data
      bodyParser.urlencoded({ extended: false })
    - 解析json
      bodyParser.json
    - 发送请求的数据格式
      www-form-urlencoded  form-data  application/json
  - 静态文件中间件 express内置的
    ```
    app.use(express.static('public'))
    ```
    public表示文件夹会自动使用pulic下的文件
    静态文件包括 css js html img 等
    ```
    app.use(express.static(__dirname)) // __dirname 绝对路径
    ```
## 持久化登录 jwt json web token
  - 原理：第一次登陆时会返回一个经过加密的token，下一次访问接口（携带登录返回你的token）的时候，会对token进行解密，如果解密正在进行，说明你已经登录，再把过期时间延长


  
    ```
    axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'
    ```
    原生js设置请求头
    ```
    xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    ```
    允许携带cookie
    ```
    xml.withCredentials = true
    ```
    axios的实例 设置请求头
    ```
    const instance = axios.create({
      withCredentials:true,
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    })
    ```



  

