Page({
  data: {
    cartItems: [],
    totalCount: 0,
    totalPrice: 0
  },

  onLoad() {
    // 从本地存储或全局状态获取购物车数据
    this.loadCartData();
  },

  onShow() {
    // 每次显示页面时重新加载购物车数据
    this.loadCartData();
  },

  // 加载购物车数据
  loadCartData() {
    // TODO: 从本地存储或全局状态获取购物车数据
    const cartItems = [
      {
        id: 1,
        name: '招牌炒饭',
        price: 28,
        image: '/assets/images/dishes/dish1.jpg',
        count: 2
      },
      {
        id: 2,
        name: '香辣鸡翅',
        price: 32,
        image: '/assets/images/dishes/dish2.jpg',
        count: 1
      }
    ];

    const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

    this.setData({
      cartItems,
      totalCount,
      totalPrice
    });
  },

  // 增加商品数量
  increaseCount(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems;
    const index = cartItems.findIndex(item => item.id === id);
    
    if (index > -1) {
      cartItems[index].count += 1;
      this.updateCart(cartItems);
    }
  },

  // 减少商品数量
  decreaseCount(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems;
    const index = cartItems.findIndex(item => item.id === id);
    
    if (index > -1 && cartItems[index].count > 0) {
      cartItems[index].count -= 1;
      if (cartItems[index].count === 0) {
        cartItems.splice(index, 1);
      }
      this.updateCart(cartItems);
    }
  },

  // 更新购物车数据
  updateCart(cartItems) {
    const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

    this.setData({
      cartItems,
      totalCount,
      totalPrice
    });

    // TODO: 更新本地存储或全局状态
  },

  // 去点餐
  goShopping() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 去结算
  checkout() {
    if (this.data.totalCount === 0) {
      wx.showToast({
        title: '请先选择商品',
        icon: 'none'
      });
      return;
    }

    // TODO: 跳转到订单确认页面
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  }
}); 