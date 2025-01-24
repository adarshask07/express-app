const express = require('express')

const app = express() ;
app.use(express.json()) ;



function login (req, res){
    const username = req.body.username ;
    const password = req.body.password ;


    return res.json( {
        name : username, 
        pass : password 
    } )
}

function main(req, res){

    return res.send("Gkjbskdf")
}



// routes 


// GET 
app.get("/", main)
// POST 
app.post('/login', login)




app.listen(3000,()=>{
    console.log("server is up")
})

