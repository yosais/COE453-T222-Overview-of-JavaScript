const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));
map1.set('a', 97);
console.log(map1.size);
map1.delete('b');
console.log(map1.size);

// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' },
];

// Map
// Extract all id values
let officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});
console.log(officersIds);

var officersIds_2 = officers.map(function (officer) {
  return officer.id;
});
console.log(officersIds_2);

const officersIds_3 = officers.map((officer) => officer.id);
console.log(officersIds_3);

// Reduce
// Get total number of years of experience
var pilots = [
  {
    id: 10,
    name: 'Poe Dameron',
    years: 2,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 3,
  },
  {
    id: 41,
    name: 'Tallissan Lintra',
    years: 1,
  },
  {
    id: 99,
    name: 'Ello Asty',
    years: 2,
  },
];

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
console.log(totalYears);

// Filter
var pilots = [
  {
    id: 2,
    name: 'Wedge Antilles',
    faction: 'Rebels',
  },
  {
    id: 8,
    name: 'Ciena Ree',
    faction: 'Empire',
  },
  {
    id: 40,
    name: 'Iden Versio',
    faction: 'Empire',
  },
  {
    id: 66,
    name: 'Thane Kyrell',
    faction: 'Rebels',
  },
];

const rebels = pilots.filter((pilot) => pilot.faction === 'Rebels');
const empire = pilots.filter((pilot) => pilot.faction === 'Empire');
console.log(rebels);
console.log(empire);

// Combining map, reduce, and filter
var personnel = [
  {
    id: 5,
    name: 'Luke Skywalker',
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: 'Sabine Wren',
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: 'Zeb Orellios',
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: 'Ezra Bridger',
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: 'Caleb Dume',
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

let totalPilotScoreForForceUser = personnel
  .filter((person) => person.isForceUser)
  .map((person) => person.pilotingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalPilotScoreForForceUser);
