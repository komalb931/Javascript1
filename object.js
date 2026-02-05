const Obj= Symbol("sham")
const jsUser ={
    Fname:"komal",
    Lname :"Borate",
    [Obj]:"hnvn",//symbol declear process
    age: 23,
    Email:"komal@gmail.com"

    
}
console.log(jsUser.Lname);//It is a old rule but wrongway
console.log(jsUser["Lname"]);//It is the correct way}
console.log(jsUser[Obj]);//symbol declear process



 
