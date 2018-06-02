Page({
  data: {
    entity: {
      content: '',
      status: ''
    },
    images: [],
    loading: false,
    thumbs: 22,
    location: '',
    publishTime:['1分钟前','10分钟前','30分钟前','1小时前'],
    selector:''
  },
  onLoad(event) {},
  onShow(event) {
    // 在每一次页面显示时 按钮的加载状态都为false
    this.setData({
      loading: false
    })
  },
  onInputContent(event) {
    // 文章内容边输入边保存
    let content = event.detail.value;
    let entity = this.data.entity;
    entity.content = content;
    console.log(content);
    this.setData({
      entity
    })
  },
  onChangeStatus(event) {
    console.log(event.detail.value);
    this.setData({
      ['entity.status']: event.detail.value ? 'comments' : ''
    });

  },
  onTapSubmitButton(event) {
    // disable状态 ui 组件很多状态 loading
    // 提交 ajax wx.request
    this.setData({
      loading: true
    });
    wx.setStorageSync('content_info', this.data);
    wx.navigateTo({
      url: '../main/main'
    })
  },
  onChooseImage(event) {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'], //可以指定来源是相册还是相机
      success: (response) => {
        console.log(response);
        // 返回是一个数组
        // const path = response.tempFiles[0].path;
        const images = this.data.images;
        this.setData({
          // 还有一个小小的bug 以及长按图片删除
          images: [...response.tempFiles]
        });
        // console.log(this.data.images);
      }
    });
  },
  deleteTap(e) {
    var imgList = this.data.images;
    // console.log(imagesList);
    const index = e.currentTarget.dataset.item;
    console.log(index);
    imgList.splice(index, 1); 

    wx.showModal({
      title: '温馨提示',
      content: '确定要删除吗',
      showCancel: false,
      confirmText: '确定',
      success:(response)=>{
        this.setData({
          images:imgList
        });
      }
    });
  }
,
  sliderChange(e) {
    // console.log(e.detail.value);
    let thumbs = e.detail.value;
    this.setData({
      thumbs
    })
  },
  chooseAddress(e) {
    // 选择地点
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(`位置名称:${res.name}`);
        console.log(`详细地址:${res.address}`);
        let location = res.address;
        that.setData({
          location
        })
      }
    })
  },
  bindPublishChange(e) {
    const id = e.detail.value;
    console.log(e.detail);
    const type = e.currentTarget.dataset.type;
    this.setData({
      selector: this.data.publishTime[id]
    })
  }
})