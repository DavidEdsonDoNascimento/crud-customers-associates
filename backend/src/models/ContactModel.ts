import mongoose from "mongoose";

const ContactDataSchema = new mongoose.Schema({
  name: String,
  emails: Array<String>,
  phones: Array<String>,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customers',
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Contacts = mongoose.model('contacts', ContactDataSchema);