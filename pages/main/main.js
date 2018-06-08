var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content_info: [],
    nickNames: [],
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
    }],

    showOp:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content_info = wx.getStorageSync('content_info');
    this.setData({
      content_info,
    })
    let thumbs = this.data.content_info.thumbs;
    let nickNames = app.globalData.nickNames;
    const temp = [];
    for (let i = 0; i < thumbs-1; i++) {
      temp.push(nickNames[i]);
    }
    temp.push('佚名');
    this.setData({
      nickNames: temp
    })
  },
  preImgTap(e) {
    const images = this.data.content_info.images;
    const path = images[e.currentTarget.dataset.id].path;
    let len = images.length;
    const urls = [];
    // [e.currentTarget.dataset.id]
    for (let i = 0; i < len; i++) {
      urls.push(images[i].path);
    }


    wx.previewImage({
      current: `${path}`,
      urls: [...urls]
    })
  },
  preImgTap1(e) {
    const images = this.data.otherContexts[0].images;
    const path = images[e.currentTarget.dataset.id];
    let len = images.length;
    const urls = [];
    for (let i = 0; i < len; i++) {
      urls.push(images[i]);
    }


    wx.previewImage({
      current: `${path}`,
      urls: [...urls]
    })
  },
  showTap(){
    let showOp = this.data.showOp;
    this.setData({
      showOp:!showOp
    })
  },
  addThumb(){
    let thumbs = this.data.content_info.thumbs;
    thumbs = thumbs +1;
    this.data.content_info.thumbs = thumbs;
    let nickNames = app.globalData.nickNames;
    const temp = [];
    for (let i = 0; i < thumbs-1; i++) {
      temp.push(nickNames[i]);
    }
    temp.push('佚名');
    this.setData({
      nickNames: temp
    })
  },
  deleteTap(e) {
    wx.showModal({
      content: '确定删除吗?',
      confirmText: '删除',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          this.setData({
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

})