import express from 'express';
import ContenedorProductos from './services/classProducto.js';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})

//Creo la instancia de la clase que importe. Esta instancia se crea con el array de objetos products vacio como se indica en el cosntructor.
const productService = new ContenedorProductos();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Buscador de todos los productos
app.get('/api/products', (req, res)=>{
    res.send(productService.getAllProducts());
})

//Buscador de producto individual
app.get('/api/products/:id', (req,res)=>{
    let {id} = req.params;
    let parseId = parseInt(id);
    res.send(productService.getSingleProduct(parseId))
})

//Guardador de producto nuevo
app.post('/api/products', (req, res)=>{
    let {title, price, thumbnail} = req.body;

    //creo una variable "id" la cual uso para guardar el largo del array de la instancia y luego la inyecto como parametro en el llamado al metodo saveProduct.
    let id = productService.products.length
    let producto = productService.saveProduct({title, price, thumbnail, id});
    console.log(productService.products.length)
    res.send({message: "Added product"});
})

/*
Ejemplo de JSON para el metodo post del POSTMAN:
    {
        "title": "producto de prueba 21",
        "price": 5000,
        "thumbnail": "URL producto 21"
    }
*/