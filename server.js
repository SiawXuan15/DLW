const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the 'DLWCV' directory in OneDrive
app.use(express.static(path.join(__dirname, 'OneDrive', 'Documents', 'DLWCV')));

// Catch-all route to serve popup.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'OneDrive', 'Documents', 'DLWCV', 'popup.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});