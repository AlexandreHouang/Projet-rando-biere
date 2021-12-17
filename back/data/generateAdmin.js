require('dotenv').config();
const User = require('../app/models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = process.env.ADMINPASSWORD;

/**
 * generates an admin user with a hashed password 
 * 
 */
const generateAdmin =  async () => {
    try {
        // hashes the password
        const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
        // creates a user 
        const newUser = new User({nickname:'michel', email:'michel@michel.fr', password: hashedPassword, role: 'admin'});
        // insert the user into the db
        await newUser.save();
    } catch (error) {
        console.log(error)
    }
};

generateAdmin();