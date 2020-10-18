const express=require("express")
const app=express()
const fs=require("fs")
let Targets=JSON.parse(fs.readFileSync("targets.json")).features

app.use(express.json())

app.get('/targets',(req,res)=>{
    let problem=false
    do {
        try{
            let target=Targets[Math.floor(Math.random()*Targets.length)]
            let outcome={
            name:target.properties.ADMIN,
            polygon:target.geometry.coordinates[0].map(pair=>{return {lng:Number(pair[0].toFixed(2)),lat:Number(pair[1].toFixed(2))}})
            }
            problem=false
            res.send(outcome)
        } catch {
            problem=true
        }
    } while (problem)
})


const PORT=process.env.PORT||8080
app.listen(PORT,()=>console.log("listening on "+ PORT))
