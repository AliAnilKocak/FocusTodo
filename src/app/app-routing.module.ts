import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodolistComponent} from './components/todolist/todolist.component';


const routes: Routes = [
  {path: '', component: TodolistComponent},
  // {path: '**', component: TodolistComponent},
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
