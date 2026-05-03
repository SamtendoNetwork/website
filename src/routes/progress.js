const { Router } = require('express');
const { getGithubProjectsCache } = require('../cache');

const router = new Router();

router.get('/', async (request, response) => {
	const renderData = {
		progressLists: await getGithubProjectsCache()
	};

	response.render('progress', renderData);
});

module.exports = router;
