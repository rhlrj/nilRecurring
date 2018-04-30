var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    userID: {
    	type: String,
    	unique: true,
    	required: true,
    	trim: true
  },
    name: String, 
    email: {
    	type: String,
    	unique: true,
    	required: true,
    	trim: true
  },
    imageurl: String,
    dob: String,
    mobile: Number , 
    rating: Number	
}, {
    timestamps: false
});

module.exports = mongoose.model('User', UserSchema);

