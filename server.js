const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')
const app = express();

//bodyParser Middlepare

app.use(bodyParser.json());
//app.use(express.urlencoded({extended: true}));
//Db config
const db = require('./config/keys').mongoURI;


/*/
//connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected"))
    .catch(err => console.log(err+"error ouccessssssssssssds"));
/*/
mongoose.connect("mongodb://localhost/mongotube", {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})
        .then(() => console.log("Mongodb is connected"))
        .catch(err => console.log(err+"error Mongodb connections"));
app.use("/api/items",require("./routes/api/items"))    
    const port = process.env.PORT || 5000;
  
app.listen(port, () => console.log('Server started on port '+port));    