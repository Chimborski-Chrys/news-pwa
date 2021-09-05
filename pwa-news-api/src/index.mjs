import express from 'express';
import cors from 'cors';
import economia from './economia.json';
import tecnologia from './tecnologia.json';
import mundo from './mundo.json';

const GROUP_NEWS = {
    economia,
    tecnologia,
    mundo
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/', function(req, res) {
    res.json({
        economia,
        tecnologia,
        mundo
    })
})

app.listen(PORT, function() {
    console.log(`Servere running on ${PORT} PORT`)
});