Page({
  data: {
    entity: {
      content: '',
      status: 'publish'
    },
    images: [{
        id: 1,
        path: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=31308be09edda144da5c3ff2d48ae790/3b87e950352ac65c2ddf4980f2f2b21192138a6e.jpg'
      }
    ],
    loading: false
  },
  onLoad(event) {
  },
  onChangeStatus(event) {
    console.log(event.detail.value);
    this.setData({
      ['entity.status']: event.detail.value ? 'publish' : ''
    });

  },
  onTapSubmitButton(event) {
    // disable状态 ui 组件很多状态 loading
    // 提交 ajax wx.request
    this.setData({
      loading: true
    });
    wx.request({
      // 将API地址模块化，有利于以后的维护
      url: API_CREATE,
      method: 'POST',
      data: {
        ...this.data.entity
      },
      success: (response) => {
        this.setData({
          entity: {
            title: '',
            content: '',
            status: 'publish'
          },

          loading: false
        });
        wx.navigateTo({
          url: `/pages/posts/posts?id=${response.data.data.id}`
        })
      }
    });
  },
  onChooseImage(event) {
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
    var index = e.currentTarget.dataset.id;
    // console.log(`index:${index}`);
    var imgs = this.data.images;
    imgs.splice(index, 1);
    this.setData({
      images:imgs
    });
  }
})