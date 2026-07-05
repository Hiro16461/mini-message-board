const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/indexRouter')
const newMessageRouter = require('./routes/newMessageRouter')

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.use(express.urlencoded({extended: true}))

app.use('/new', newMessageRouter)
app.use('/', indexRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini message board - listening on port ${PORT}`);
});
