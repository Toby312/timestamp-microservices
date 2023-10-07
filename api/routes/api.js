var express = require('express');
var router = express.Router();
var cors = require('cors')




router.get('/', (req, res)=>{
    res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    })
  })

  module.exports = router;