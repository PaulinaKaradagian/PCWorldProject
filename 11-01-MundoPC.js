class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada() {
        return this._tipoEntrada

    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada

    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }

   
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0
         
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
        
    }
    get idRaton(){
        return this._idRaton
    }
    set idRaton(idRaton){
        this._idRaton = idRaton
    }
    toString(){
        return ` Raton: [Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}, idRaton: ${this._idRaton}]`
    }
}



 class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0
         
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
        
    }
    get idTeclado(){
        return this._idTeclado
    }
    toString(){
        
        return ` Teclado: [Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}, IdTeclado: ${this._idTeclado}]`
    }
}




 class Monitor {
     static contadorMonitores = 0

     constructor(marca, tamaño){
         this._marca = marca
         this._tamaño = tamaño
         this._idMonitor = ++Monitor.contadorMonitores
         
     }
     get idMonitor(){
         return this._idMonitor
     }
     get marca(){
         return this._marca
     }
     set marca(marca){
         this._marca = marca
     }
     get tamaño(){
         return this._tamaño
     }
     set tamaño(tamaño){
         this._tamaño = tamaño 
     }
     toString(){
         return ` Monitor: [Marca: ${this._marca}, Tamaño: ${this._tamaño}, IdMonitor: ${this._idMonitor}]`
     }
    }
class Computadora{

    static contadorComputadoras = 0
    constructor(nombre, monitor, raton, teclado){

        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._raton = raton
        this._teclado = teclado

    }
    toString(){
        return `Computadora:  ${this._idComputadora}: ${this._nombre} \n ${this._monitor}  \n ${this._teclado}  \n ${this._raton}`
    }
}

class Orden {

    static contadorOrdenes = 0
    constructor(){

        this.idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }
    get idOrden(){
        return this._idOrden
    }
    set idOrden(idOrden){
        this._idOrden = idOrden
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora)

    }
    mostrarOrden(){
        let computadorasOrden = " "
        for(let computadora of this._computadoras){
            computadorasOrden += ` \n ${computadora}`
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}


    let entrada1 = new DispositivoEntrada("USB", "Logitech")
    console.log(entrada1)

    let monitor1 = new Monitor("Hitachi", 26)
    console.log(monitor1.toString())
    let monitor2 = new Monitor("DELL", 34)
    console.log(monitor2.toString())

    let keyboard1 = new Teclado("USB", "Logitech")
    console.log(keyboard1)
    
    let keyboard2 = new Teclado("BlueTooth", "Santech")
    
    console.log(keyboard2)
    
    console.log(keyboard2.toString())
    console.log(keyboard1.toString())
    
    let raton1 = new Raton("USB", "Genius")
    raton1.marca = "Dell"
    let raton2 = new Raton("Bluetooth", "Mac")
    console.log(raton2.toString())
    console.log(raton1)
    console.log(raton1.toString())

    let compu1 = new Computadora("Mac", monitor1, raton2, keyboard1)
    console.log(compu1.toString())

    let compu2 = new Computadora("HP", monitor2, raton2, keyboard2)
    console.log(`${compu2}`)

    let compu3 = new Computadora("Armada", monitor1, raton1, keyboard1)
    console.log(`${compu3}`)

    let orden1 = new Orden()
    orden1.agregarComputadora(compu1)
    orden1.agregarComputadora(compu2)
    orden1.agregarComputadora(compu3)
    orden1.agregarComputadora(compu2)
    orden1.mostrarOrden()
    
    let orden2 = new Orden()
    orden2.agregarComputadora(compu3)
    orden2.agregarComputadora(compu1)
    orden2.mostrarOrden()
