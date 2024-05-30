import User from '../models/user.model';
// import usersdbModel from '../models/usersdb.model';
// import usersdbModel from '../models/usersdb.model';

// //get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};
