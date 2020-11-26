let express = require ('express')

let app = express()
app.get('/', function(req, res){
    res.send("Helloo,,, and welcome to my App")
})

app.listen(3000)