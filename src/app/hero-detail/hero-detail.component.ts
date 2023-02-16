import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { map, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs';
import {  FormBuilder,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  heroForm: FormGroup;
  isNew: boolean = false;

  id$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    tap(id => {
      if(id === '0'){
        this.isNew = true
      }else{
        this.isNew = false;
      }
    })
  )

  hero$ = this.id$.pipe(
    switchMap(id => this.isNew?of(null):this.heroService.getById(parseInt(id!)))
  )

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.heroForm = this.fb.group({
      id: null,
      name: null,
      superPowers: null
    })
   }

  ngOnInit(): void {
    this.hero$.subscribe(hero => {
      this.heroForm.patchValue(hero!)
    })
  }

  get superPowers(){
    return this.heroForm.get('superPowers')?.value
  }
}
