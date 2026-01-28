// Immedieatly Invoked Functions --> used to remove global scope pollution

(function add(name) {
  console.log('Hello ' + name);
})('Johny depp');