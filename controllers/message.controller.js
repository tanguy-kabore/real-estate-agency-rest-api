import MessageModel from '../models/message.js';
import { getModelItems, createModelItem, getModelItemById, updateModelItem, deleteModelItem } from './controllerUtils.js';

// Get all Messages
export const getMessages = async (req, res) => {
  await getModelItems(MessageModel, req, res);
};

// Get a single Message by ID
export const getMessageById = async (req, res) => {
  await getModelItemById(MessageModel, req, res);
};

// Create a new Message
export const createMessage = async (req, res) => {
  await createModelItem(MessageModel, req, res);
};

// Update a Message by ID
export const updateMessage = async (req, res) => {
  await updateModelItem(MessageModel, req, res);
};

// Delete a Message by ID
export const deleteMessage = async (req, res) => {
  await deleteModelItem(MessageModel, req, res);
};