class Orden {
    static contador = 0;

    constructor(producto) {
        this._idOrden = Orden.contador++;
        this._producto[this._idOrden] = producto;
    }
    Orden() {
        function agregarProductos() {
            
        }
    }
}