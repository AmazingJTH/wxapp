Page({
  data:{
    imgurl:"/images/login-head.png",
    islogin:"未登录",
    modalHidden: true,
    userInfo:{
      username: '',
      password: ''
    },
    actionSheet: {
      actionSheetHidden: true,
      actionSheetItems: ['帮助','退出']
    }
  },
  onShow: function() {
    var that=this;
    var u = wx.getStorageSync('username');
    if(u) {
      this.setData({
        imgurl:'/images/logined.png',
        islogin:wx.getStorageSync('username')
      });
    }
  },
  signin:function(){
    this.setData({
      modalHidden: false
    })
  },
  signout:function(){
    this.setData({
      'actionSheet.actionSheetHidden': false
    })
  },
  actionConfirm: function () {
    var that=this;
    wx.setStorageSync('username', this.data.userInfo.username);
    wx.setStorageSync('password', this.data.userInfo.password);
    this.setData({
      modalHidden: true,
      imgurl:'/images/logined.png',
      islogin:that.data.userInfo.username
    })
  },
  actionCancel: function () {
    this.setData({
      modalHidden: true
    })
  },
  saveUsername: function (event) {
    this.setData({
      'userInfo.username': event.detail.value
    })
  },
  savePassword: function (event) {
    this.setData({
      'userInfo.password': event.detail.value
    })
  },

  bindItemTap: function (event) {
    var that=this;
    switch (event.target.dataset.name) {
      case '帮助':
        console.log(0);
        break;
      case '退出':
        wx.setStorageSync('username', '');
        wx.setStorageSync('password', '');
        this.setData({
          'actionSheet.actionSheetHidden': true,
          imgurl:'/images/login-head.png',
          islogin:'未登录'
        })
        break;
    }
  },
  cancelActionSheet: function () {
    this.setData({
      'actionSheet.actionSheetHidden': true
    });
  },
  actionSheetChange: function () {

  }
})
