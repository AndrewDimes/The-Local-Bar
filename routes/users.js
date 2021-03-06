const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const user = require('../models/user');

router.get('/users', usersCtrl.index);
router.get('/about', usersCtrl.about);
router.get('/uhoh', usersCtrl.uhoh)
router.get('/menu', usersCtrl.menu)
router.get('/hhmenu', usersCtrl.hhmenu);
router.get('/drinks', usersCtrl.drinks)
router.get('/order',isLoggedIn, usersCtrl.order)
router.get('/cart',isLoggedIn, usersCtrl.cart)
router.get('/checkout', usersCtrl.goCheckOut)
router.delete('/cart/:id', usersCtrl.delete)
router.delete('/cart/:id/checkout', usersCtrl.checkOut)
router.delete('/cart/:id/remove', usersCtrl.remove)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

module.exports = router;