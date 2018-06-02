
Page({
    data: {
        rotate: ''
    },
    onTap() {
        this.setData({
            rotate: true
        })
        setTimeout(function () {
            navigateTo();
        }, 2000)
    },

    navigateTo:function() {
        wx.redirectTo({
            // 不需要返回上一层
            url: "../index/index"
        })
        setTimeout(navigateTo(),2000)
    },
    
    onLoad() {
        setTimeout(() => {
            this.setData({
                rotate: true
            })
            navigateTo();
        }, 5000)
    }
})