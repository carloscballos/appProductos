import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: "",component: ListaProductosComponent},
  {path: "crearProducto",component: ProductoComponent},
  {path: "editarProducto/:id",component: ProductoComponent},
  {path: "**", redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
