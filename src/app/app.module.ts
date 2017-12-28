import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatService } from 'app/chat.service';
import { ChatcomponentComponent } from './chatcomponent/chatcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
