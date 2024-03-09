import ReviewModel from '../models/review.js';
import { getModelItems, createModelItem, getModelItemById, updateModelItem, deleteModelItem } from './controllerUtils.js';

// Get all reviews
export const getReviews = async (req, res) => {
  await getModelItems(ReviewModel, req, res);
};

// Get a single review by ID
export const getReviewById = async (req, res) => {
  await getModelItemById(ReviewModel, req, res);
};

// Create a new review
export const createReview = async (req, res) => {
  await createModelItem(ReviewModel, req, res);
};

// Update a review by ID
export const updateReview = async (req, res) => {
  await updateModelItem(ReviewModel, req, res);
};

// Delete a review by ID
export const deleteReview = async (req, res) => {
  await deleteModelItem(ReviewModel, req, res);
};
