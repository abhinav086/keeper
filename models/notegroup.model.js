import mongoose from 'mongoose';

const noteGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export const NoteGroup = mongoose.model("NoteGroup",noteGroupSchema);