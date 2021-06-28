const express =  require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/item');

//@router GET request
//@decs GT ALL ITMS
//@access Public
router.get('/',(req,res) => {
    Item.find()
    .sort({date  : -1})
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: is hr ' + err));
});

//@router POST request
//@decs post ALL ITMS
//@access Public

/*/
router.post('/',(req,res) => {
    const newItem = new Item({
        name: res.body.name
    });

    newItem.save()
    .then(item => res.json(item))
    .catch(err => res.json('Error: is hr ' + err));
});

/*/

router.post('/',  (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  try {
    const item =  newItem.save();
    if (!item) throw Error('Something went wrong saving the item');

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router; 