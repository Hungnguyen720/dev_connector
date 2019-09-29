const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator')

// @route Post api/users
// @ desc Register user
// @access Public
router.post('/', [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please include a valid email'),
    check('password', 'please enter a password with 6 or more characters').isLength({
        min: 6
    })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
})

module.exports = router;