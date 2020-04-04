import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import en from '@angular/common/locales/en';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContentComponent} from './components/content/content.component';
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NextComponent} from './components/actions/next/next.component';
import {ScheduledComponent} from './components/actions/scheduled/scheduled.component';
import {SomedayComponent} from './components/actions/someday/someday.component';
import {WaitingComponent} from './components/actions/waiting/waiting.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    TopNavComponent,
    NextComponent,
    ScheduledComponent,
    SomedayComponent,
    WaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    NzButtonModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
