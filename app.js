
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');


const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);


app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
