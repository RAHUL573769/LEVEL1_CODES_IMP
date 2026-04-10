import User from '../model/user.model.js'

const createUserController = async (req, res) => {
    try {

        const newUser = new User(req.body);

        const savedUser = await newUser.save();

        // Send response
        res.status(201).json({
            success: true,
            data: savedUser
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: 'User creation failed',
            error: error.message
        });
    }
};

export const create = { createUserController }