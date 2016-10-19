Page({
  data: {
    current: 0,
    list: [],
    loadingHidden: false,
    refreshHidden: true,
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    }
  },
  onLoad: function () {
    console.log(this.data.refreshHidden);
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        setTimeout(function () {
          that.setData({
            list: res.data,
            loadingHidden: true
          });
        }, 1000);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: res.data.concat(that.data.list),
            refreshHidden: true
          });
        }, 1000);
      }
    });
  },
  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },
  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  }
})
