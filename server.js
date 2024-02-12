const express = require ('express')
const articleRouter = require ("./routes/articles")
const mongoose = require ("mongoose")
const app = express()



app.set('view engine','ejs')

app.get('/', (req, res) => {
    const articles = [{
      title: 'test article 1',
      createAt:new Date(),
      description: 'test description'

    },

    {
        title: 'test article 2',
      createAt: new Date(),
      description: 'test description'

    }]
    res.render('articles/index', {articles:articles})
  });


app.use('/articles',articleRouter)
  

app.listen(3000)