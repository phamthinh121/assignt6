const path = require('path');

const express  = require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/user');
const messageRouter = require('./routes/message');

const app = express();
const url = 'mongodb+srv://phamthinh:s1owEKIgKp2iCT0C@cluster0-3z4jv.mongodb.net/test?retryWrites=true&w=majority';
const PORT  = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(messageRouter);

app.use('/', (req, res, next) => {
    res.render('index');
})
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
   app.listen(PORT, () => {
       console.log('Serve run');
   })
})
.catch(e => console.log(e));