import itemModel from "../models/item.model.js";

export async function handleCreateItem(req, res) {
  try {
    const itemdetails = await itemModel.create({
      ...req.body,
      user: req.user.id,
    });
    return res.status(201).json({ msg: "item created" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

export async function handleGetAllItems(req, res) {
  try {
    const Allitems = await itemModel.find().populate("user", "name email");
    return res.status(200).json({
      Allitems,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

export async function handleUserItems(req, res) {
  try {
    const items = await Item.find({ user: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function handleUpdate(req, res) {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: "Item not found" });

    if (item.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized" });
    }
    
    item.status = "resolved";
    await item.save();

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function handleDelete(req, res) {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: "Item not found" });

    await item.deleteOne();

    res.json({ msg: "Item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
