var auth = require('./auth');

module.exports = function(app) {

    var users = require('../controllers/users.controller.js');
    var profiles=require('../controllers/profile.controller.js');

    // Check user
    app.post('/users/login', users.authenticate);

    // Add a user
    app.post('/users', users.add);

    // Retrieve a user
    app.get('/users',auth.required, users.findOne);

    // Update a user
    app.put('/users', auth.required, users.update);
    
    app.post('/profiles/:username/follow', auth.required, profiles.follow);
    
    app.delete('/profiles/:username/follow', auth.required, profiles.unfollow);
    
	app.get('/profiles/:username', auth.optional, profiles.findProfile);
       
}

