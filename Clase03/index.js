const contarPalabras = (frase, callback, ms=1000) =>{
    return new Promise((resolve)=> {
        let i = 0;
        const arreglo = frase.split(" ");
    
        const recorrerFrase = () =>{
            if(i < arreglo.length){
                console.log(arreglo[i]);
                i++;
            }else{
                clearInterval(intervalo);
                callback(i);
                resolve(i);
            }
        }
        const intervalo = setInterval(recorrerFrase, ms)
    })
}

//Funcion Callback:
const fin = (cantidadPalabras) =>{
    console.log(`La frase tenia ${cantidadPalabras} palabras`);
}

const invocarFuncion = async() =>{
    let tot = 0;
    tot += await contarPalabras("Rusia declara la guerra a Ucrania", fin, 300);
    tot += await contarPalabras("Rusia invade Ucrania :(", fin, 300);
    tot += await contarPalabras("Ucrania pide negociar", fin, 300);

    console.log(`proceso completo`)
    console.log(`El total de palabres fue= ${tot}`)
};

invocarFuncion();