const { application } = require('express');
var express = require('express');
var router = express.Router();
var cors = require('cors')

router.use(cors({optionsSuccessStatus: 200}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', (req, res)=>{
  res.json({
      unix: new Date().getTime(),
      utc: new Date().toUTCString()
  })
})


router.get('/api/:date_string?', (req, res) => {
  const { date_string } = req.params;

  let date;

  if (!date_string) {
    date = new Date();
  } else {
    date = isNaN(date_string)
      ? new Date(date_string)
      : new Date(parseInt(date_string, 10));

    // Check if the provided date is valid
    if (isNaN(date.getTime())) {
      res.json({ error: 'Invalid Date' });
      return;
    }
  }

  // Format the UTC date string in the specified format
  const utcDateString = date.toUTCString();

  res.json({
    unix: date.getTime(), // Unix timestamp in milliseconds
    utc: utcDateString,
  });
});


module.exports = router;
