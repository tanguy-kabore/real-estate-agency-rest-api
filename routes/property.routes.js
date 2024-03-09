import express from 'express';
import {
    getProperties, getPropertyById, createProperty, updateProperty,
    deleteProperty
} from '../controllers/property.controller.js';

const router = express.Router();

router.route('/').post(createProperty);
router.route('/').get(getProperties);
router.route('/:id').get(getPropertyById);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;