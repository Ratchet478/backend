import User from "#models/User";
export async function createUserService(data) {
    const newUser = new User({
        username: data.username,
        email: data.email,
        password: data.password,
        profileImage: data.profileImage || undefined,
        images: data.images || [],
        roles: data.roles || [{ name: 'user', description: 'Default user role', permissions: [] }]
    });
    return await newUser.save();
}