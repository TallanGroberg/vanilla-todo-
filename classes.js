// function Car(make, model) {
//   this.make = make
//   this.model = model
// }

// Car.prototype.honk = function() {
//   console.log("honk")
// }

//JS Classes 
  // blueprints for genetating JS objects 

class Vehicle {
  constructor(make, model, honkSound) {
    this.make = make
    this.model = model 
    this.honkSound = honkSound 
  }

  honk() {
    console.log("honk")
  }
  drive() {
    console.log('VRoom')
  }
}

const jeep = new Vehicle('jeep', "cherokee", "merp")
console.log(jeep)
//you do need to pass arguments to inherited classes
class Motorcycle extends Vehicle {
  constructor(make, model, honkSound, hasSideCar){

    super(make, model, honkSound) //super looks in parent class for args 
  }
}

const harly = new Motorcycle("harly", "moto", 'bleep bleeep', false)

console.log(harly)



// const xhr = new XMLHttpRequest()

// xhr.open('GET', "https://swapi.co/api/people/1", true)

// xhr.send()

// xhr.onreadystatechange = function() {
//   if (xhr.staus === 200 && xhr.readyState === 4) {
//     const JSONdata = xhr.responseText 
//     const data = JSON.parse(JSONdata)
//     console.log(data)
//   }
// }
// console.log(xhr)

// axios.get('https://swapi.co/api/people')

// .then( res => {
//   let counter = 1;
//   let idcount =  1;
//   let div = document.createElement('div')
// let content = res.data.results.map(p => `<br /><h1 id="${idcount++}">${counter++}:  ${p.name}</h1><button id="delete">delete</button> <button id="edit">edit</button>  <br />`)
//   div.innerHTML = content.join(' ')
//  document.body.appendChild(div)
// })

// .catch( res => {
  // console.log(form.description.value)
// })




// put the object in local storage
// console.log as object 
// update from local storage on edit click 