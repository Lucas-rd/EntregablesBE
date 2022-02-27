const operacion = async(num1:number, num2:number, operando:string) =>{
    if(operando === "suma"){
        let cuenta = await import('./calculo.js')
        let resultado = cuenta.suma(num1, num2);
        return new Promise((resolve)=>{
            setTimeout(() =>{
                resolve(resultado)
            }, 1000)
        })
    } else if(operando === "resta"){
        let cuenta = await import('./calculo.js');
        let resultado = cuenta.resta(num1, num2);
        return new Promise((resolve)=> {
            setTimeout(()=>{
                resolve(resultado)
            }, 1000)
        })
    }
}

const operaciones = async(num1:number, num2:number, operando:string) =>{
    let resultado = await operacion(num1, num2, operando)
    console.log(resultado)
}

operaciones(2,1,"suma");
operaciones(2,1,"resta");