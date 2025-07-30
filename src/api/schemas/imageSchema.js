import { Schema } from 'mongoose';

export const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    _id: false,
});