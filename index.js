const PORT=8000;
import fs from 'fs';
import express from 'express'
const app=express()

app.use('/',(req,res)=>{
  try {
    let currentDate=+new Date()
    let today=new Date()
    fs.writeFileSync(`TimeStamp/${currentDate}.txt`,`${today}`,'utf8')
    let data=fs.readFileSync(`TimeStamp/${currentDate}.txt`,'utf8')
    res.send(data)
    } 
  catch (error) {  
  }
})
app.listen(PORT,()=>console.log(`Server listening at http://localhost:${PORT}`))