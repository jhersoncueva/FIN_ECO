const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the 'certificates' directory
app.use('/certificates', express.static(path.join(__dirname, 'certificates')));

app.get('/validate/:id', (req, res) => {
    const certId = req.params.id;
    const filePath = path.join(__dirname, 'certificates', `${certId}.pdf`);

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Certificado no encontrado');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
