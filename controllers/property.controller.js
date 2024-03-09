import PropertyModel from '../models/property.js';
import { getModelItems, createModelItem, getModelItemById, updateModelItem, deleteModelItem } from './controllerUtils.js';

// Get all properties
export const getProperties = async (req, res) => {
  await getModelItems(PropertyModel, req, res);
};

// Get a single property by ID
export const getPropertyById = async (req, res) => {
  await getModelItemById(PropertyModel, req, res);
};

// Create a new property
export const createProperty = async (req, res) => {
  await createModelItem(PropertyModel, req, res);
};

// Update a property by ID
export const updateProperty = async (req, res) => {
  await updateModelItem(PropertyModel, req, res);
};

// Delete a property by ID
export const deleteProperty = async (req, res) => {
  await deleteModelItem(PropertyModel, req, res);
};