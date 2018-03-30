//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '请问你是小哥哥或者小姐姐吗？',
    userInfo: {}, 
    inputShowed: false,
    inputVal: "",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: ["	https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/header/1.jpg",
      "	https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/header/2.jpg",
      "	https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/header/3.jpg",
      "	https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/header/4.jpg"
    ],
    newsImgUrls: ["	https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/news/1.jpg", "	https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/news/2.jpg"],
    grids: ['武当', '云梦', '华山', '暗香', '少林'],
    gridsIconUrls: ['https://clx.res.netease.com/pc/gw/20170921175633/img/wdimg_d021a8e.png', 'https://clx.res.netease.com/pc/gw/20170921175633/img/ymimg_66098eb.png','https://clx.res.netease.com/pc/gw/20170921175633/img/hsimg_9a9f7f0.png',
      'https://clx.res.netease.com/pc/gw/20170921175633/img/aximg_5519018.png',
    'https://clx.res.netease.com/pc/gw/20170921175633/img/slimg_7ff1b2b.png'],
    indicatorDots: false,
    autoplay: true,
    bgUrl:'https://clx.res.netease.com/m/gw/20170921144908/img/bg0_2_7c13fa8.jpg',
    interval: 2000,
    duration: 1000,
    menuUrls: ["/pages/mplist/wudang/index", "/pages/mplist/yunmeng/index", "/pages/mplist/huashan/index", "/pages/mplist/anxiang/index", "/pages/mplist/shaolin/index"]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})
