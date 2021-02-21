const { Router } = require('express');
const router = Router();
const {
	getUser,
	getUsers,
	postUser,
	putUser,
	patchUser,
	deleteUser
} = require('../controllers/users');

router.get('/:id', getUser);
router.get('/', getUsers);
router.post('/', postUser);
router.put('/:id', putUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

module.exports = router;
