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
    例子: 
      | username   | password | confirm | status | email              |
      | testuser1  | 123456   | 123456  | 成功     | testuser1@163.com  |
      | testuser2  | 123456   | 123456  | 成功     | testuser2@163.com  |
      | testuser3  | 123456   | 123456  | 成功     | testuser3@163.com  |
      | testuser4  | 123456   | 123456  | 成功     | testuser4@163.com  |
      | testuser5  | 123456   | 123456  | 成功     | testuser5@163.com  |
      | testuser6  | 123456   | 123456  | 成功     | testuser6@163.com  |
      | testuser7  | 123456   | 123456  | 成功     | testuser7@163.com  |
      | testuser8  | 123456   | 123456  | 成功     | testuser8@163.com  |
      | testuser9  | 123456   | 123456  | 成功     | testuser9@163.com  |
      | testuser10 | 123456   | 123456  | 成功     | testuser10@163.com |
      | testuser11 | 123456   | 123456  | 成功     | testuser11@163.com |
      | testuser12 | 123456   | 123456  | 成功     | testuser12@163.com |
      | testuser13 | 123456   | 123456  | 成功     | testuser13@163.com |
      | testuser14 | 123456   | 123456  | 成功     | testuser14@163.com |
      | testuser15 | 123456   | 123456  | 成功     | testuser15@163.com |
      | testuser16 | 123456   | 123456  | 成功     | testuser16@163.com |
      | testuser17 | 123456   | 123456  | 成功     | testuser17@163.com |
      | testuser18 | 123456   | 123456  | 成功     | testuser18@163.com |
      | testuser19 | 123456   | 123456  | 成功     | testuser19@163.com |