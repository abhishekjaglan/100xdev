const express = require("express")
const zod = require("zod")
const app = express();

app.use(express.json())

const objectSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")).or(zod.literal("UK"))
})

function userMiddleware(req, res, next){

    const userName = req.headers.username;
    const password = req.headers.password;

    if(userName != 'harkirat' && password != 'pass'){
        res.status(403).json({
            msg: "Incorrect username or password Input"
        })
    }else{
        next();
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId

    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg:"Incorrect KidneyId input"
        })
    } else {
        next();
    }
}

app.get('/health-checkup',userMiddleware, kidneyMiddleware, (req, res) => {
    
    res.json({
        msg: "Your kidney is fine !"
    })
})

app.post('/health-checkup', (req, res) => {
    const user = req.body
    const response = objectSchema.safeParse(user)
    
    if(response.success){
        const country = user.country
        res.status(411).json({
            msg:`Your country of residence is: ${country} `,
        })
    } else{
        res.json({
            response
        })
    }
    
});

// app.use((err, req, res, next) => {
//     res.json({
//         msg: `Sorry something went wrong with our server`
//     })
// })

app.listen(3000, () => {
    console.log(`Http-Server is connected and running on port 3000 !!`)
})