const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;
// normal vabe kono kisuke paoa
app.get('/', (req, res) => {
    res.send('Wow. i am Excited to learn Node and exparts with express yey')
})

const users =[
    {id: 0, name: 'sabana', email: 'sabana@gmail.com'},
    {id: 1, name: 'sabnoor', email: 'sabnoor@gmail.com'},
    {id: 2, name: 'sabnas', email: 'sabnas@gmail.com'},
    {id: 3, name: 'sabina', email: 'sabnia@gmail.com'},
    {id: 4, name: 'sabnam', email: 'sabnam@gmail.com'}
]
// Use query parameter
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if(search){
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
      res.send(searchResult);
    }
    else{
        res.send(users)
    }
   
})
// app.METHOD
app.post('/users', (req,res) => {
const newUser = req.body;
newUser.id = users.length;
users.push(newUser);    
console.log('hitting the post', req.body);
// res.send(JSON.stringify(newUser))
res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oreng', 'apple'])
})

app.listen(port, () => {
    console.log('Listening to port', port);
})