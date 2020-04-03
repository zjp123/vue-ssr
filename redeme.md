# vue vue-touter vuex ssr koa
# npm build  打包正式环境  npm start 正式环境启动
# 开发时  npm run dev:client  npm run dev:server
```
发布：
登陆服务器，Git clone 项目，npm install 先看服务器有没有node环境 npm build ,
然后 pm2 启动node ,即可  在配合nginx 做转发。。。

或者把打包好的文件直接上传服务器

```
