const { Order, OrderItem } = require('../models');

exports.createOrder = async (req, res) => {
  const { userId, items, total } = req.body;
  try {
    const order = await Order.create({ userId, total });
    for (const item of items) {
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity
      });
    }
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.findAll({ where: { userId }, include: 'items' });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
