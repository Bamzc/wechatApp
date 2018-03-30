//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '请问你是小哥哥或者小姐姐吗？',
    userInfo: {},
    hasUserInfo: false,
    clientHeight:0,
    photosArr: ['https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1518160337738.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1518165431116.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1518166146603.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1518166978383.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1518167386448.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1518311742969.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1519149192812.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1519149343209.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1519151130528.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1519151158726.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1519487382224.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520006732649.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520076500617.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520175448294.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520175779184.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520175868724.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520175992571.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520340950635.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520345475689.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520411652020.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520426695474.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520552125444.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520566775021.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520567002268.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520567137083.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520569653378.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520596127394.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520596156999.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520599476438.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520600491717.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520600574618.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520601563474.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520764706746.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520765060787.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520773998148.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520774039111.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520774154360.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1520844991766.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521178739989.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521292422528.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521735986119.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521813424616.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521814143546.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521867198382.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521867217943.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521867431454.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1521952680589.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1522021048905.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1522067063417.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1522345676602.jpg', 'https://babmzc-1256314511.cos.ap-beijing.myqcloud.com/photo/1522388004462.jpg'],
    arr:[],
    arrHight:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    }) 
    let arr = [];
    let arrHight = [];
    for(let i=0;i<this.data.photosArr.length;i++){
      //arrHight[i] = Math.floor(i / 2) * (img.height + margin - bottom);
      arrHight.push(Math.floor(i / 2) * (320+20));
      
      if (arrHight[i] < this.data.clientHeight) {
        arr.push(true)
      }else{
        arr.push(false);
      }
    }
    this.setData({
      arr:arr,
      arrHight:arrHight
    })
    console.log(this.data.clientHeight)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  scroll:function(e){
    let seeHeight = this.data.clientHeight;
    let arrHight = this.data.arrHight;
    let event = e;
    let scrollTop = event.detail.scrollTop;
    let arr = this.data.arr;
    for(let i=0;i<this.data.photosArr.length;i++){
      if(arrHight[i] < scrollTop){
        if(arr[i] == false){
          arr[i] = true;
        }
      }
    }
    this.setData({
      arr: arr
    }) 
  }
})
