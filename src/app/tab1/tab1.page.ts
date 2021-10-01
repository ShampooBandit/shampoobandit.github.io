import { Component, OnInit } from '@angular/core';
import { ResourceTypes } from 'src/app/interfaces/game';
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

    setTimeout(this.checkForEnemies, 3000)
  }

  randomInt(num) {
    return Math.floor(Math.random() * num)
  }

  checkForEnemies() {
    var i = 0
    this.data.house.floors.forEach(floor => {
      if(!floor.safe) {
        var chance = this.randomInt(100)

        if(chance < (100 - floor.groups.length * 20)) {
          this.generateEnemyGroup(i)
        }
      }

      i++
    });

    setTimeout(this.checkForEnemies, 3000)
  }

  generateEnemyGroup(index) {
    var enemyAmount = this.randomInt(4) + 1
    var enemyType = ResourceTypes[this.randomInt(ResourceTypes.length)]

    var group = {

    }

    this.data.house.floor[index].groups.push()
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
