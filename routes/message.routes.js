import express from 'express';
import {
    getMessages, getMessageById, createMessage, updateMessage, deleteMessage
} from '../controllers/message.controller.js';

const router = express.Router();

router.route('/').post(createMessage);
router.route('/').get(getMessages);
router.route('/:id').get(getMessageById);
router.route('/:id').patch(updateMessage);
router.route('/:id').delete(deleteMessage);

export default router;
