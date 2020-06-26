const express = require('express');
const encounterCtrl = require('./controllers/encounterCtrl');
const app = express();

app.use(express.json());

// app.get('/api/enemy-encounter', encounterCtrl.getMonsterList);
// app.get('/api/boss-encounter', encounterCtrl.getBossList);
app.get('/api/encounter-list', encounterCtrl.getEnemyEncounter)
app.get('/api/class-list', encounterCtrl.getClassList);

app.listen(4040, () => console.log('Server running on 4040'));

// console.log(encounterCtrl.monsterEncounter)
// console.log(encounterCtrl.bossEncounter)
// console.log(encounterCtrl.classList)
// console.log(encounterCtrl.enemyEncounter)