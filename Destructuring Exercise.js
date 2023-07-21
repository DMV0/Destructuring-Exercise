//ES2015 Object Destructuring
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
const {a,b} = obj.numbers


//ES2015 One-Line Array Swap with Destructuring

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]



//raceResults()

const raceResults = ([first, second, third, ...rest]) => ([first, second, third, rest])

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/