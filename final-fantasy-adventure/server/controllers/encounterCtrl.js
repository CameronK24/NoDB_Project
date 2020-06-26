const axios = require('axios');
const bestiary = require('./bestiaryCtrl')
// const {response} = require('express');

const monsterEncounter = bestiary.monsterList;
const bossEncounter = bestiary.bossList;
const classList = bestiary.classList;

let populatedMonsters = () => {
    let monsters = [];
    for(let x = 0; x < 9; x++) {
        monsters.push(monsterEncounter[Math.floor(Math.random() * monsterEncounter.length)]);
    }
    monsters.push(bossEncounter[Math.floor(Math.random() * bossEncounter.length)]);
    return monsters;
}

module.exports = {
    monsterEncounter: monsterEncounter,
    bossEncounter: bossEncounter,
    enemyEncounter: populatedMonsters(),
    classList: classList,
    // getMonsterList: (req, res) => {
    //     console.log(monsterEncounter);
    //     res.status(200).send(monsterEncounter);
    // },
    // getBossList: (req, res) => {
    //     res.status(200).send(bossEncounter);
    // },
    getClassList: (req, res) => {
        res.status(200).send(classList);
    },
    getEnemyEncounter: (req, res) => {
        res.status(200).send(populatedMonsters());
    }
}