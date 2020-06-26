const monsterList = [
    {
        id: 1,
        name: 'Coblyn',
        img: 'https://drive.google.com/file/d/17EjxpbpLDnBrCs4nBfQMTLe6dUl1EDJc/view?usp=sharing',
        health: 10,
        abilities: [            
            {
                name: 'Tendril Whip',
                damage: 3
            }            
        ]
    },
    {
        id: 2,
        name: `Amalj'aa Lancer`,
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Heavy Thrust',
                damage: 3
            }            
        ]
    },
    {
        id: 3,
        name: 'Cactuar',
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Thousand Needles',
                damage: 6
            }            
        ]
    },
    {
        id: 4,
        name: 'Megalocrab',
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Snipper Clip',
                damage: 3
            }            
        ]
    },
    {
        id: 5,
        name: 'Ixali',
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Aero',
                damage: 3
            }            
        ]
    },
    {
        id: 6,
        name: 'Adamantoise',
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Turtle Stomp',
                damage: 3
            }            
        ]
    },
    {
        id: 7,
        name: 'Ahriman',
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Gaze',
                damage: 3
            }            
        ]
    },
    {
        id: 8,
        name: 'Coeurl',
        img: '',
        health: 10,
        abilities: [            
            {
                name: 'Charged Whisker',
                damage: 3
            }            
        ]
    },
    {
        id: 9,
        name: 'Deathgaze',
        img: '',
        health: 10,
        abilities: [           
            {
                name: 'Bombination',
                damage: 3
            }            
        ]
    }
];

const bossList = [
    {
        id: 1,
        name: 'Ravana',
        img: '',
        health: 20,
        abilities: [
            {
                name: 'Slaughter',
                damage: 6
            }        
        ]
    },
    {
        id: 1,
        name: 'Garuda',
        img: '',
        health: 20,
        abilities: [            
            {
                name: 'Slipstream',
                damage: 6
            }            
        ]
    }
];

const classList = [
    {
        id: 1,
        name: 'Paladin',
        img: '',
        health: 20,
        abilities: [
            {
                name: 'Royal Authority',
                damage: 3
            },
            {
                name: 'Holy Circle',
                damage: 2
            },
            {
                name: 'Atonement',
                damage: 4
            }
        ]
    }
]

module.exports = {
    monsterList: monsterList,
    bossList: bossList,
    classList: classList
}