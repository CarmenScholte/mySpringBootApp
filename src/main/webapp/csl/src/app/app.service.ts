import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

	constructor(private http: HttpClient) {
	}

	getExample() {
		return this.http.get('//localhost:8080/example', {responseType: 'text'});
	}

}