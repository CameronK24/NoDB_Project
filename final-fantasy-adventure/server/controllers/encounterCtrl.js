const axios = require('axios');
const bestiary = require('./bestiaryCtrl')
// const {response} = require('express');

const monsterEncounter = bestiary.monsterList;
const bossEncounter = bestiary.bossList;
const classList = bestiary.classList;

const populatedMonsters = () => {
    let monsters = [];
    for(let x = 0; x < 9; x++) {
        monsters.push(monsterEncounter[Math.floor(Math.random() * monsterEncounter.length)]);
    }
    monsters.push(bossEncounter[Math.floor(Math.random() * bossEncounter.length)]);
    return monsters;
}

let currentEncounter = populatedMonsters();

module.exports = {
    // monsterEncounter: monsterEncounter,
    // bossEncounter: bossEncounter,
    // enemyEncounter: populatedMonsters(),
    // classList: classList,
    currentEncounter: currentEncounter,
    getClassList: (req, res) => {
        res.status(200).send(classList);
    },
    getEnemyEncounter: (req, res) => {
        const {i} = req.params;
        // console.log(currentEncounter[i]);

        res.status(200).send(currentEncounter[i]);
    },
    updatedHealth: (req, res) => {
        const {i} = req.params;
        const {type} = req.params;
        console.log(req.body);
        const {damage} = req.body;

        // console.log(currentEncounter);

        console.log(i, type, damage);

        if (type === 'character') {
            classList[i].health -= damage;
            res.status(200).send(classList[i]);
        }
        else if (type === 'enemy') {
            currentEncounter[i].health -= damage;
            res.status(200).send(currentEncounter[i]);
        }
        else {
            res.status(200).send(`No data exists for ${type}`);
        }        
    }
}