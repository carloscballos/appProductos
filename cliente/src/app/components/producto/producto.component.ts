import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { InfoProductoService } from 'src/app/services/info-producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  constructor(private fb:FormBuilder, private router: Router,private toastr: ToastrService,
              private _InfoProductoService: InfoProductoService, private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      nombre: ["",Validators.required],
      categoria: ["",Validators.required],
      ubicacion: ["",Validators.required],
      cantidad: ["",Validators.required],
      precio: ["",Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarProducto(){
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    if(this.id !== null){
      this._InfoProductoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
        this.toastr.info('el producto fue editado con exito','Producto actualizado');
        this.router.navigate(['']);
      }, error =>{
        console.log(error);
        this.productoForm.reset();
      })
    } else{    
    console.log(PRODUCTO);
    this._InfoProductoService.guardarProducto(PRODUCTO).subscribe(data =>{
      this.toastr.success('el producto fue registrado con exito','Producto registrado');
      this.router.navigate(['']);
    }, error =>{
      console.log(error);
      this.productoForm.reset();
    })
    this.toastr.success('El producto fue registrado con exito', 'Producto registrado');
    this.router.navigate([""]);    
  }
}
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._InfoProductoService.obtenerProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          cantidad: data.cantidad,
          precio: data.precio
        })
      })
    }
  }
}
