Page({
  /**
   * 页面的初始数据
   */
  data: {
    content_info: [],
    nickNames: ['杨雪晋,', '刘燕,', '卢梦琪,', '楠木青城°,', '聪聪,', '千古幽兰 @,', '张朝,', '青衿。嗣音,', '在建工程,', '笛子男儿,',
      '冷面情殇,', '吴印强,', 'JoeWright,', '风雪归人,', '千鸢锁画,', '辛建华,', '薄凉旧情人,', '忍不住想念,', '况韦琪,', ',刘明',
      '廖洋,', '康帅傅', '不畏将来、不念过去,', '冯宝宝,', '一人之下,', '张怀义,', '旅梦,', '刀削面公举,', '曹老师,', '墨雨无痕﹌,',
      '梁红斌,', '谢希仁,', '全栈攻城狮,', 'あおぁいうぃき,', '刷我滴卡,', '老爸,', '小酒窝,', '庞士元,', '系统初始化、,', '体面,',
      'Tony强,', '茂茂,', '蒹葭,', 'Because U,', '仇老师,', '梦魇,', '红莲斗篷,', '青莲地心火,', '净莲妖火,', '怀念青春,',
      '走运康,', '薛伟立,', '钟哥,', '路桥川,', '徐皓,'
    ],
    avatars: ['/assets/images/post/l01.jpg', '/assets/images/1.png', '/assets/images/2.png', '/assets/images/3.png'],
    comments: [{
      nickName: '卢梦琪',
      text: '哇~'
    }, {
      nickName: '聪聪',
      text: '啷个哩个啷'
    }, {
      nickName: '刘燕',
      text: '哇~'
    }],
    show: true,
    otherContexts: [{
      // 下面的其他人的说说的数据
      avatar_url: '/assets/images/post/l01.jpg',
      nickName: '刘燕',
      content: '物竞天择，适者生存、求一份小龙虾的做法，在线等',
      images: ['/assets/images/post/l02.png', '/assets/images/post/l03.jpg', '/assets/images/post/l04.jpg'],
      location: '上饶市上饶师范学院',
      time: '20分钟前',
      zan: '赵老师, 卢鑫, 青衣诶',
      comments: [{
        nickName: '卢梦琪',
        text: '哇~'
      }, {
        nickName: '聪聪',
        text: '啷个哩个啷'
      }, {
        nickName: '刘燕',
        text: '哇~'
      }]
    }, {
      // 下面的其他人的说说的数据
      avatar_url: '/assets/images/post/z04.jpg',
      nickName: '周友莲',
      content: '大班户外绘画比赛,一个个认真的样子真可爱',
      images: ['/assets/images/post/z01.jpg', '/assets/images/post/z02.jpg', '/assets/images/post/z03.jpg'],
      location: '宜春市红太阳幼儿园敖山大道',
      time: '17小时前',
      zan: '橘枳没有酒, 王凤琳, 青衣诶'
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
      // 预览的逻辑？？？？
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