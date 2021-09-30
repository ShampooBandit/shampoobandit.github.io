import { Injectable } from '@angular/core';
import { Room, Player } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  rooms: Room[];
  player: Player;

  constructor() { 
    this.rooms = [];
    this.player = null;

    this.rooms[0] = {
      name: 'Library',
      description: 'Cheek pressed against the cold, hard stone tiles beneath you, your eyes slowly blink open\
 to the sunlight streaming onto your face. As you push yourself up from the floor, your gaze passes over the\
 strange sight of seemingly endless high-arched stone doorways one after another, shelves stocked to the brim\
 in every room you can see with an assortment of colored and sized spines; a never ending sea of books.@ A red\
 and black checkerboard of tiles stretches out into the horizon. Along each wall between the endless archways\
 are completely filled bookshelves. Despite your best efforts, the shelves seem to remain just as full no matter\
 how many books you remove. The shelves reach a couple feet above your head, aligning with the top of the archways.\
 Above those is another section of wall, with a window cut into the face of it, doubling the height of the room.\
 Each window gives you a view of either another room\'s interior, or, a view of a bright blue sky.',
      items: [],
      connections: null,
      visited: false
    }

    this.player = {
      name: 'You :)',
      description: 'You are the player!',
      location: this.rooms[0],
      inventory: [],
      gear: null,
      resources: null,
      level: 1,
      experience: 0,
      maxResource: 30
    }

    this.rooms[0].connections = {
      'east': this.rooms[0],
      'west': this.rooms[0],
      'north': this.rooms[0],
      'south': this.rooms[0]
    }

    this.player.resources = {
      'Amber': 1,
      'Amethyst': 2,
      'Blood': 3,
      'Build': 4,
      'Caulk': 5,
      'Chalk': 6,
      'Cobalt': 7,
      'Copper': 8,
      'Diamond': 9,
      'Emerald': 10,
      'Frosting': 11,
      'Garnet': 12,
      'Gold': 13,
      'Iodine': 14,
      'Jet': 15,
      'Malachite': 16,
      'Marble': 17,
      'Mercury': 18,
      'Obsidian': 19,
      'Opal': 20,
      'Polychromite': 21,
      'Quartz': 22,
      'Rainbow': 23,
      'Redstone': 24,
      'Rock Candy': 25,
      'Rose Quartz': 26,
      'Ruby': 27,
      'Rust': 28,
      'Shale': 29,
      'Star Sapphire': 30,
      'Sulfur': 1,
      'Sunstone': 1,
      'Tar': 1,
      'Titanium': 1,
      'Topaz': 1,
      'Uranium': 1,
    }
  }

  public getPlayer() {
    return this.player;
  }

  public getRooms() {
    return this.rooms;
  }

  public setPlayer(p) {
    this.player = p;
  }
}
