const { Router } = require('express');
const router = new Router();

router.get('/', async (request, response) => {
	response.redirect('https://wiki.samtendo.net');
});

module.exports = router;