// let myName = "kritika     "
// let mychannel = "coffee     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kritika = function(){
    console.log(`kritika is present in all objects`);
}

Array.prototype.heyKritika = function(){
    console.log(`kritika says hello`);
}

// heroPower.kritika()
// myHeros.kritika()
// myHeros.heyKritika()
// heroPower.heyKritika()


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"kritika".trueLength()
"iceTea".trueLength()