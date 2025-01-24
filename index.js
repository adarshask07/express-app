const express = require('express')

const app = express() ;


// function login(request, response){
//     const username = request.body.username
//     const password = request.body.password

//     // user is already present in db 
//     // db call to chech the ciondution 
//     user :{
//         userId,
//         userName
//     }



//     response.send({
//         message :" user loggedin "
//         userId : userId
//     })
// }
function main(request, response) {
    return response.send({
        message: "Response from /",
    });
}
// routing 
app.get("/", main)
// app.post('/login', login)
// app.post('/signup', signup)



app.listen(3000,()=>{
    console.log("server is up")
})

