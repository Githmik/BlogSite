const express = ('express');
const router = express.Router()


router.get('/', (req, res) => {
    res.send('in te articles')
  })

module.exports = router