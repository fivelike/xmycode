import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserCenter } from '../pages/usercenter/usercenter';

import { TabsPage} from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { HomeDetail } from '../pages/homedetail/homedetail';
import { ContactDetails} from '../pages/contactdetails/contactdetails';
import {MessageDetail} from '../pages/messagedetail/messagedetail';
import { LoginPage } from '../pages/login/login';
import { Register } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    UserCenter,

    TabsPage,
    ContactPage,
    HomePage,
    MessagesPage,
    HomeDetail,
    ContactDetails,
    MessageDetail,
    LoginPage,
    Register
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserCenter,

    TabsPage,
    ContactPage,
    HomePage,
    MessagesPage,
    HomeDetail,
    ContactDetails,
    MessageDetail,
    LoginPage,
    Register
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
