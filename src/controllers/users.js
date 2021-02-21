const { request, response } = require('express');

const getUser = (req = request, res = response) => {
	res.json({
		message: 'get API from Controller',
		page,
		skip
	});
};

const getUsers = (req = request, res = response) => {
	res.json({
		message: 'get API from Controller'
	});
};

const postUser = (req = request, res = response) => {
	res.json({
		message: 'post API from Controller'
	});
};

const putUser = (req = request, res = response) => {
	res.json({
		message: 'put API from Controller'
	});
};

const patchUser = (req = request, res = response) => {
	res.json({
		message: 'patch API from Controller'
	});
};

const deleteUser = (req = request, res = response) => {
	res.json({
		message: 'delete API from Controller'
	});
};

module.exports = {
	getUser,
	getUsers,
	postUser,
	putUser,
	patchUser,
	deleteUser
};
