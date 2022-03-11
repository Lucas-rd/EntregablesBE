//Imports
import fs from 'fs';

const productos = [];

//Clase
class Archivo{
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

    //Metodos de la clase
    async leer (){
        try{
            const content = await fs.promises.readFile(this.nombreArchivo,'utf-8')
            if(content) return console.info(content)
        }
        catch(error){
            console.log([])
        }
    }

    async guardar(productoNuevo){
        try{
            productos.push(productoNuevo);
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, "\t"));
        }
        catch(error){
            console.log(`Ocurrio un error al guardar. El error fue: ${error}`);
        }
    }

    async borrar(){
        try{
            await fs.promises.unlink(this.nombreArchivo);
            console.log("Archivo eliminado");
        }
        catch(error){
            console.log(`Ocurrio un error al eliminar. El error fue: ${error}`);
        }
    }
}

const archivo1 = new Archivo("productos.txt");

archivo1.guardar({
    title:"Producto_1",
    price: 100,
    thumbnail: "URL_IMG_1",
    id: productos.length + 1});

archivo1.guardar({
    title:"Producto_2",
    price: 200,
    thumbnail: "URL_IMG_2",
    id: productos.length + 1});

archivo1.guardar({
    title:"Producto_3",
    price: 300,
    thumbnail: "URL_IMG_3",
    id: productos.length + 1});

archivo1.leer();

