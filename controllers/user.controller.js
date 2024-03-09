import UserModel from '../models/user.js';
import { getModelItems, createModelItem, getModelItemById, updateModelItem, deleteModelItem } from './controllerUtils.js';

// Get all users
export const getUsers = async (req, res) => {
  await getModelItems(UserModel, req, res);
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  await getModelItemById(UserModel, req, res);
};

// Create a new user
export const createUser = async (req, res) => {
  await createModelItem(UserModel, req, res);
};

// Update a user by ID
export const updateUser = async (req, res) => {
  await updateModelItem(UserModel, req, res);
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  await deleteModelItem(UserModel, req, res);
};