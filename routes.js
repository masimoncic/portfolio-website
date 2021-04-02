const express = require('express');
const router = express.Router({mergeParams: true});
const controllers = require('./controllers');


router.get('/', controllers.home);

router.get('/projects', controllers.projects);

router.get('/generateTruthTable', controllers.generateTruthTable);



router.post('/generateTruthTable/submit', controllers.submit)


module.exports = router;