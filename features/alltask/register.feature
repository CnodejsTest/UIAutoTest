# language: zh-CN
功能: 用户注册
对于首次进入的用户，登陆前进行注册，之后才可以登录进入

  场景大纲: 用户注册
    假如已经进入用户注册页面
    当用户名字段后输入"<username>"
    当密码字段后输入"<password>"
    当确认密码字段后输入"<confirm>"
    当电子邮箱字段输入"<email>"
    那么点击注册按钮
    那么应该注册"<status>"，校验点为"<assert>"
    例子: 
      | username     | password | confirm | status | email            | assert                                           |
      | imhelloworld | 111111   | 111111  | 成功     | 990778991@qq.com | 欢迎加入 Nodeclub！我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。 |
      |              | 123123   | 123123  | 失败     | 1122121@xx.com   | 信息不完整。                                           |