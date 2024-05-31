import { Schema, model } from 'mongoose';

// Define the schema for the nested location object
const locationSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, { _id: false });

// Define the schema for the nested company object
const companySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: locationSchema,
    required: true
  }
}, { _id: false });

// Define the main schema
const userSchema = new Schema({
  index: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  registered: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  eyeColor: {
    type: String,
    required: true
  },
  favoriteFruit: {
    type: String,
    required: true
  },
  company: {
    type: companySchema,
    required: true
  },
  tags: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
});

export default model('UserAgg', userSchema);
