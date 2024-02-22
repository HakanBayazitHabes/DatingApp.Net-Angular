import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessagesService } from 'src/app/_services/messages.service';

@Component({
  selector: 'app-member-messages',
  standalone: true,
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
  imports: [CommonModule],
})
export class MemberMessagesComponent implements OnInit {
  @Input() username?: string;
  messages: Message[] = [];

  constructor(private messageService: MessagesService) {}
  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    if (this.username) {
      this.messageService
        .getMessageThread(this.username)
        .subscribe((messages) => {
          this.messages = messages;
        });
    }
  }
}
