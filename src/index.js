const express = require('express')
const path = require('path')
const app= express()

app.use(express.static(path.join(__dirname,'../public')))
app.get('/',(req,resp)=>{
    resp.send("This is working")

})

app.get('/register',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'views','register.html'))
})

app.get('/login',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'views','login.html'))
})

app.get('/home',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'index.html'))
})

app.get('/jokes',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'views','jokes.html'))
})

const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'


async function main(){
    // create a new mongoclient
    const client = new MongoClient(url)

    // connet to the server
    await client.connect();
    console.log("connected succ")

    // list all the database
    const databaseslist = await client.db().admin().listDatabases();
    console.log("My databases")

    databaseslist.databases.forEach(db=>{
        console.log(db.name)
    })


    await client.close()
}

main().then(()=>{
    console.log("connection closed")
}).catch(error=>{
    console.error("Error occured")
})

app.listen(5000)