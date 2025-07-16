import { Schema } from 'mongoose';
import { permissionSchema } from './permissionSchema.js';
export const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    permissions: {
        type: [permissionSchema],
        default: []
    }
}, {
    timestamps: true
});