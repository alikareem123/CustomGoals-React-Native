const person = {
    name: 'Ali',
    job: 'Engineer',
    greet() {
        console.log(`Hi i am ${this.name}`)
    }
}

person.greet()

const another = {...person}
console.log(another)

const create = (...args) =>{
    return args
}
console.log(create(1, 2, 3, 4))
console.log([1,2,3])

const {name, age} = person
console.log(name)

const ar = [1, 2,3,4]
const [...args] = ar

console.log(args[2])

const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Done')
        }, 2000)
    })
    return promise
}

setTimeout(() => {
    fetchData().then(text =>{
        console.log(text)
        return fetchData()
    }).then(text2 =>{
        console.log(text2)
    })
}, 1500);