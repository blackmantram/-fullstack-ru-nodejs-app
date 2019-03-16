const express = require('express');
const bodyParser = require('body-parser')

const app = express();

let user = { 
    username: "blackmantram", 
    age: 30 
};

app.use(bodyParser.json());
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send(user));
app.post('/api/updateUser', (req, res) => {
    user.username = req.body.username;
    user.age = req.body.age;
    res.send(user);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
