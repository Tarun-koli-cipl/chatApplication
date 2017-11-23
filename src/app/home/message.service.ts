import { Injectable } from '@angular/core';
@Injectable()

export class msgService {
    messageChat() {
        let x = JSON.parse(localStorage.getItem('messages'));
        //console.log(x);
        return x;
    }
}