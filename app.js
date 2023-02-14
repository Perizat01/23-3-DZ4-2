var array = ["name", "John", "lastname", "Black", "age", "23"];
var object = {};
for (let i = 0; i < array.length; i += 2) {
   object[array[i]] = array[i + 1];
}
console.log(object);

