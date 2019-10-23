import SMERouter from "sme-router";
import homeTpl from "../views/home.hbs";
import productsTpl from "../views/products.hbs";

//创建路由对象
const router = new SMERouter("router-view");

router.route("/home", (req, res) => {
  const homeHTML = homeTpl();
  res.render(homeHTML);
});

router.route("/products", (req, res) => {
  const productsHTML = productsTpl({
    list: [
      { id: 1, title: "上衣1" },
      { id: 2, title: "上衣2" },
      { id: 3, title: "上衣3" },
      { id: 4, title: "上衣4" }
    ]
  });

  res.render(productsHTML);

});


