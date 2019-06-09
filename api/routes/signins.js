const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request of the /singins'
  });
});

router.post('/', (req, res, next) => {
  const code = {
    email: req.body.email,
    password: req.body.password
  };
  res.status(201).json({
    message: 'Handling POST request of the /singins',
    code: code
  });
});


router.get('/:codeID', (req, res, next) => {
  const id = req.params.codeID;
    res.status(200).json({
      message: 'GET a code with Id',
      ID: id
    });
});
router.patch('/:codeID', (req, res, next) => {
  const id = req.params.codeID;
  res.status(200).json({
    message: 'Code updated!'
  });
});

router.delete('/:codeID', (req, res, next) => {
  const id = req.params.codeID;
  res.status(200).json({
    message: 'Code Deleted!'
  });
});

module.exports = router;
