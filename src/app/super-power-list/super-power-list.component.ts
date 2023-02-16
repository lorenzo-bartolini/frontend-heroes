import { Component, OnInit, Input } from '@angular/core';
import { SuperPower } from '../model/superPower';

@Component({
  selector: 'app-super-power-list',
  templateUrl: './super-power-list.component.html',
  styleUrls: ['./super-power-list.component.scss']
})
export class SuperPowerListComponent implements OnInit {

  @Input()superPowers: SuperPower[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
