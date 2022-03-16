export default class ContenedorProductos{
    constructor(){
        this.products = [];
    }

    //metodo de la clase para leer todos los productos
    getAllProducts = () =>{
        return this.products;
    }

    //Metodo para busqueda puntual
    getSingleProduct = (id)=>{
        return this.products[id]
    }

    //Metodo para guardar un producto en el array de objetos
    saveProduct = (product) =>{
        this.products.push(product);
    }

}