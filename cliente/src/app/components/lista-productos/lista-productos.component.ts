import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { InfoProductoService } from 'src/app/services/info-producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listProductos: Producto[] = [];

  constructor(private _InfoProductoService: InfoProductoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._InfoProductoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._InfoProductoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito','Producto eliminado')
      this.obtenerProductos();
    }, error => {
      console.log('error');
    })
  }
}
