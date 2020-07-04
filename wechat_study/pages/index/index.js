// pages/index/index.js
// 注册当前页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:  '初始化测试数据'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(window) // undefined
    /*
    修改状态数据：
      Vue: 
        1. this.key = value
        2. Vue中组件的实例对象实现了数据劫持代理data中的数据
        3. Vue中通过v-model指令实现View->Model
      React: 
        1. this.setState()
        2. 自身的钩子函数：异步修改
        3. 非自身的钩子函数：同步修改
        4. React是单向数据流： Model--->View
      小程序: 
        1. this.setData()
        2. setData行为始终是同步的
        3. 小程序没有进行数据劫持代理
        4. 小程序是单向数据流： Model--->View
    */ 
    // this: 当前页面的实例对象
    setTimeout(() => {
      this.setData({
        msg: '修改之后的数据'
      })
      console.log(this.data.msg)
    }, 2000)
  },
  // 事件的回调同生命周期函数平级放置
  // hanldeParent(){
  //   console.log('parent')
  // },
  // handleChild() {
  //   console.log('child')
  // },

  toLogs(){
    // 跳转至logs页面
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})