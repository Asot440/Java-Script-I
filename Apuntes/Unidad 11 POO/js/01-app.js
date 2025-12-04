// class declaration
class Cliente{

    constructor(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    }

}

const Glenda=new Cliente ('Glenda Stockel',500);

console.log(Glenda);



// class expresion
const Cliente_2=class{

    constructor(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    }

}

const Raul=new Cliente_2 ('Raul Sanchez',500);

console.log(Raul);

