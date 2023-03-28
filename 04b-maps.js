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
