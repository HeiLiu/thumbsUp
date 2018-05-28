Page({
  /**
   * 页面的初始数据
   */
  data: {
    content_info:[],
    comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content_info = wx.getStorageSync('content_info');
    console.log(content_info);
    this.setData({
      content_info
    })
    console.log(this.data.content_info.entity.content);
  },
  bindAdd(){
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