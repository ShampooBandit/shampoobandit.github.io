export interface Room {
    name: String,
    description: String,
    items: Item[],
    connections: any,
    visited: Boolean
}

export interface Item {
    name: String,
    description: String,
    obtainable: Boolean,
    visible: Boolean,
    size: Number
}

export interface Connection {
    direction: String, //East, south, up, down, etc. >go direction
    room: Room
}

export interface Player {
    name: String,
    description: String,
    location: Room,
    inventory: Item[]
}