const express = require('express');
const seed = express.Router();

const Tools = require('../models/tools.js');

seed.get('/', (req,res) => {
    Tools.create([
        {
            type: 'Power Tools',
            name: 'Drills',
            img: 'https://m.media-amazon.com/images/I/51BOsNxvFuL.jpg',
            qty: 5,
            price: 55,
        },
        {
            type: 'PPE',
            name: 'Safety Googles',
            img: 'https://images-na.ssl-images-amazon.com/images/I/712Ua1aYSrL._AC_SL1500_.jpg',
            qty: 1,
            price: 7,
        },
        {
            type: 'HandHeld Tools',
            name: 'Toolbox',
            img: 'https://images-na.ssl-images-amazon.com/images/I/71hjgmP80RL._AC_SL1500_.jpg',
            qty: 22,
            price: 30,
        },
        {
            type: 'Power Tools',
            name: 'Saws',
            img: 'https://m.media-amazon.com/images/I/51QKuv5rkmL.jpg',
            qty: 23,
            price: 189,
        },
        {
            type: 'Power Tools',
            name: 'Power Sanders',
            img: 'https://m.media-amazon.com/images/I/41IO341aCFL.jpg',
            qty: 15,
            price: 37,
        },
        {
            type: 'Power Tools',
            name: 'Nail Guns',
            img: 'https://m.media-amazon.com/images/I/41+Oj3lMrfL.jpg',
            qty: 13,
            price: 88,
        },
        {
            type: 'HandHeld Tools',
            name: 'Torque Wrench',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61KxQZJJA8L._AC_SL1500_.jpg',
            qty: 3,
            price: 51,
        },
        {
            type: 'PPE',
            name: 'Foam Ear Plugs',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41nM-bWOAJL._AC_.jpg',
            qty: 8,
            price: 3,
        },
        {
            type: 'Power Tools',
            name: 'Power Rachet Sets',
            img: 'https://m.media-amazon.com/images/I/51xhszRjAlL.jpg',
            qty: 24,
            price: 75,
        },
        {
            type: 'Power Tools',
            name: 'Lathes',
            img: 'https://m.media-amazon.com/images/I/41DmQ3EcxmL.jpg',
            qty: 10,
            price: 180,
        },
        {
            type: 'HandHeld Tools',
            name: 'Hammers',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61ZqYLP2KKL._AC_SL1500_.jpg',
            qty: 20,
            price: 28,
        },
        {
            type: 'Power Tools',
            name: 'Grinder',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHDkXd2L._AC_SL1000_.jpg',
            qty: 21,
            price: 430,
        },
        {
            type: 'Power Tools',
            name: 'Sander',
            img: 'https://images-na.ssl-images-amazon.com/images/I/818d%2Bq4nBKL._AC_SL1500_.jpg',
            qty: 15,
            price: 159,
        },
        {
            type: 'Power Tools',
            name: 'Heat Gun',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61P98oJmqIL._AC_SL1500_.jpg',
            qty: 24,
            price: 92,
        },
        
        {
            type: 'HandHeld Tools',
            name: 'Screw Driver Set',
            img: 'https://images-na.ssl-images-amazon.com/images/I/71gLQV5kSUL._AC_SL1500_.jpg',
            qty: 25,
            price: 58,
        },
        {
            type: 'PPE',
            name: 'Life Jacket',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61G3tJJa%2BGL._AC_SL1000_.jpg',
            qty: 7,
            price: 40,
        },
        {
            type: 'HandHeld Tools',
            name: 'Pliers',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61OOmleM8XL._AC_SL1500_.jpg',
            qty: 8,
            price: 6.50,
        },
        {
            type: 'Power Tools',
            name: 'Air Compressor',
            img: 'https://m.media-amazon.com/images/I/518XHi65mXL.jpg',
            qty: 23,
            price: 300,
        },
        {
            type: 'HandHeld Tools',
            name: 'Ladders',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61mEUFAt%2BPL._AC_SL1500_.jpg',
            qty: 23,
            price: 85,
        },
        {
            type: 'HandHeld Tools',
            name: 'Wrench Set',
            img: 'https://images-na.ssl-images-amazon.com/images/I/91%2BPEuAGUdL._AC_SL1500_.jpg',
            qty: 21,
            price: 24,
        },
        {
            type: 'HandHeld Tools',
            name: 'Crimping Pliers',
            img: 'https://images-na.ssl-images-amazon.com/images/I/71FG5DFa2jL._AC_SL1500_.jpg',
            qty: 15,
            price: 9,
        },
        {
            type: 'HandHeld Tools',
            name: 'Measuring Tape',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41bMiaQ%2Bx5L._AC_.jpg',
            qty: 12,
            price: 10,
        },
        {
            type: 'PPE',
            name: 'Safety Helmets',
            img: 'https://images-na.ssl-images-amazon.com/images/I/61Jpxq7tBQL._AC_SL1500_.jpg',
            qty: 18,
            price: 15,
        },
        
        {
            type: 'PPE',
            name: 'Safety Boots',
            img: 'https://images-na.ssl-images-amazon.com/images/I/91LMW9SAbFL._SL1500_.jpg',
            qty: 7,
            price: 35,
        },
        {
            type: 'PPE',
            name: 'Safety Vest',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51ojM%2BMMWHL._AC_SL1001_.jpg',
            qty: 25,
            price: 8,
        },
        {
            type: 'Power Tools',
            name: 'Air Compressor Tools',
            img: 'https://m.media-amazon.com/images/I/51ACmWl29cL.jpg',
            qty: 20,
            price: 150,
        },
        
        
    ], (err, data) => {
        res.redirect('/apps');
    });
});

module.exports = seed;