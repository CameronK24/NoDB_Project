const express = require('express');
const encounterCtrl = require('./controllers/encounterCtrl');
const app = express();

app.use(express.json());

// app.get('/api/enemy-encounter', encounterCtrl.getMonsterList);
// app.get('/api/boss-encounter', encounterCtrl.getBossList);
app.get('/api/encounter/:i', encounterCtrl.getEnemyEncounter)
app.get('/api/class-list', encounterCtrl.getClassList);
app.get('/api/character', encounterCtrl.getCharacter);
app.post('/api/create-character', encounterCtrl.createCharacter);
app.put('/api/damage/:i&:type', encounterCtrl.updatedHealth);
app.delete('/api/remove-enemy/:i', encounterCtrl.deleteEnemy);

app.listen(4040, () => console.log('Server running on 4040'));

// console.log(encounterCtrl.monsterEncounter)
// console.log(encounterCtrl.bossEncounter)
// console.log(encounterCtrl.classList)
// console.log(encounterCtrl.enemyEncounter)
// console.log(encounterCtrl.currentEncounter)