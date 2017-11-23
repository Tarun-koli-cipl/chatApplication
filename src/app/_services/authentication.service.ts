import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();

                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    let msg = [
                        { "msg": 'Hi Buddy' }, 
                        { "msg": 'How are you' }, 
                        { "msg": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
                        { "msg": 'Lorem Ipsum is simply dummy text typesetting industry' },
                        { "msg": 'Lorem Ipsum is simply dummy text.' }
                    ];
                    localStorage.setItem('messages', JSON.stringify(msg));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}