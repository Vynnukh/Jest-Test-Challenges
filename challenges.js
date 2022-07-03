
const sixFunc = () => {
    let myArray = ["Azkaelux", "Tyselle", "Zuluthus", "Vynx", "Nuqx", "Kejei", "Xaethaar", "Tyrrukh", "Vraske"]
    let logArray = () => {
        return myArray.filter((str) => str.length >= 6)
    }
}


let sum2 = (num1, num2) => {
    return num1 + num2
}

let truthy = 1

if(truthy = 1) () => {
    truthy = true
} ;else {
    truthy = false
}


let myObject = () => {
    const Character ={
    name: "Marelle",
    age: 260}
    return Character
}

const numStr = (num) => {
    let Nstr = num.toString()
    return Nstr
}

numStr(65)

const myPlanets = (planetDistance)=> {
    const List = [
        "",
        "Mercury",
        "Venus",
        "Terra",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
    ]
    let planNum2 = (planetDistance)
    let planet = (List[planNum2])
    return planet
    }

module.exports = {sum2, truthy, myObject, numStr, sixFunc, myPlanets}