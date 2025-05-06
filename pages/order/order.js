// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,
        tabs: [
            { id: 0, name: '全部' },
            { id: 1, name: '待支付' },
            { id: 2, name: '已完成' }
        ],
        orderList: [
            {
                id: '20240430001',
                status: '待支付',
                total: 88,
                dishes: [
                    { name: '招牌炒饭', count: 2, image: '/assets/images/dishes/dish1.jpg' },
                    { name: '香辣鸡翅', count: 1, image: '/assets/images/dishes/dish2.jpg' }
                ]
            },
            {
                id: '20240430002',
                status: '已完成',
                total: 32,
                dishes: [
                    { name: '香辣鸡翅', count: 1, image: '/assets/images/dishes/dish2.jpg' }
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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

    // 切换订单tab
    switchTab(e) {
        const index = e.currentTarget.dataset.index;
        this.setData({ currentTab: index });
        // TODO: 根据tab筛选订单
    },

    // 去支付
    payOrder(e) {
        const id = e.currentTarget.dataset.id;
        wx.showToast({
            title: '模拟支付功能',
            icon: 'none'
        });
    }
})