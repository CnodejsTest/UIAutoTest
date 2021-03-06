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
    那么应该注册"<status>"，提示信息为"<assert>"
    例子: 
      | username     | password | confirm | status | email            | assert       |
      |              | 123123   | 123123  | 失败     | 1122121@xx.com   | 信息不完整。       |
      | 122          | 12       | 12      | 失败     | 12               | 用户名至少需要5个字符。 |
      | 12234        |          |         | 失败     | 12               | 信息不完整。       |
      | #@1￥32       | 12       | 21      | 失败     | 12               | 用户名不合法。      |
      | 开源项目好        | 12       | 12      | 失败     | 12               | 用户名不合法。      |
      | 123456       | 123456   | 123456  | 失败     | 123456           | 邮箱不合法。       |
      | imhelloworld | 111111   | 111111  | 失败     | 990778991@qq.com | 用户名或邮箱已被使用。  |