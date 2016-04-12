# node-mongoose-mocha-demo
学习使用nodejs\mongoose.js\mocha 的单元测试


##安装依赖
    * npm install mongoose -g
    * npm install mocha -g
    * npm install chai -g       //单元测试断言框架

##概述
####**连接数据库**
    db/database.js 是连接mongodb的文件,引入文件即执行连接数据库.
####**创建Model**
    model/user.js
    * 定义了user的描述文件, Schema描述了文本属性，可在此添加属性或者继承方法
    * 通过Schema生成Model, Model是对应Schema的编译版本,但是Model具备操作数据库的能力


##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(jondai@aliyun.com)
* QQ: 1039895299
* 个人网站：jondai.cn

##关于作者

```javascript
  var jondai = {
    nickName  : "jondai",
    site : "http://jondai.cn"
  }
```