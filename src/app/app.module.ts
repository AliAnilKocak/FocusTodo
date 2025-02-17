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
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {TodolistComponent} from './components/todolist/todolist.component';
import {AuthModule} from './auth/auth.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavComponent,
    TodolistComponent,
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
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
