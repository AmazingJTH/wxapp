Page({
    data:{
      current: 0,
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
      var that=this;
      setTimeout(function () {
        that.setData({
          loadingHidden: true
        });
      }, 1000);
    },
    actionToupper: function () {
      var that = this;
      this.setData({
        refreshHidden: false
      });
      setTimeout(function () {
        that.setData({
          refreshHidden: true
        });
      }, 1000);
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
    },
    videoErrorCallback: function (e) {
        console.log(e.detail.errMsg);
    }
})
