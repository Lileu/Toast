// Middleware to restrict specific routes for users that are not logged in
module.exports = function (req, res, next) {
   // If user is logged in, allow access to restricted route
   if (req.user) {
      return next();
   };

   // If user is not logged in, redirect them to the login page
   return res.direct("/");
}