import express from 'express';
import request from 'request';

const app = express();
app.use('/api/*', (req, res) => {
    const proxyPath = `http://api:3000${req.originalUrl}`
    request(`http://api:3000${req.originalUrl}`)
        .pipe(res);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => console.log('Expres app started on port 4000!'));
