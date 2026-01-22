const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit', (req, res) => {
  try {
    const { input1, input2 } = req.body;

    // JSON object theke create koro
    const data = {
      input1: input1,
      input2: input2,
      timestamp: new Date().toISOString()
    };

    // credit.json file path
    const filePath = path.join(__dirname, 'credit.json');

    // Check if file exists, na hole empty array create koro
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      existingData = JSON.parse(fileContent || '[]');
    }

    // Noy data add koro
    existingData.push(data);

    // File e save koro
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    res.json({ success: true, message: 'Data saved successfully!', data: data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Error saving data', error: error.message });
  }
});

// Server start koro
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

