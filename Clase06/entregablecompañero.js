const fs = require("fs");
const productos = [];

class Archivo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    async leer() {
        try {
            const content = await fs.promises.readFile(this.nombre, "utf-8");
            if (content) return console.info(content);
        } catch (error) {
            console.error([]);
        }
    }
    async guardar(producto) {
        try {
            productos.push(producto);
            await fs.promises.writeFile(this.nombre, JSON.stringify(productos));
        } catch (error) {
            console.error(`No se pudo leer el archivo. Error: ${error}`);
        }
    }
    async borrar() {
        try {
            fs.unlink(this.nombre, err => console.error(`El archivo no existe. ${err}`));
        } catch (error) {
            console.error(`Ocurrió un error. Error: ${error}`);
        }
    }
}

const archivo = new Archivo("productos.txt");
archivo.guardar({ title: "Producto1", price: 300, thumbnail: "URLProducto1", id: productos.length + 1 });
archivo.guardar({ title: "Producto2", price: 1200, thumbnail: "URLProducto2", id: productos.length + 1 });
archivo.guardar({ title: "Producto3", price: 5000, thumbnail: "URLProducto3", id: productos.length + 1 });
archivo.leer();