console.log("Good Morning!")


// {
//   var a = 5;   //var is global scope & let, const has local scope
// }
// console.log(a)

//illegal shadowing

function test (){
    var a = "Hello";
    var b = "bye"
    if(true){
       let a = "Hii"
       let b = "goodbye"
        console.log(a)
        console.log(b)
    }
    console.log(a)
}

test()