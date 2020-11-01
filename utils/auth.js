// Function requires user to be logged in to view data when this is used
const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
  };
  
  module.exports = withAuth;