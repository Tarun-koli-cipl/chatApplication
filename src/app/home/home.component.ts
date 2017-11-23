import { Component, OnInit } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/common';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { msgService } from './message.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    public data;
    messages = []

    constructor(public chatMsg: msgService, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    ngOnInit() {
        this.loadAllUsers();
        this.messages = this.chatMsg.messageChat();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}