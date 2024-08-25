const express = require('express');

const cors = require('cors');
const app = express();
// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// POST method route
app.post('/bfhl', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
    const { data } = req.body;

    // Variables for response
    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = "";

    // Extracting numbers and alphabets
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item) && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    // Response
    const response = {
        is_success: true,
        user_id: "21BCE0253", // You can replace it with dynamic data if needed
        email: "yashwork75754@gmail.com",
        roll_number: "21BCE0253",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).json(response);
});

// GET method route
app.get('/bfhl', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
    res.status(200).json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
