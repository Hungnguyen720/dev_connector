const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String,
    },
    githubusername: {
        type: String,
    },
    experience: [{
            from: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            },
            to: {
                type: Date,
            },
            location: {
                type: String,
            },
            description: {
                type: String,
            }
        }
    ],
    education: [{
            school: {
                type: String,
                requried: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: date,
        default: Date.now
    }
});

