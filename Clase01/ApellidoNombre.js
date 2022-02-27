class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this. apellido = apellido;
        this. libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}.`)
    }

    addMascota(nickNameMascota){
        this.mascotas.push(nickNameMascota)
        console.log(this.mascotas)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(nombre1, autor1){
        this.libros.push({nombre:nombre1, autor:autor1})
        console.log(this.libros)
    }

    getBookNames(){
        let nombresDeLibros = this.libros.map((libro) => {
            return libro.nombre;
        })

        console.log(nombresDeLibros);
    }
}


let usuario1 = new Usuario("Pepe", "Sanchez",[{nombre: "El señor de los anillos", autor: "Tolkien"},{nombre: "Harry Potter", autor: "JKK Rowling"}],["Timon", "Pumba"])

//Probamos el metodo de getFullname:
usuario1.getFullName();

//Probamos el metodo de contar mascotas, luego agrego una y vuelvo a contar:
usuario1.countMascotas();
usuario1.addMascota("Simba");
usuario1.countMascotas();

//Pruebo agregar dos libros y luego cuento usando el metodo de getBookNames declarado dentro de la clase.
usuario1.addBook("Maze Runner", "James Dashner");
usuario1.addBook("El libro de la Selva", "Rudyard Kipling");

usuario1.getBookNames();

