import express from 'express';

const app = express();
app.get('*', (req, res) => {
    res.send('Receiving request from app server!');
});

app.listen(3000, () => console.log('API started on port 3000!'));