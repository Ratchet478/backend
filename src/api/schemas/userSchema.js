import { Schema } from 'mongoose';
import { roleSchema } from './roleSchema.js';
import { ImageSchema } from './ImageSchema.js';
export const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    roles: {
        type: roleSchema,
        default: [{ name: 'user', description: 'Default user role', permissions: [{ name: 'default', description: 'default permission' }] }]
    },
    profileImage: {
        type: ImageSchema,
        default: null
    },
    images: {
        type: [ImageSchema],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
});