Page({
  /**
   * 页面的初始数据
   */
  data: {
    content_info: [],
    nickNames: ['刘燕,', '聪聪,', '杨雪晋,', '卢梦琪,', '仇老师,','楠木青城°,', '张朝,', '千古幽兰 @,', '茵茵,', '薛伟立,', '青衿。嗣音,', '在建工程,', '笛子男儿,',
      '冷面情殇,', '吴印强,', 'JoeWright,', '钟哥🍵,', '路桥川,', '风雪归人,', '千鸢锁画,', '辛建华,', '薄凉旧情人,', '忍不住想念,', '况韦琪,', ',刘明',
      '廖洋,', '康帅傅,', '不畏将来、不念过去,', '冯宝宝,', '一人之下,', '张怀义,', '旅梦,', '梁红斌,', '刀削面公举,', '曹老师,', '墨雨无痕﹌,',
      '谢希仁,', '全栈攻城狮,', 'あおぁいうぃき,', '刷我滴卡,', '老爸,', '小酒窝,', '庞士元,', '系统初始化、,', '体面,', '军统六哥,', '影子,', '风筝,',
      'Tony强,', '茂茂,', '蒹葭,', 'Because U,',  '梦魇,', '红莲斗篷,', '青莲地心火,', '净莲妖火,', '怀念青春,', '徐百川,', '冯程程,', '16K,',
      '走运康,', '徐皓,', '啷个哩咯啷,', '李白小哥哥,', '廖兴辉,', '白嘉轩,', '章鱼哥,', '鹿先生,', '隔壁老左,', '风筝,', '军统六哥,', '影子,', '鱼饵,',
      '周兰,', '刘明,', '刘金花,', '将军门业,', '微信多开+v💌..,', '吃鸡外挂,', '金太阳幼儿园,', '李慧敏,', '当归胡不归,', '腐鲲,', '老陆,', '渣渣辉,', '胡马阴山,', '渣渣辉,',
      '天师渡,', '吐蕃国师,', '依依,', '千里江陵,', 'VanDo,', '幼儿园我最皮,', 'HR小姐姐,', '账号已注销,', '渣渣辉,', '淘宝代购,', 'Dont be Evil,', '山东河南,',
    ],
    comments: [{
      nickName: '卢梦琪',
      text: '哇~'
    }, {
      nickName: '聪聪',
      text: '啷个哩个啷'
    }, {
      nickName: '刘燕',
      text: '👍哇~ 点个赞'
    }],
    show: true,
    bgNum:2,
    otherContexts: [{
      // 下面的其他人的说说的数据
      avatar_url: 'http://p9utic4op.bkt.clouddn.com/18-6-5/1754795.jpg',
      nickName: '刘燕',
      content: '物竞天择，适者生存、求一份小龙虾的做法，💕在线等',
      images: ['http://p9utic4op.bkt.clouddn.com/18-6-5/80590367.jpg', 'http://p9utic4op.bkt.clouddn.com/18-6-5/80590367.jpg', 'http://p9utic4op.bkt.clouddn.com/18-6-5/47117376.jpg'],
      location: '上饶市上饶师范学院',
      time: '2小时前',
      zan: '赵老师, 卢鑫, 青衣诶 , 陈工',
      comments: [{
        nickName: '卢鑫',
        text: '啤酒小龙虾😃 了解一下'
      }, {
        nickName: '陈工',
        text: '养一天让它把脏东西吐干净再处理'
      }, {
        nickName: '刘燕',
        text: '有道理'
      }]
    }, {
      // 下面的其他人的说说的数据
      avatar_url: 'http://p9utic4op.bkt.clouddn.com/18-6-5/71393469.jpg',
      nickName: '周友莲',
      content: '大班户外绘画比赛,一个个认真的样子真可爱',
      images: ['http://p9utic4op.bkt.clouddn.com/18-6-5/53861198.jpg', 'http://p9utic4op.bkt.clouddn.com/18-6-5/39120005.jpg', 'http://p9utic4op.bkt.clouddn.com/18-6-5/45490477.jpg'],
      location: '宜春市红太阳幼儿园敖山大道',
      time: '17小时前',
      zan: '青衣诶, 橘枳没有酒, 王凤琳'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content_info = wx.getStorageSync('content_info');
    console.log(content_info);
    this.setData({
      content_info,
    })
    // console.log(this.data.content_info.entity.content);
    let thumbs = this.data.content_info.thumbs;
    console.log('传过来的thumbs' + thumbs);
    let nickNames = this.data.nickNames;
    const temp = [];
    for (let i = 0; i < thumbs-1; i++) {
      temp.push(nickNames[i]);
    }
    temp.push('佚名');
    console.log(temp);
    this.setData({
      nickNames: temp
    })
  },
  preImgTap(e) {
    // 预览图片
    console.log(e.target);
    // 保存当前图片的路径
    const images = this.data.content_info.images;
    const path = images[e.currentTarget.dataset.id].path;
    let len = images.length;
    const urls = [];
    // [e.currentTarget.dataset.id]
    for (let i = 0; i < len; i++) {
      urls.push(images[i].path);
    }


    wx.previewImage({
      current: `${path}`, // 当前显示图片的http链接 `${path}`
      // 预览的逻辑？？？？
      urls: [...urls] // 需要预览的图片http链接列表
    })
  },
  preImgTap1(e) {
    // 预览图片
    console.log(e.target);
    // 保存当前图片的路径
    console.log(e.currentTarget.dataset.key);
    console.log(this.data.otherContexts.images);
    const images = this.data.otherContexts[0].images;
    const path = images[e.currentTarget.dataset.id];
    let len = images.length;
    const urls = [];
    // [e.currentTarget.dataset.id]
    for (let i = 0; i < len; i++) {
      urls.push(images[i]);
    }


    wx.previewImage({
      current: `${path}`, // 当前显示图片的http链接 `${path}`
      urls: [...urls] // 需要预览的图片http链接列表
    })
  },
  deleteTap(e) {
    wx.showModal({
      // title:'确定删除吗?',
      content: '确定删除吗?',
      confirmText: '删除',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            // 将内容置为null 做删除
            content_info: null,
          })
        }
      }
    })
  },
  bindAdd(e) {
    // 图片预览
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['https://wx.qlogo.cn/mmhead/Q3auHgzwzM5Ps1ibeDV24zmVxOnLvjtdHqoamRoacfVFtbCGDLeZib2g/64'] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})