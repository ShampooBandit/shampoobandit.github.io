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

  getNextFloorCost() {
    return (2 ** this.data.house.height) + (10 * this.data.house.height)
  }

  buildNextFloor() {
    var cost = this.getNextFloorCost()
    if(this.data.player.resources['Build'] >= cost) {
      this.data.house.floors.push({
        safe: false,
        machines: null,
        groups: null
      })
  
      this.data.house.height++
      this.data.player.resources['Build'] -= cost
    }
    else {
      var elem = document.getElementById('floor-purchase')

      elem.style.animationName = 'shake'
      elem.style.animationDirection = 'both'
      elem.style.animationTimingFunction = 'cubic-bezier(.36,.07,.19,.97)'
      elem.style.backgroundColor = 'rgb(170, 160, 160)'
      elem.addEventListener('animationend', (e) => {
        elem.style.animationName = 'none'
        elem.offsetHeight
        elem.style.animation = null
        elem.style.backgroundColor = '#AAA'
      })
    }
  }
}
