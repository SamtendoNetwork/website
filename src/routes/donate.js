const { Router } = require('express');
const router = new Router();

router.get('/', async (request, response) => {
	response.render('donate');
});

module.exports = router;