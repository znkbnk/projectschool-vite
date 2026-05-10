var e=[`
//server/models/Cart.js

import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true, min: 1 },
    addedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true,
  },
  items: [CartItemSchema],
  updatedAt: { type: Date, default: Date.now },
});

cartSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Cart', cartSchema);

`];export{e as default};
//# sourceMappingURL=ecom6-CVBrHY9n.js.map