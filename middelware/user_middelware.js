// import { User } from "../model/user_model";

// // Middleware to get a user by ID
// export const getUser =  async function getUser(req, res, next) {
//     let user;
//     try {
//       user = await User.findById(req.params.id);
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//     } catch (err) {
//       return res.status(500).json({ error: err.message });
//     }
  
//     res.user = user;
//     next();
//   }