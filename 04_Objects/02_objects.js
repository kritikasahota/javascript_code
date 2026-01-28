const mySym = Symbol("key 1");


// +++++++++++++ 1st way of object creation --> object literals +++++++++++++ 
const JsUser =  {
    name: "kritika",
    age: 20,
    [mySym]: "key 1",
    "like birds": true//can also use multiword property names.
};
console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser[mySym]);

JsUser.isAdmin = true;

JsUser["like singing"] = false; //square bracket notation for multiword properties.
console.log(JsUser["like birds"]);

delete JsUser.age; //To remove a property.

JsUser.email = "kritika@google.com";
//Object.freeze(JsUser);

JsUser.greet = function(){
    console.log("hello Js User");    
}
console.log(JsUser.greet());

JsUser.greetTwo = function(){
    console.log(`hello Js User, ${this.name}`);
    
}
console.log(JsUser.greetTwo());


// ++++++++++++++ 2nd way of object creation --> object constructor +++++++++++++ 
const user = {}
user.id = "123abc";
user.name = "kritika";
user.isLoggedIn = false;
console.log(user);

console.log(Object.keys(user)); // Returns array of keys of the object.
console.log(Object.values(user)); // Return array of values of the object.
console.log(Object.entries(user)); // Return array of key-value pair of the object.
console.log(user.hasOwnProperty('isLoggedIn')); //Returns a boolean value.


// ++++++++++++ Nesting of the objects +++++++++++++ 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
       userfullname: {
        firstname: "kritika",
        lastname: "sahota"
       }
    }
}

// ++++++++++++ combining two objects +++++++++++++ 
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {
  ...obj1,
  ...obj2
};
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);


// ++++++++++++ Array of objects +++++++++++++
const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "t@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
    {
        id: 4,
        email: "s@gmail.com"
    }
]
console.log(users[2].email);

// Destructuring of object

const { name, age, profesion, girlfriend, sport } = person;
console.log("name: ", name);
console.log("age: ", age);
console.log("profesion: ", profesion);
console.log("girlfriend: ", girlfriend);
console.log("sport: ", sport);

// Why destructuring

console.log(person.name);
console.log(person.age);
console.log(person.profesion);
console.log(person.girlfriend);
console.log(person.sport);
rho-ugug-hxm