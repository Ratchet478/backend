import User from '#models/User'
import { createUserService } from '#services/createUser.service';
export async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
};
export async function getUserById(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
};
export async function getUserByUsername(req, res, next) {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
};
export async function createUser(req, res, next) {
    try {
        const userExists = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (userExists) {
            return res.status(400).json({ message: "Username or email already exists" });
        }
        const savedUser = await createUserService(req.body);
        return res.status(201).json(savedUser);
    }
    catch (error) {
        next(error);
    }
};
export async function deleteUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        next(error);
    }
}
export async function updateUser(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
};
