export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    cantidad: number;    
    precio: number;

    constructor(nombre:string,categoria:string,ubicacion:string,cantidad:number,precio:number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.cantidad = cantidad;
        this.precio = precio;
    }    
}