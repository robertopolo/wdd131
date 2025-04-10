let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter((name) => {return name.startsWith('B')});
console.log(namesB);

let namesLength = names.map((name) => {return name.length});
console.log(namesLength);

console.log(names.reduce((total, name) => total + name.length, 0) / names.length);
