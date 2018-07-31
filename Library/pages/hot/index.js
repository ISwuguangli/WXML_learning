// pages/hot/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/swiperImage/swiper_img1.jpg',
      '/swiperImage/swiper_img2.jpg',
      '/swiperImage/swiper_img3.jpg',
      '/swiperImage/swiper_img4.jpg',
      '/swiperImage/swiper_img5.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    Height:""
  },

 /**
  * 图片高度宽度自适应
  */
  imgHeight:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth;
    var imgh = 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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