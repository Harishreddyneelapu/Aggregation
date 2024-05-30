import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import User from '../models/user.model';
// import UserDb from '../models/usersdb.model';
// import UserDb from '../models/usersdb.model';

// /**
//  * Controller to get all users available
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};






export const getUsersFromData = async(req,res)=>{
  try{
    const stats = await User.aggregate([
      {$match:{FirstName:"harish"}}
    ])
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: stats,
      message: 'get match successfully'
    });
    console.log(stats);
  }catch(err){
    res.status(404).json({
      status:"fail",
      message:err.message
    })
  }
}