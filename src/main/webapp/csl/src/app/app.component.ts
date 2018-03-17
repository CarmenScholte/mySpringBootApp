import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SwapiService } from './services/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	title = 'The Star Wars App';
	restResult = '';
	swapiResult = {};
	films;
	people;

	constructor(private appService: AppService, private swapiService: SwapiService) { }

	ngOnInit() {
		this.appService.getExample().subscribe(
			data => this.restResult = data
		);

		this.swapiService.getSwapi().subscribe(
			data => this.swapiResult = data
		);

		this.swapiService.getFilms().subscribe(
			data => this.films = data.results
		);

		this.swapiService.getPeople().subscribe(
			data => this.people = data.results
		);
	}

}
