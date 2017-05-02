// pages/history/index.js
var util = require("../../../utils/myDate.js");
Page({
  data:{
    day:'',
    today:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var day = options.day;
    if(!day) {
      day = util.buildDay(0); //今天
    }
    this.setData({day: day});
    this.loadData(day);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  loadData: function(day) {
    var that = this;
    //var key = "03d6f756332d667e8446c4f1be4cf39b";
    var key ="165111e51320ec8138a34708089ddd45";
    var url = "https://api.h6vr.com/api_juhe_lssjt/get_api";
    wx.request({
      url: url,
      data: {
        key: key,
        date: day
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        that.setData({today: res.data.result});
      }
    })
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '【回顾历史 分享今天】', // 分享标题
      desc: '', // 分享描述
      path: 'pages/tool/history/index' // 分享路径
    }
  },
  goTo:function(){
    wx.reLaunch({
      url: '/pages/travel/travel'
    })
  }
})