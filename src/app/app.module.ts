import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { CookieService } from 'ngx-cookie-service';
import { SearchFilterPipe } from '../pipes/search-filter/search-filter';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage
    
  ],
  providers: [
    CookieService,
    HTTP,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
