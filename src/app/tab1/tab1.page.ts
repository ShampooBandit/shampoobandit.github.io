import { Component, OnInit } from '@angular/core';
import { Room, Player, Item, Connection } from 'src/app/interfaces/game';
import { GameDataService } from '../api/game-data.service';
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any;

  constructor(private gameData: GameDataService) { }

  ngOnInit() {
    this.data = this.gameData;
  }
}
