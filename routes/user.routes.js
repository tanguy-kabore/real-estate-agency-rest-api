import express from 'express';

import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').post(createUser);
router.route('/').get(getUsers);
router.route('/:id').get(getUserById);
router.route('/:id').patch(updateUser);
router.route('/:id').delete(deleteUser);

export default router;