//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    nickNames: ['刘燕,', '聪聪,', '杨雪晋,', '卢梦琪,', '仇老师,','楠木青城°,', '张朝,', '千古幽兰 @,', '茵茵,', '薛伟立,', '青衿。嗣音,', '在建工程,', '笛子男儿,',
      '冷面情殇,', '吴印强,', 'JoeWright,', '钟哥🍵,', '路桥川,', '风雪归人,', '千鸢锁画,', '辛建华,', '薄凉旧情人,', '忍不住想念,', '况韦琪,', ',刘明',
      '廖洋,', '康帅傅,', '不畏将来、不念过去,', '冯宝宝,', '一人之下,', '张怀义,', '旅梦,', '梁红斌,', '刀削面公举,', '曹老师,', '墨雨无痕﹌,',
      '谢希仁,', '全栈攻城狮,', 'あおぁいうぃき,', '刷我滴卡,', '老爸,', '小酒窝,', '庞士元,', '系统初始化、,', '体面,', '军统六哥,', '影子,', '风筝,',
      'Tony强,', '茂茂,', '蒹葭,', 'Because U,',  '梦魇,', '红莲斗篷,', '青莲地心火,', '净莲妖火,', '怀念青春,', '徐百川,', '冯程程,', '16K,',
      '走运康,', '徐皓,', '啷个哩咯啷,', '李白小哥哥,', '廖兴辉,', '白嘉轩,', '章鱼哥,', '鹿先生,', '隔壁老左,', '风筝,', '军统六哥,', '影子,', '鱼饵,',
      '周兰,', '刘明,', '刘金花,', '将军门业,', '微信多开+v💌..,', '吃鸡外挂,', '金太阳幼儿园,', '李慧敏,', '当归胡不归,', '腐鲲,', '老陆,', '渣渣辉,', '胡马阴山,', '渣渣辉,',
      '天师渡,', '吐蕃国师,', '依依,', '千里江陵,', 'VanDo,', '幼儿园我最皮,', 'HR小姐姐,', '账号已注销,', '渣渣辉,', '淘宝代购,', 'Dont be Evil,', '山东河南,',
    ]
  }
})