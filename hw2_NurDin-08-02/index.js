// первая задача

var array = [1232, -132, 356, 2123, 2.5, 23, 12];

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);

console.log(sum)

// вторая задача

var num = 0
while ( num < 100) {
    num = num + 2 // num +=2
    console.log(num)
}

// третья задача

var people = [
    {
        name: 'Adilet',
        salary: 23000,
    },
    {
        name: 'Syimyk',
        salary: 59000,
    },
    {
        name: 'Meerim',
        salary: 38000,
    },
    {
        name: 'Nurdin',
        salary: 15000,
    }
]
for (var i = 0; i < people.length; i++) {
    var person = people[i]
    person.salary += 1000
    if (i===[3])
        person.salary += 1000
    console.log(person.salary)
}

// четвертая задача

for (var i = 0; i < people.length; i++){
    var person = people[i]
    if (person.salary <= 20000){
        person.level = 'junior'
    } else if (person.salary <= 50000){
        person.level = 'middle'
    } else {
        person.level = 'senior'
    }
}
console.log(people)


