const {fromEvent, Observable} = rxjs; //fromEvent es un creador de observables de eventos del DOM
const { switchMap, tap, map } = rxjs.operators;

const input = document.getElementById("miInput");
const span = document.getElementById("miParrafo");

//Observable
const inputObservavble = fromEvent(input, 'input').pipe(
    map(()=> input.value),
    switchMap(texto => new Observable(observer =>{ //switchMap recibe un observable y los transforma en otro observable
        if(texto === "error"){
            observer.error("El usuario ingreso ERROR")
        } else if(texto === "complete"){
            observer.complete(console.log("El usuario ingreso COMPLETE"))
        } else {
            observer.next(texto)
        }
    }))
);

//observer
const subscripcion = inputObservavble.subscribe({
    next: (val) => span.innerHTML = val.split("").reverse().join(""),
    error: (error) => console.error(error),
    complete: (complete) =>console.info(complete)
});

setTimeout(()=>{
    subscripcion.unsubscribe();
    span.innerHTML = "";
    input.value = "";
}, 30000);

