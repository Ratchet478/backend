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
        default: [],
        validate: {
            validator: function (value) {
                const names = value.map(p => p.name);
                return names.length === new Set(names).size;
            },
            message: 'Permissions must be unique per role'
        }
    }
}, {
    timestamps: true
});