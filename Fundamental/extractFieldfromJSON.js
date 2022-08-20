// JSON 
const input = {
    "student" : [
        {
            name:"amjad",
            roll: 17,
            email: "ask@gmail.com"
        },
        {
            name: "ali",
            roll: 18,
            email: "take@gmail.com"
        },
        {
            name: "mr",
            roll: 19,
            email: "action@gmail.com"
        }
    ]
}

// using "map()" we can extract the specified filed from array

let output = input.student.map(function(item){
    console.log(item.name);
    console.log(item.roll);
    console.log(item.email);
})

// return in the form of object 

let output1 = input.student.map(function(item){
    let studObj = {
        name : item.name,
        roll : item.roll,
        email : item.email
    }

    return console.log(studObj);
})