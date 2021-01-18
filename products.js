class products{
    constructor(name, description, quantity){
        this.name=name;
        this.description=description;
        this.quantity=quantity;

    }
}
class productsmanagement {
    constructor(){
        this.listproducts=[]
    }
    addproducts(roducts){
        this.listproducts.push(product);
    }
    removeproducts(product){
        for(var i=0; i<this.listproducts.length; i++){
            if(this.listproducts[i]==product){
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateproducts(product, newproduct){
        for(var i=0; i<this.listproducts.length; i++){
            if(this.listproducts[i]==product){
                this.listproducts[i]==newproduct;
                return;
            }
        }
     }
      showproducts(){
          return this.listproducts;
      
    }

}
export {products, productsmanagement}