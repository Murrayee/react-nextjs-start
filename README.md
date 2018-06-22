### 安装、启动、部署
```JavaScript
"scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production pm2 start server.js",
    "stop": "pm2 stop server.js"
  }
```
**1、下载好项目后，安装依赖。**
```JavaScript
npm install 或者 yarn install
```
**2、启动项目。**
```JavaScript
npm run dev
```
**3、开发完成后，生产环境测试。**
```JavaScript
npm run build  // 先打包
npm start  // 再启动
```
**4、检测没有问题，部署到服务器。**

以阿里云为例，react服务端架构部署的基本步骤是，使用各种方法将前端项目上传到服务端，可以是FTP上传，也
可以在服务器使用git clone下载项目。

你得在服务器安装好node环境，然后和上面的第一步一样，在服务端安装依赖，然后就不要用dev启动项目，而是start，start设置成pm2启动，这样你的项目就能在服务端一直运行。
