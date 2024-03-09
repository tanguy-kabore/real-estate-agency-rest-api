import mongoose from 'mongoose';
// controllerUtils.js
const getModelItems = async (Model, req, res) => {
    const { _start, _end, _sort, _order, ...filters } = req.query;
    const query = {};
  
    // Ajoutez d'autres conditions selon les besoins
    for (const [key, value] of Object.entries(filters)) {
      query[key] = { $regex: value, $options: "i" };
    }
  
    try {
      let itemsQuery = Model.find(query);
  
      if (_sort && _order) {
        const sortOptions = {};
        sortOptions[_sort] = _order === 'asc' ? 1 : -1;
        itemsQuery = itemsQuery.sort(sortOptions);
      }
  
      const count = await Model.countDocuments(query);
  
      const items = await itemsQuery
        .limit(parseInt(_end))
        .skip(parseInt(_start));
  
      res.header('X-Total-Count', count);
      res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getModelItemById = async (Model, req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Item not found' });
    }
  
    try {
      // const item = await Model.findById(id);
      const item = await Model.findOne({ _id: id });

  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const createModelItem = async (Model, req, res) => {
    const newItem = new Model(req.body);
  
    try {
      const createdItem = await newItem.save();
      res.status(201).json(createdItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
const updateModelItem = async (Model, req, res) => {
    const { id } = req.params;
    const { body } = req;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Item not found' });
    }
  
    try {
      const updatedItem = await Model.findByIdAndUpdate(id, body, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
const deleteModelItem = async (Model, req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Item not found' });
    }
  
    try {
      await Model.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export { getModelItems, getModelItemById, createModelItem, updateModelItem, deleteModelItem };  