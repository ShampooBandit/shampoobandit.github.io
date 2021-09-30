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

export interface Equip {
    name: String,
    description: String,
    power: Number,
    cost: any,
    id: Number
}

export interface Connection {
    direction: String, //East, south, up, down, etc. >go direction
    room: Room
}

export interface Player {
    name: String,
    description: String,
    location: Room,
    inventory: Item[],
    gear: PlayerEquipment,
    resources: any,
    level: Number,
    experience: Number,
    maxResource: Number
}

export interface PlayerEquipment {
    head: Equip,
    eyes: Equip,
    torso: Equip,
    legs: Equip,
    waist: Equip,
    back: Equip,
    leftHand: Equip,
    rightHand: Equip,
    leftFinger: Equip,
    rightFinger: Equip
}