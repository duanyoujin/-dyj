// pages/init/init.js
Page({
  phoneCall: function (e) {

    wx.makePhoneCall({

      phoneNumber: e.currentTarget.dataset.replyPhone,

      success: function () {

        console.log("成功拨打电话")

      },

    })

  },
  //复制
  textPaste() {
      wx.showToast({
        title: '复制成功',
      })
  },
  //
  add: function () {
    wx.addPhoneContact({
      firstName: '段有金',
      mobilePhoneNumber: this.data.op
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    img1:'http://qcloud.dpfile.com/pc/AcYpIZlIgoIy-k9lVv9KxqkQwo8xm0ShfltGIdiDdQlU9slrsejo5zHJIueJv84QTYGVDmosZWTLal1WbWRW3A.jpg'
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