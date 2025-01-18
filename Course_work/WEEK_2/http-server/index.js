const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

var users = [{
    name: "Abhishek",
    kidneys: [{
        healthy: false
    }]
}]

function getBirthYear(age){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    console.log(year-age)
    return (year - age);
}

app.get('/', (req,res) => {
    const age = req.query.age
    console.log(age)
    const birthYear = getBirthYear(age)
    res.send(`Your birth year is ${birthYear}`)
})



// // returns info about health of all kidneys present
// app.get('/', (req, res) => {
//     const userKidney = users[0].kidneys;
//     const numberOfKidneys = userKidney.length;
//     let HealthyKidneys = userKidney.filter((value) => { return value.healthy === true})
//     const numberOfHealthyKidneys = HealthyKidneys.length
//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys
//     })
// })

// pushes new kidney
app.post('/', (req,res) => {
    const isHealthy = req.body.isHealthy
    console.log(req.body)
    users[0].kidneys.push({
        healthy: isHealthy,
    })
    res.send("New kidney added")
})
    
    
    // make every kidney healthy
    app.put('/',(req, res) => {
        for(let i = 0; i < users[0].kidneys.length ; i++){
            users[0].kidneys[i].healthy = true
        }
        res.json(users)
    })
    
    app.delete('/',(req, res) => {
        const healthyKidneys = users[0].kidneys.filter((value) => {return value.healthy === true})
        users[0].kidneys = healthyKidneys
        res.json(users)
    })
    
    app.listen(PORT, () => {
        console.log(`Backend HTTP-server running at ${PORT}`)
    })
    

