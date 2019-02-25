var TouchTab = {
  //注册点击事件
  regEvent: function () {
    var _this = this;
    //点击tab触发
    $('.touch-tab-box>.touch-tab-list>li').on('click', function () {
      _this.changTabPage(this);
    });
  },

  //设置宽度
  setWidth:function(){
    var boxWidty = 0;
    $('.touch-tab-box>.touch-tab-list>li').each(function(){
      var itemWidth = $(this).outerWidth(true);
      boxWidty += itemWidth;
    });
    $('.touch-tab-box>.touch-tab-list').css("width",boxWidty);
  },

  //切换tab页面
  changTabPage:function(obj){
    var _this = this;
    _this.setTab(obj); //设置选中状态
  },

  //设置选中状态
  setTab: function (ele) {
    $('.touch-tab-hover').removeClass('touch-tab-hover');
    $(ele).addClass('touch-tab-hover');
    var indicatorWidth = 15; //指示器宽度
    var indicatorOffset = 0; //指示器偏移量
    var x = $(ele).position().left; //li的位置
    var w = $(ele).outerWidth(true); //li的宽度
    indicatorWidth = w / 3;
    indicatorOffset = x + ((w - indicatorWidth) / 2);
    $('.indicator').css({"left": indicatorOffset, "width": indicatorWidth});
  },

  init: function(){
    this.regEvent();
    this.setWidth();
  },
};

TouchTab.init();