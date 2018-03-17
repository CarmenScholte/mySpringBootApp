import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const url = 'https://swapi.co/api/'

@Injectable()
export class SwapiService {


	constructor(private http: HttpClient) {
	}

	getSwapi() {
		return this.http.get(url);
	}

	getFilms() {
		return this.http.get(url + 'films/');
	}

	getPeople() {
		return this.http.get(url + 'people/');
	}

}