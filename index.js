const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// POST method route
app.post('/bfhl', (req, res) => {
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
        user_id: "john_doe_17091999", // You can replace it with dynamic data if needed
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).json(response);
});

// GET method route
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
