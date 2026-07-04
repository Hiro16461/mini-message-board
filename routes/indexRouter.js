const { Router } = require('express')
const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('Index Route'));

module.exports = indexRouter;