import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ChatService, Message } from '../chat.service';  
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/scan';  


@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chatcomponent.component.html',
  styleUrls: ['./chatcomponent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatcomponentComponent implements OnInit {

  messages: Observable<Message[]>;  
  strMsg: string; 


  constructor(private chat: ChatService) { }

  ngOnInit() {

    this.messages = this.chat.conversation.asObservable()  
    .scan((acc, val) => acc.concat(val));
  }
  sendMessage() {  
    this.chat.talk(this.strMsg);  
    this.strMsg = '';  
  }

}
