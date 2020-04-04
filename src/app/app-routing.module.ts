import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodolistComponent} from './components/todolist/todolist.component';


const routes: Routes = [
  {path: 'next', component: TodolistComponent},
  {path: '**', component: TodolistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
