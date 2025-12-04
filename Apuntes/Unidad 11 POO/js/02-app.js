// Añadir metodos
class Cliente{

    constructor(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    }
    // se agregan los metodos de la clase cliente
    MostrarDatos(){
        return `EL cliente se llama ${this.nombre} tiene un saldo de ${this.saldo}`;
    }

    Retirar(retiro){
        this.saldo-= retiro;
    }

    static Mensaje(){
        return `Hola usuario Bienvenido`;
    }

}//fin de la clase Cliente
const Glenda=new Cliente ('Glenda Stockel',500);

console.log(Glenda.MostrarDatos());
Glenda.Retirar(150);
console.log(Glenda.MostrarDatos());


// los metodos estaticos reconocidos por la palabra reservada static solo pueden
// ser accedidos por la misma clase
console.log(Cliente.Mensaje());

