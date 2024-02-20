// console.log("Hello, world!");

let myArr = [1,2,3,4,5]

// console.log(myArr)

myArr.push(8,9)
// console.log(myArr)

let popEmlement = myArr.pop()
// console.log('Pope element : ', popEmlement)

myArr.unshift(10,11)
// console.log(myArr)

let unshiftElement = myArr.shift()
// console.log('unshift Array: ',unshiftElement)
// console.log(myArr)

let newArr = myArr.concat([11,12,13,14],[15,16,17])
// console.log(newArr)

let sliceArr = newArr.slice(0,5)
// console.log('Slice array: ',sliceArr)

let spliceArr = sliceArr.splice(2, 0, 20, 21)
// console.log('Splice array: ',spliceArr)
// console.log(sliceArr)

let atIndex_3 = myArr.indexOf(3)
// console.log(myArr)
// console.log('At index 3: ', atIndex_3)

let lastIndex = myArr.lastIndexOf(11)
// console.log(myArr)
// console.log('Last index of : ', lastIndex)


console.log(myArr.includes(5))



// Objects

let person = {
    name: 'Lachhhman',
    age: 21,
    height: 5.7
}

console.log(person)

let keys = Object.keys(person)
// console.log(keys)

let values = Object.values(person)
// console.log(values)


let entries = Object.entries(person)
console.log(entries)

const target = {name : 'lachhman', age : 18}








let array = [{id:1},{id:3},{id:4},{id:1},{id:2},{id:3},{id:2}]

// const arrobj={}

const obj = {
}
// obj['1'] = 1
// console.log(obj)
// obj['1'] = 100
// console.log(obj)
// obj['1']++
// console.log(obj)

if(obj[1]){
    console.log('key found')
}
else{
    console.log('key not found')
}





console.log(person)

for (let index = 0; index < array.length; index++) {
    
    const element = array[index]
    const value = element.key(id)
    if(obj[value]){
        obj[value]++
    }
    else
    {
        obj[value] = 1
    }

}
console.log(obj)
