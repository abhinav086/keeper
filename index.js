const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3000; // Choose any available port


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001'
}))
// Define a route handler for the root path
app.get('/mygett', (req, res) => {
    const jsonData = { 
        message: 'Hello',
        number:23,
        items:['jat','gajjar','lund']
    };
        res.json(jsonData);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://abhinavsehrawat01:GU12345@cluster0.4tlml7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

