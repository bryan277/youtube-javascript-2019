const pikachu = { name: 'pikachu' };
const stats = { hp: 40, attack: 60, defense: 45 }

//Bad object Code
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assgin(pikachu, )

//Good code
const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }

//Arrays
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

//Bad array code
// pokemon.push('Bulbasaur')
// pokemon.push('Metapod')
// pokemon.push('Weedle')

//Good array code
pokemon = [ ...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']
console.log(pokemon);
// [ 'Arbok', 'Raichu', 'Sandshrew', 'Bulbasaur', 'Metapod', 'Weedle' ]

pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon]
console.log(pokemon);
// [ 'Bulbasaur', 'Metapod', 'Weedle', 'Arbok', 'Raichu', 'Sandshrew' ]
