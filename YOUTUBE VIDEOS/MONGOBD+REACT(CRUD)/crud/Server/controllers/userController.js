import User from '../model/userModel.js';

const create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: 'User Data Not Found' });
    }

    const userData = new User(req.body);
    const savedData = await userData.save();

    res.status(201).json(savedData);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: er });
  }
};

const getAll = async (req, res) => {
  try {
    const userData = await User.find();

    if (userData.length === 0) {
      return res.status(404).json({ message: 'No Users Found' });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUserData = await User.findById(id);

    if (!singleUserData) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    res.status(200).json(singleUserData);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: error });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedData) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
const remove = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    res.status(200).json({
      message: 'User deleted successfully',
      deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
const userController = { create, getAll, getOne, update, remove };

export default userController;
