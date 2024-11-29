const ShopModel = require('../models/shopModel');

// /upload-products
exports.createProducts = async (req, res) => {
  try {
    const { price, availability, category } = req.body;

    if (!price && !availability && !category) {
      return res.status(400).json({
        message: 'All fields must be filled',
      });
    } else if (!price) {
      return res.status(400).json({
        message: 'Enter the amount',
      });
    } else if (!availability) {
      return res.status(400).json({
        message: 'Stork has ran out',
      });
    } else if (!category) {
      return res.status(400).json({
        message: 'Enter the category',
      });
    } else if (!price || !availability || !category) {
      return res.status(400).json({
        message: 'All fields must be filled',
      });
    }
    const newProduct = await ShopModel.create({
      price,
      availability,
      category,
    });
    return res.status(201).json({
      message: 'order added to your shopping cart',
      data: newProduct,
    });
  } catch (error) {
    console.error('unable to place your order');
  }
};

// /get-all-products,
exports.getAll = async (req, res) => {
  try {
    const products = await ShopModel.find();
    return res.status(201).json({
      message: 'Total cart items',
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Cart items not found',
      error,
    });
  }
};
// /get-one-product/:id
exports.getOneById = async (req, res) => {
  try {
    const product = await ShopModel.findById(req.params.id);
    return res.status(200).json({
      message: 'Cart item',
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Cart item not found',
      error,
    });
  }
};
// /update-product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { availability, category } = req.body;
    const update = await ShopModel.findByIdAndUpdate(
      id,
      {
        availability,
        category,
      },
      { new: true }
    );
    return res.status(202).json({
      message: 'Cart item updated',
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to update cart item',
      error,
    });
  }
};
// /delete-products
exports.getOneAndDelete = async (req, res) => {
  try {
    const { name } = req.body;
    const product = await ShopModel.findOneAndDelete({ name });
    return res.status(200).json({
      message: 'user deleted',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to delete cart product',
      error,
    });
  }
};
