Page({
  data: {
    id: 0,
    detailInfo:{
      title:' ',
      img:[],
      content:[]
    },
    src1:'/images/zan.png',
    src2:'/images/cha.png'
  },
  onLoad: function (params) {
    this.setData({
      id: params.id
    })
  },
  onReady: function () {
    var that = this;
    console.log(that.data.id);
    wx.request({
      url: 'http://localhost/mock/detail.json',
      success: function (res) {
        wx.setNavigationBarTitle({
          title: res.data[that.data.id].title,
          success: function () {
            that.setData({
              detailInfo:{
                title: res.data[that.data.id].title,
                img:res.data[that.data.id].img,
                content:res.data[that.data.id].content
              }
            });
          }
        });
      }
    })
  },
  add:function(){
    this.setData({
      src1:'/images/yizan.png',
      src2:'/images/cha.png'
    })
  },
  sub:function(){
    this.setData({
      src1:'/images/zan.png',
      src2:'/images/yicha.png'
    })
  }

})
