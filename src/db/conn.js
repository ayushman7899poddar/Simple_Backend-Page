const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/thapadynamic"
// ,{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
)
.then(() =>{
    console.log("connection successful");
}).catch((Error) =>{
    console.log("No connection");
});