const { Router } = require('express');
const router = new Router();

router.get('/', async (request, response) => {
	response.render('verify');
});

module.exports = router;