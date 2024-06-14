import mongoose from "mongoose";

const CustomerDataSchema = new mongoose.Schema({
  name: String,
  emails: Array<String>,
  phones: Array<String>,
  contacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contacts',
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Customers = mongoose.model('customers', CustomerDataSchema);