(function (window) {
  var ShopCart = function (prefix, defCart) {
    Find.prototype.prefix = prefix;
    var cart = new Cart(document.getElementsByClassName(prefix)[0]);
    for (var i in defCart) {
      cart.add(defCart[i]);
    }
    cart.updateTotal();
  };
  function Cart(obj) {
    this.items = [];
    var find = new Find(obj);
    this.all = find.className("all");
    this.bottom = find.className("bottom");
    this.num = find.className("total-num");
    this.price = find.className("total-price");
    this.tmp = find.className("item");
    this.tmp.parentNode.removeChild(this.tmp);
    var cart = this;
    this.all.onclick = function () {
      cart.checkAll();
    };
  }
  Cart.prototype = {
    add: function (data) {
      var tmp = this.tmp.cloneNode(true);
      var item = new Item(tmp, data);
      var cart = this;
      item.check.onclick = function () {
        cart.updateTotal();
      };
      item.add.onclick = function () {
        item.num.textContent = ++item.data.num;
        item.updateSubtotal();
        cart.updateTotal();
      };
      item.reduce.onclick = function () {
        if (item.data.num > 1) {
          item.num.textContent = --item.data.num;
          item.updateSubtotal();
          cart.updateTotal();
        } else {
          alert("至少选择1件，如果不需要，请直接删除");
        }
      };
      item.del.onclick = function () {
        if (confirm("您确定要删除此商品吗？")) {
          tmp.parentNode.removeChild(tmp);
          cart.del(item);
          cart.updateTotal();
        }
      };
      item.updateSubtotal();
      this.items.push(item);
      this.bottom.before(tmp);
    },
    del: function (item) {
      for (var i in this.items) {
        if (this.items[i] === item) {
          delete this.items[i];
        }
      }
    },
    updateTotal: function () {
      var num = 0,
        price = 0;
      for (var i in this.items) {
        var item = this.items[i];
        if (item.check.checked) {
          num += item.data.num;
          price += item.data.num * item.data.price;
        }
      }
      this.num.textContent = num;
      this.price.textContent = price.toFixed(2);
    },
    checkAll: function () {
      for (var i in this.items) {
        this.items[i].check.checked = true;
      }
      this.updateTotal();
    },
  };
  function Item(tmp, data) {
    var find = new Find(tmp);
    this.check = find.className("check");
    this.name = find.className("name");
    this.price = find.className("price");
    this.num = find.className("num");
    this.add = find.className("add");
    this.reduce = find.className("reduce");
    this.subtotal = find.className("subtotal");
    this.del = find.className("del");
    this.data = data;
    this.name.textContent = data.name;
    this.price.textContent = data.price.toFixed(2);
    this.num.textContent = data.num;
  }
  Item.prototype = {
    updateSubtotal: function () {
      this.subtotal.textContent = (this.data.num * this.data.price).toFixed(2);
    },
  };
  function Find(obj) {
    this.obj = obj;
  }
  Find.prototype = {
    prefix: "",
    className: function (className) {
      return this.obj.getElementsByClassName(this.prefix + "-" + className)[0];
    },
  };
  window["ShopCart"] = ShopCart;
})(window);
