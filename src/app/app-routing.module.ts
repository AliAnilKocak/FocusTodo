import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NextComponent} from './components/actions/next/next.component';
import {WaitingComponent} from './components/actions/waiting/waiting.component';
import {ScheduledComponent} from './components/actions/scheduled/scheduled.component';
import {SomedayComponent} from './components/actions/someday/someday.component';


const routes: Routes = [
  {path: 'next', component: NextComponent},
  {path: 'waiting', component: WaitingComponent},
  {path: 'scheduled', component: ScheduledComponent},
  {path: 'someday', component: SomedayComponent},
  {path: '**', component: NextComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
