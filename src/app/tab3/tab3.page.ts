import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../api/game-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  data: any;

  constructor(private gameData: GameDataService) {}

  ngOnInit() {
    this.data = this.gameData;
  }
}
