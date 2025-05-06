// index.js
Page({
  data: {
    currentCategory: 0,
    categories: [
      { id: 1, name: '热销' },
      { id: 2, name: '主食' },
      { id: 3, name: '小吃' },
      { id: 4, name: '饮品' },
      { id: 5, name: '甜点' }
    ],
    menuItems: [
      {
        id: 1,
        name: '招牌炒饭',
        description: '精选泰国香米，搭配新鲜蔬菜',
        price: 28,
        image: '/assets/images/dishes/dish1.jpg',
        count: 0
      },
      {
        id: 2,
        name: '香辣鸡翅',
        description: '外酥里嫩，香辣可口',
        price: 32,
        image: '/assets/images/dishes/dish2.jpg',
        count: 0
      }
    ],
    totalCount: 0,
    totalPrice: 0
  },

  onLoad() {
    // 页面加载时的初始化逻辑
  },

  // 切换分类
  switchCategory(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentCategory: index
    });
    // TODO: 根据分类加载对应的菜品
  },

  // 增加菜品数量
  increaseCount(e) {
    const id = e.currentTarget.dataset.id;
    const menuItems = this.data.menuItems;
    const index = menuItems.findIndex(item => item.id === id);
    
    if (index > -1) {
      menuItems[index].count += 1;
      this.setData({
        menuItems,
        totalCount: this.data.totalCount + 1,
        totalPrice: this.data.totalPrice + menuItems[index].price
      });
    }
  },

  // 减少菜品数量
  decreaseCount(e) {
    const id = e.currentTarget.dataset.id;
    const menuItems = this.data.menuItems;
    const index = menuItems.findIndex(item => item.id === id);
    
    if (index > -1 && menuItems[index].count > 0) {
      menuItems[index].count -= 1;
      this.setData({
        menuItems,
        totalCount: this.data.totalCount - 1,
        totalPrice: this.data.totalPrice - menuItems[index].price
      });
    }
  },

  // 跳转到购物车页面
  navigateToCart() {
    wx.navigateTo({
      url: '/pages/cart/cart'
    });
  },

  // 搜索菜品
  onSearch(e) {
    const keyword = e.detail.value;
    // TODO: 实现搜索逻辑
  }
});
