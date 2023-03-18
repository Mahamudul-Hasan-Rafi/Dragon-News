const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/news-categories', (req, res) => {
    res.send(news);
})

app.get('/category/:id', (req, res) => {
    if (req.params.id === '08')
        res.send(news);
    const selectedNews = news.filter(n => n.category_id === req.params.id);
    res.send(selectedNews);
})

app.get('/news/:id', (req, res) => {
    res.send(news.find(n => n._id === req.params.id));
})
app.listen(port, () => console.log("Server is listening..."));