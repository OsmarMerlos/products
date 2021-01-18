import {product, productsmanagement} from "./products";
let p1=new product("pollo", "pollo sofia", 20);
let p2=new product("galletas", "galletas mabel", 50);
let manager = new productsmanagement();
manager.addproducts(p1);
manager.addproducts(p2);
console.log(manager.showproducts());