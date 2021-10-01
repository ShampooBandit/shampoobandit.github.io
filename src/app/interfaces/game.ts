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

export interface ResourceReward {
    type: String,
    amount: Number
}

export interface Enemy {
    name: String,
    description: String,
    type: String,
    health: Number,
    maxHealth: Number,
    power: Number,
    defence: Number,
    rewardMult: Number,
    rewards: {
        resources: ResourceReward[],
        experience: Number,
        money: Number
    }
}

export interface EnemyGroup {
    enemies: Enemy[]
}

export interface Machine {
    name: String,
    description: String,
    power: Number,
    type: String
}

export interface Floor {
    safe: Boolean,
    groups: EnemyGroup[],
    machines: Machine[]
}

export interface House {
    height: Number,
    floors: Floor[]
}

export const EnemyBaseStats = {
    'Imp': {
        'name': 'Imp',
        'description': '',
        'type': '',
        'health': 30,
        'maxHealth': 30,
        'power': 10,
        'defence': 5,
        'rewardMult': 1,
        'rewards': {
            'resources': [{
                'type': 'Build',
                'amount': 5
            }],
            'experience': 5,
            'money': 10
        }
    }
}

export const ResourceTypes = [
    'Amber',
    'Amethyst',
    'Blood',
    'Caulk',
    'Chalk',
    'Cobalt',
    'Copper',
    'Diamond',
    'Emerald',
    'Frosting',
    'Garnet',
    'Gold',
    'Iodine',
    'Jet',
    'Malachite',
    'Marble',
    'Mercury',
    'Obsidian',
    'Opal',
    'Polychromite',
    'Quartz',
    'Rainbow',
    'Redstone',
    'Rock Candy',
    'Rose Quartz',
    'Ruby',
    'Rust',
    'Shale',
    'Star Sapphire',
    'Sulfur',
    'Sunstone',
    'Tar',
    'Titanium',
    'Topaz',
    'Uranium',
]