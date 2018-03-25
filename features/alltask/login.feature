# language: zh-CN
@user_login
功能: 用户登录功能
用户登录分为GitHub授权登录与用户名密码登录两种方式
测试点主要分为以下情况：
GitHub授权登录功能：
1.能否正确跳转到GitHub授权页面
2.输入错误的用户名或密码收到错误的提示信息
3.正确的用户名和密码应该可以应能够成功授权登录

用户名和密码登录：
1.错误的用户名和密码登录的情况
2.正确的用户名和密码的情况

  场景大纲: 使用GitHub账户授权登录
    假如浏览到网站首页
    当点击登录按钮应该跳转到登录页面
    当点击使用GitHub登录按钮跳转到GitHub授权登录页面
    并且GitHub用户名或邮件中输入"<用户名>"
    同时密码栏中输入"<密码>"
    当点击GitHub登录按钮
    那么登录状态"<状态>"，提示信息"<信息>"
    例子: 
      | 用户名          | 密码         | 状态 | 信息                              |
      |              | xxxxxxxx   | 失败 | Incorrect username or password. |
      | yourusername | yourpasswd | 成功 | yourusername                    |