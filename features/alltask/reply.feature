# language: zh-CN
@rpa
功能: 话题相关操作
    主要操作为回帖
    负责人： 徐枫

  场景: 用户登录并发布一个话题
    假如导航到用户登录页面
    当用户名输入"testuser3"
    当密码输入"123456"
    那么登录系统并显示用户名"testuser3"
    那么打开发布话题按钮
    当选择板块"分享"
    那么输入标题"helloworld123"
    那么输入正文"12312312312312312"
    那么点击提交,"成功"校验点"helloworld123"

  场景大纲: 另外一个用户2回复用户1的话题
    假如导航到用户登录页面
    当用户名输入"<回复者>"
    当密码输入"123456"
    那么登录系统并显示用户名"<回复者>"
    当点击主题位置"<标题>"
    那么进入回复主题页，输入内容"<回复内容>"
    那么点击提交,添加校验点，"<回复数>","<楼层>","<回复内容>"，"<回复者>"
    例子: 
      | 标题            | 回复内容         | 回复数 | 楼层 | 回复者       |
      | helloworld123 | qweqwrerwrwr | 1   | 1  | testuser4 |