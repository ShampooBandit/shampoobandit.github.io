import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../api/game-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  data: any;

  constructor(private gameData: GameDataService) {}

  ngOnInit() {
    this.data = this.gameData;
  }

  returnZero() {
    return 0;
  }

  getResourceImg(r) {
    var k = r.key.replace(' ', '_')

    switch(k) {
      case 'Opal':
      case 'Polychromite':
      case 'Rainbow':
        return 'assets/resources/' + k + '.gif'
      default:
        return 'assets/resources/' + k + '.png'
    }
  }

  resourceBarWidth(r) {
    var i = <HTMLElement>document.getElementById(r.key).children[1].children[0].children[0]

    var percent = this.data.player.resources[r.key] / this.data.player.maxResource
    percent *= 100

    i.style.width = percent.toString() + '%'
  }
}
