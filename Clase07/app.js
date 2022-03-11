import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});

let contadorGet = 0;
let contadorRandom = 0;

//Endpoints
app.get('/get', async(req, res)=>{
    contadorGet +=1;
    const productosString = await fs.promises.readFile("productos.txt", "utf-8");
    //console.log(typeof(productosString))
    const productosArray = await JSON.parse(productosString);
    //console.log(typeof(productosArray))

    const objeto = {
        items: productosArray,
        cantidad: productosArray.length
    }

    res.send(objeto)
});

app.get('/item-random', async(req,res)=>{
    contadorRandom +=1;

    const productosString = await fs.promises.readFile('productos.txt', 'utf-8');
    const productosArray = await JSON.parse(productosString);

    //Obtengo un numero random basandome en el largo del array (objeto) productosArray
    let random = Math.floor(Math.random()*productosArray.length);
    
    const objeto ={
        item: productosArray[random]
    }

    res.send(objeto)

});

app.get('/visitas', (req, res)=>{
    const objeto ={
        visitas_contador_productos: contadorGet,
        visitas_vista_random: contadorRandom

    }

    res.send(objeto)
});

