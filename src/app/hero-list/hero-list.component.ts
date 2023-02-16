import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  dataSource: any[] = []
  displayedColumns = ['id','name', 'superPowers', 'goTo']



  constructor(
    private heroService: HeroService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.heroService.getAll().subscribe((heroes: Hero[]) => {
      this.dataSource = heroes
    })

  }

  goTo(hero: Hero){
    this.router.navigate([`hero/${hero.id}`])
  }

}
