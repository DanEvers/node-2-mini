const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static( __dirname + '/../build'));


const port = 4000;

const { read, create, update, deleteBook } = require('./controllers/books_controller')

app.get('/api/books/', read);
app.post('/api/books/', create);
app.put('/api/books/:id', update);
app.delete('/api/books/:id', deleteBook);

app.listen( port, () => console.log(`Dan, I am listening on port ${port}`))