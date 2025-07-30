import express from 'express';
import * as userController from '#controllers/user.controller';

const router = express.Router();



router.get('/', userController.getUsers);
router.get('/username/:username', userController.getUserByUsername);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

export { router as userRoutes };