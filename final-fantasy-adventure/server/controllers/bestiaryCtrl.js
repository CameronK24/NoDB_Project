const monsterList = [
    {
        id: 1,
        name: 'Coblyn',
        img: 'https://lh3.google.com/u/0/d/17EjxpbpLDnBrCs4nBfQMTLe6dUl1EDJc=w1173-h936-iv1',
        health: 10,
        abilities: [            
            {
                name: 'Tendril Whip',
                damage: 2
            }            
        ]
    },
    {
        id: 2,
        name: `Amalj'aa Lancer`,
        img: 'https://lh3.google.com/u/0/d/1k935WgWq2GGUOciWYiX_MElD6J-1_4bg=w1173-h936-iv1',
        health: 20,
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
        img: 'https://lh3.google.com/u/0/d/1e8UHLV_6G-fh4TiDFxuhMyOv4eW2QtuK=w1173-h936-iv1',
        health: 15,
        abilities: [            
            {
                name: 'Thousand Needles',
                damage: 10
            }            
        ]
    },
    {
        id: 4,
        name: 'Megalocrab',
        img: 'https://lh3.google.com/u/0/d/1pJwdAUKqKe-hIT8ke6R7riSuJk6vUFXx=w1173-h936-iv1',
        health: 25,
        abilities: [            
            {
                name: 'Snipper Clip',
                damage: 5
            }            
        ]
    },
    {
        id: 5,
        name: 'Ixali',
        img: 'https://lh3.google.com/u/0/d/1KHMbUblgmnNE0IkMezPkNOASgU72eRZ0=w1173-h936-iv1',
        health: 15,
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
        img: 'https://lh3.google.com/u/0/d/1hQHuEDJTkaUSCP4qOUORJ34JXOMQQdqi=w1173-h936-iv1',
        health: 35,
        abilities: [            
            {
                name: 'Turtle Stomp',
                damage: 7
            }            
        ]
    },
    {
        id: 7,
        name: 'Ahriman',
        img: 'https://lh3.google.com/u/0/d/118NfkDUO7pBy6ioSDfKJwpPWLu21o7lK=w1173-h936-iv1',
        health: 20,
        abilities: [            
            {
                name: 'Gaze',
                damage: 4
            }            
        ]
    },
    {
        id: 8,
        name: 'Coeurl',
        img: 'https://lh3.google.com/u/0/d/1AX5mYg_T-q93M1qkIigHe1FMBK1DEKUu=w1173-h936-iv1',
        health: 15,
        abilities: [            
            {
                name: 'Charged Whisker',
                damage: 5
            }            
        ]
    },
    {
        id: 9,
        name: 'Deathgaze',
        img: 'https://lh3.google.com/u/0/d/19tdZNNePZyR2bre1rOYl2Y6AEaGGSgAj=w1173-h936-iv1',
        health: 35,
        abilities: [           
            {
                name: 'Bombination',
                damage: 7
            }            
        ]
    }
];

const bossList = [
    {
        id: 1,
        name: 'Ravana',
        img: 'https://lh3.google.com/u/0/d/1FrexlP_nNVbY4E4bqLK9ZnOF9nrPa5JE=w1173-h936-iv1',
        health: 50,
        abilities: [
            {
                name: 'Slaughter',
                damage: 10
            }        
        ]
    },
    {
        id: 1,
        name: 'Garuda',
        img: 'https://lh3.google.com/u/0/d/1FGAb8pORfJfH6zURgIYNGDdLj-Faggff=w1173-h936-iv1',
        health: 50,
        abilities: [            
            {
                name: 'Slipstream',
                damage: 10
            }            
        ]
    }
];

const classList = [
    {
        id: 1,
        name: 'Paladin',
        img: 'https://lh3.google.com/u/0/d/1XSYtbExavQ3sCUDMBB2_pgqndtDd--Hl=w1173-h936-iv1',
        health: 20,
        abilities: [
            {
                name: 'Royal Authority',
                img: 'https://img.finalfantasyxiv.com/lds/d/6858db3c06ec976d81553fcdf8a834f5b1241bd9.png',
                damage: 7
            },
            {
                name: 'Holy Circle',
                img: 'https://img.finalfantasyxiv.com/lds/d/3badbc44e5cd3de4e95e2d8f613a6041f0ff87e9.png',
                damage: 5
            },
            {
                name: 'Atonement',
                img: 'https://img.finalfantasyxiv.com/lds/d/c59f597216e3b58d3eadd890b0b79c1fcbfb3dbf.png',
                damage: 10
            }
        ]
    }
]

module.exports = {
    monsterList: monsterList,
    bossList: bossList,
    classList: classList
}