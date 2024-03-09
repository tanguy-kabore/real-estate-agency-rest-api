import express from 'express';
import {
    getReviews, getReviewById, createReview, updateReview, deleteReview
} from '../controllers/review.controller.js';

const router = express.Router();

router.route('/').post(createReview);
router.route('/').get(getReviews);
router.route('/:id').get(getReviewById);
router.route('/:id').patch(updateReview);
router.route('/:id').delete(deleteReview);

export default router;
