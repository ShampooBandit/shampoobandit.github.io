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

  textLog: String;
  command: any;
  moveHistory: String[];
  startRoom: Room;

  constructor(private gameData: GameDataService) { }

  ngOnInit() {
    this.data = this.gameData;

    this.moveHistory = []

    this.textLog = this.parseDescription(this.data.player.location.description)
  }

  parseCommand(event) {
    if(event.key === "Enter" && this.command) {
      var t = document.getElementById('command')
      var words = this.command.split(' ')

      this.textLog += '\n'
      this.textLog += '\n'
      this.textLog += '> ' + this.command
      this.textLog += '\n'
      this.textLog += '\n'

      switch(words[0]) {
        case 'go':
          if(this.data.player.location.connections[words[1]]) {
            if(!this.moveHistory) {
              this.startRoom = this.data.player.location
            }
            this.moveHistory.push(words[1])
            if(!this.checkPlayerMoves()) {
              this.data.player.location = this.data.player.location.connections[words[1]]
              this.textLog += this.parseDescription(this.data.player.location.description)
            }
          }
          else {
            this.textLog += `You cannot reach a path ${words[1]}.`
          }
        break;
        case 'look':
          this.textLog += this.parseDescription(this.data.player.location.description)
        break;
        default:
          this.textLog += `${words[0]} is not a command I recognize.`
        break;
      }

      this.command = ''
    }
  }

  checkPlayerMoves() {
    if(this.moveHistory.length == 8) {
      //Check for finding a new unique room

      this.resetPlayerMoves()
    }
    return false
  }

  resetPlayerMoves() {
    this.moveHistory = []
    this.startRoom = null
  }

  parseDescription(desc: String) {
    var first = desc.split('@', 1)[0]
    var after = desc.split('@', 2)[1]

    if(this.data.player.location.visited) {
      return after
    }
    else {
      this.data.player.location.visited = true
      return first
    }
  }
}
