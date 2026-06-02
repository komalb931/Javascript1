Q1
const user = {
  name: "Komal",
  age: 25,
  city: "Baramati"
};
const {name,city}=user
console.log(name);
console.log(city);

Q2
const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);
console.log(second);

const user = {
  name: "Komal",
  age: 25
};
const{user:userName}=user


Q3
const response = {
  success: true,
  data: {
    id: 1,
    name: "Komal"
  }
};
const {data:name}=response
console.log(name);


Q5
const student = {
  name: "Rohit",
  marks: 85,
  city: "Pune"
};
const name=({name,marks,city})=>{
console.log(name);
console.log(marks);
console.log(city);
}
name(student)

