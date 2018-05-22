Page({
    onTap(){
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        wx.redirectTo({
            // 不需要返回上一层
            url:"../index/index"
        })
    }
})