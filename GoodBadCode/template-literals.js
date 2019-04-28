const horse = {
  name: 'Topher',
  size: 'large',
  skills: ['jousting', 'racing'],
  age: 7
}

// Bad String Code
// let bio1 = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')
// console.log(bio1);
//
// //Good String Code
// const { name, size, skills } = horse;
// bio =  `${name} is ${size} skilled in ${skills.join(' & ')}`;
// console.log(bio);


// Advanced Tag Example

function horseAge(str, age) {

      const ageStr = age > 5 ? 'old' : 'young';
      return `${str[0]}${ageStr} at ${age} years`;
}


const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);
// This horse is old at 7 years
