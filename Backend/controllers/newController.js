const User = require('../model/User');


const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while fetching users.' });
  }
};

const addUser = async (req, res, next) => {
  const { userName, userPhone, userGmail, userPassword, UserAgree } = req.body;

  try {
    const user = new User({
      userName,
      userPhone,
      userGmail,
      userPassword,
      UserAgree,
    });
    await user.save();
    return res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while adding a user.' });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while fetching the user.' });
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { userName, userPhone, userGmail, userPassword, UserAgree } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        userName,
        userPhone,
        userGmail,
        userPassword,
        UserAgree,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while updating the user.' });
  }
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ message: 'User successfully deleted.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while deleting the user.' });
  }
};




module.exports = {
  getAllUsers,
  addUser,
  getById,
  updateUser,
  deleteUser,
};
