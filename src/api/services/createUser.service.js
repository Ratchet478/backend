import User from "#models/User";
import { v2 as cloudinary } from 'cloudinary';
export async function createUserService(data) {

    const newUser = new User({
        username: data.username,
        email: data.email,
        password: data.password,
        profileImage: uploadImage(data.profileImage) || undefined,
        images: data.images || [],
        roles: data.roles || [{ name: 'user', description: 'Default user role', permissions: [] }]
    });
    return await newUser.save();
}

async function uploadImage(imagePath) {
    return cloudinary.uploader.upload(imagePath, {
        folder: 'user_profiles',
        use_filename: true,
        unique_filename: false
    });
}