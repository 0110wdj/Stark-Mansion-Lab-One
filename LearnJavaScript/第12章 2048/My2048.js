(function (window, document, $) {
  function My2048(opt) {
    var prefix = opt.prefix,
      len = opt.len,
      size = opt.size,
      margin = opt.margin;
    var view = new View(prefix, len, size, margin);
    // console.log(prefix, len, size, margin);

    // 设置棋盘背景的宽度和高度
    function View() {
      this.prefix = prefix;
      this.len = len;
      this.size = size;
      this.margin = margin;
      this.container = $("#" + prefix + "_container");
      var containerSize = len * size + margin * (len + 1);
      //   console.log(containerSize);
      //   console.log(len * size + margin * (len + 1));
      //   console.log(margin * (len + 1));
      //   console.log(margin , (len + 1));
      //   console.log(len * size);
      //   console.log(len , size);
      this.container.css({ width: containerSize, height: containerSize });
      this.nums = {};
    }
  }
  window["My2048"] = My2048;
})(window, document, jQuery); //jQuery 区分大小写
