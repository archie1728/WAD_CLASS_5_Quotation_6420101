L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0

for (let i = 0; i < L.length; i++) {
    sum += L[i]
}

console.log(sum)

let sum2 = 0

//Full form function
function add(a,b){
    return a + b
}
sum2 = L.reduce(add)

//Arrow (Annonymous) function
sum2 = L.reduce((a, b) => a + b)

console.log(sum2)

//Find total multiplication value of list
let mul = L.reduce((a, b) => a * b)
console.log(mul)

//Sort the array in ascending order
X = [6,7,10,3,8,1,9,5,4,2]
let sorted = X.sort((a, b) => a - b)
console.log(sorted)

//Second menthod
for (let i=0; i<X.length; i++){
    for (let j=0; j<X.length; j++){
        if (X[j] > X[j+1]){
            let temp = X[j]
            X[j] = X[j+1]
            X[j+1] = temp
        }
    }
}

//Sort the array in descending order
let sorted2 = X.sort((a, b) => b - a)
console.log(sorted2)

//Merge example
A = ["a", "c", "b"]
B = ["d", "f", "e"]
C = A.concat(B)
C.sort()
console.log(C)

//Second method
let D = [...A, ...B]
D.sort()
console.log(D)

//Third method
let E = A.concat(B).sort()
console.log(E)

//Update example
Y =[
    {id: 6420101, name: "Archit", salary: 10000},
    {id: 6420102, name: "John", salary: 15000},
    {id: 6420103, name: "Emily", salary: 12000},
    {id: 6420104, name: "Michael", salary: 18000}
]

console.table(Y)

for(let i=0; i<Y.length; i++){
    Y[i].salary *= 1.1
    Y[i].salary = Y[i].salary.toFixed(0)
    console.log(Y[i].salary)
}

Y.map((emp) => (emp.salary *= 1.1).toFixed(0))

console.table(Y)

//Calculate for bonus
//Bonus is a new field in the JSON object
//Bonus = 20% of the salary with only 1 decimal point
Y.map((emp) => emp.bonus = (emp.salary * 0.2).toFixed(0))

console.table(Y)

// L.map((emp) => emp.salary *= 1.1)
// L.map((emp) => emp.bonus = emp.salary * .2)
/// Or
Y.map((emp) => {
    emp.salary *= 1.1
    emp.bonus = emp.salary * .2
    emp.bonus = emp.bonus.toFixed(0)
})

console.table(Y)

Y.sort((a,b) => a.name.localeCompare(b.name))
console.table(Y)
