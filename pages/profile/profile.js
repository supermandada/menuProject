// pages/profile/profile.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            avatar: '',
            nickname: '微信用户'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 这里可以后续对接微信用户信息
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    // 跳转到订单页面
    goOrder() {
        wx.switchTab({ url: '/pages/order/order' });
    },

    // 跳转到购物车页面
    goCart() {
        wx.switchTab({ url: '/pages/cart/cart' });
    },

    // 展示个人信息弹窗
    showInfo() {
        wx.showToast({ title: '个人信息功能开发中', icon: 'none' });
    }
})