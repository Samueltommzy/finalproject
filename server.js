let express = require('express');
let app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT||8080,(err)=>{
    if(err)console.log(err);
    console.log("app listening on 8080");
});