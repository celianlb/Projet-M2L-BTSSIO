const router = require('express-promise-router')();

const users = require('../controllers/users');
const {abonnee, circuit} = require('../controllers/users');
const {competition, add_competition, del_competition} = require('../controllers/competition')


router.route('/competition')
    .get(competition);

router.route('/users')
    .get(abonnee);

router.route('/circuit')
    .get(circuit);

router.route('/competition/add_competition')
    .get(add_competition);

router.route('/competition/del_competition/:id')
    .get(del_competition);
module.exports = router;