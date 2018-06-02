
Page({
    data: {
        rotate: ''
    },
    navigateTo:function() {
        wx.redirectTo({
            // 不需要返回上一层
            url: "../index/index"
        })
        // setTimeout(navigateTo(),2000)
    },

    onTap() {
        this.setData({
            rotate: true
        })
       setTimeout(()=>{
        //    navigateTo定义为了对象的方法 所以要用this调用
        this.navigateTo()
       },2000)
    },

    
    onLoad() {
          setTimeout(() => {
            this.setData({
                rotate: true
            })
           setTimeout(()=>{this.navigateTo()},2000);
        }, 5000)
    },
    onShow(event){
     
    }
})