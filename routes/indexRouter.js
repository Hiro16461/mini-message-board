const { Router } = require('express');
const indexRouter = Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
		id: 1,
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
		id:2
	},
];

indexRouter.get('/', (req, res) =>
	res.render('index', {
		messages: messages,
	}),
);

indexRouter.post('/new', (req, res) => {
	const user = req.body.user;
	const text = req.body.text;
	messages.push({
		user: user,
		text: text,
		added: new Date(),
		id: Math.random(),
	});
	res.redirect('/');
});

indexRouter.get('/:id', (req, res) => {
	const messageId = Number(req.params.id);
	const message = messages.find(m => m.id === messageId);

	if (!message) {
		return res.status('404').send('Message not found')
	}
	res.render('detail', {message:message})
});



module.exports = indexRouter;
