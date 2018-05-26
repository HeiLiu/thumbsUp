Page({
  data: {
    entity: {
      content: '',
      status: ''
    },
    images: [{
        id: 1,
        path: '/assets/images/avatar/3.png'
      }
    ],
    loading: false,
    thumbs:22,
    location:''
  },
  onLoad(event) {
  },
  onShow(event){
  },
  onInputContent(event){
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
    // wx.request({
    //   // 将API地址模块化，有利于以后的维护
    //   data: {
    //     ...this.data.entity
    //   },
    //   success: (response) => {
    //     this.setData({
    //       entity: {
    //         content: '',
    //         status: 'comments'
    //       },

    //       loading: false
    //     });
    //     wx.navigateTo({
    //       url: `/pages/posts/posts?id=${response.data.data.id}`
    //     })
    //   }
    // });
  },
  onChooseImage(event) {
    console.log('asd');
    let id = this.data.images[length].id;
    console.log(this.data.images[length]);
    console.log(this.data.images[length].id);
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album', 'camera'], //可以指定来源是相册还是相机
      success: (response) => {
        console.log(response);
        // 返回是一个数组
        const path = response.tempFiles[0].path;
        const images = [{
          id: id+1,
          path
        }, ...this.data.images];
        this.setData({
          images,
          length: images.length
        });
        console.log(this.data.images);
      }
    });
  },
  deleteTap(e) {
    // 长按图片删除
    var index = e.currentTarget.dataset.id;
    // console.log(`index:${index}`);
    var imgs = this.data.images;
    imgs.splice(index, 1);
    this.setData({
      images:imgs
    });
  },
  sliderChange(e){
    // console.log(e.detail.value);
    let thumbs = e.detail.value;
    this.setData({
      thumbs
    })
  },
  chooseAddress(e){
    // 选择地点
    var that = this;
    wx.chooseLocation({
      success:function(res){
        console.log(`位置名称:${res.name}`);
        console.log(`详细地址:${res.address}`);
        let location = res.address;
        that.setData({
          location
        })
      }
    })
  }
})