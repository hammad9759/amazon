import express from 'express';
import User from '../Models/userModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    // to remove all uses in the database 
    // const removedUsers = await User.remove({});
    // res.send({removedUsers});
    // insert uses 
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));
export default userRouter;