import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './../common/hero';

import { HeroService } from './../common/hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;

	constructor(private heroService: HeroService, private route: ActivatedRoute) {}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.heroService.getHero(id).then(hero => this.hero = hero);
		});
	}

	save(): void {
 		 this.heroService.update(this.hero).then(this.goBack);
	}

	goBack(): void {
		window.history.back();
	}

}
