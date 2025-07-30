import { Schema } from 'mongoose';
import { roleSchema } from './roleSchema.js';
import { imageSchema } from './imageSchema.js';
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
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
    profileImage: {
        type: imageSchema,
        default: null
    },
    images: {
        type: [imageSchema],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
});