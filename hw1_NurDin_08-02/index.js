// Задание первое

let userName = prompt('Введите ваше имя и фамилию.')
console.log(userName)

alert('Вас приветсвует моя домашка!')

// задание второе

number1 = prompt('Выберите первое число')
number2 = prompt('Выберите второе число')
if ( number1 < number2 ) {
    alert ('Второе число больше первого числа')
} else if ( number1 > number2 ) {
    alert('Первое число больше второго числа')
} else {
    alert('Первое и второе число равны')
}

// Задание третье

const age = prompt('Введите свой возраст')

if (age < 16) {
    alert('Ты точно школьник')
} else  if (age > 16 && age <= 18 ) {
    alert('Ты школьник либо студент')
} else {
    alert('Ты студент либо работаешь')
}