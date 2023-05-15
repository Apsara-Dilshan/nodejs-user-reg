import express from 'express';
import User from '../models/userModel.js';
import data from '';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await User.removeAllListeners({});
  const createUsers = await User.insertMany(data.Users);
  res.send({ createdProducts, createUsers });
});
export default seedRouter;
