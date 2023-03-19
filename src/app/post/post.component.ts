import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  childMessages= 'Message from Child components';
  maadevaa='Maadevaa'
  eventmessages= 'Har Har Mahadev'
  @Input() parent!: string;

  @Output() messageEvent=new EventEmitter<string>();

 
  constructor() { }

  ngOnInit(): void {}

  sentMessage(){
    this.messageEvent.emit(this.eventmessages);
  }

}
