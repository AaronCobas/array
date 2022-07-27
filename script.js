class familiar { 
    constructor(nombre, edad, rolFamiliar){
        this.nombre = nombre
        this.apellido = "Gómez"
        this.edad = edad
        this.rolFamiliar = rolFamiliar
    }
}
const familiar1 = new familiar ("Maria", 35, "Madre")
const familiar2 = new familiar ("Fernando", 37, "Padre")
const familiar3 = new familiar ("Agustín", 15, "Hijo")
const familiar4 = new familiar ("Juana", 17, "Hija")
const familiar5 = new familiar ("José", 72, "Abuelo")
const familiar6 = new familiar ("Luisa", 68, "Abuela")
const familiares = [familiar1, familiar2, familiar3, familiar4, familiar5, familiar6]
familiares.splice(5,1)
familiares.push(new familiar("Martín", 0, "Hijo"))
console.log(familiares)
console.log("Este año, en la familia Gómez, falleció la abuela Luisa y nació Martín")