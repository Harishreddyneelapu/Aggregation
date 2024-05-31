import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import User from '../models/user.model';
import UserAgg from '../models/usersdb.model';

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
    // const stats = await User.aggregate([
    //   {$match:{eyeColor:'green'}}
    // ])
    // const stats = await User.aggregate([
    //   {$match:{index:{$gte:980}}}
    // ])
    const stats = await User.aggregate([
      {$match:{index:{$gte:950}}},
      {$group:{
        _id:'$eyeColor',
        avgAge:{$avg:'$age'},
        maxAge:{$max:'$age'},
        minAge:{$min:'$age'},
        totalAge:{$sum:'$age'},
        colorCount:{$sum:1}
      }},
      {$sort:{minAge:-1}},
      {$match:{maxAge:{$gte:39}}}
    ])
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'get match successfully',
      count:stats.length,
      data: stats
    });
    console.log(stats);
  }catch(err){
    res.status(404).json({
      status:"fail",
      message:err.message
    })
  }
}