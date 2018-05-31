Page({
    data:{
        rotate:''
    },
    onTap(){
        this.setData({
            rotate:true
        })
        setTimeout(function(){
            wx.redirectTo({
                // 不需要返回上一层
                url:"../index/index"
            })
        },2000)
    }
})