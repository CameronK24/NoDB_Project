const axios = require('axios');
const bestiary = require('./bestiaryCtrl')
// const {response} = require('express');

const monsterEncounter = bestiary.monsterList;
const bossEncounter = bestiary.bossList;
const classList = bestiary.classList;
let character = {};

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
    getCharacter: (req, res) => {
        res.status(200).send(character);
    },
    createCharacter: (req, res) => {
        const {newCharacter} = req.body;

        character = newCharacter;
        res.status(200).send(character);
    },
    updatedHealth: (req, res) => {
        const {i} = req.params;
        const {type} = req.params;
        // console.log(req.body);
        const {damage} = req.body;

        // console.log(currentEncounter);

        // console.log(i, type, damage);

        if (type === 'character') {
            character.health -= damage;
            res.status(200).send(character);
        }
        else if (type === 'enemy') {
            currentEncounter[i].health -= damage;
            res.status(200).send(currentEncounter[i]);
        }
        else if (type === 'heal') {
            character.health = 20;
            res.status(200).send(character);
        }
        else {
            res.status(200).send(`No data exists for ${type}`);
        }        
    },
    deleteEnemy: (req, res) => {
        const {i} = req.params;

        currentEncounter.splice(+i, 1);
        console.log(currentEncounter);
        res.status(200).send(currentEncounter[i]);
    }
}