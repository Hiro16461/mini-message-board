const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')
const newMessageRouter = require('./routes/newMessageRouter')

app.use('/', indexRouter)
app.use('/new', newMessageRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`Mini message board - listening on port ${PORT}`);
});
