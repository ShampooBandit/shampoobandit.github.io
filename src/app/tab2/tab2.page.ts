import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../api/game-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  data: any;
  keys: any;

  constructor(private gameData: GameDataService) {}

  ngOnInit() {
    this.data = this.gameData;

    this.keys = Object.keys(this.data.player.resources)
  }

  returnZero() {
    return 0;
  }

  getResourceImg(r) {
    var k = r.replace(' ', '_')

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
    var i = <HTMLElement>document.getElementById(r).children[1].children[0].children[0]

    var percent = this.data.player.resources[r] / this.data.player.maxResource
    percent *= 100

    i.style.width = percent.toString() + '%'
  }
}
