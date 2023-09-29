const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async(req,res) =>{
    try {
        const password = req.body.password;
        if (!password) {
            throw new Error('Password is required');
          }
        
        const saltRounds = 10; // Adjust the number of salt rounds as needed
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username:req.body.username,
            email: req.body.email,
            password: passwordHash,
        });

        await newUser.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully.',
            data: newUser,
          });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
        success: false,
        message: 'Failed to create a new user.',
        });
    }
}

const login = async(req,res) =>{

    const email = req.body.email
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
                });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect email or password',
                });       
            }

            const {password,role,...rest} = user._doc

            const token = jwt.sign({ id: user._id,role:user.role }, process.env.JWT_SECRET_KEY , {
                expiresIn: '1h', // Set the expiration time as needed
              });

            res.cookie('accessToken',token,{
                httpOnly:true,
                expires:token.expiresIn
            }).status(200).json({
                success: true,
                message: 'successfully login.',
                data:{
                    token,
                    ...rest,
                    role,
                }
              });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to login.',
            });
        
    }
}

module.exports = {
    signup,
    login,
}