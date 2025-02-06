const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Aplicació desplegada correctament en AWS!');
});

app.listen(PORT, () => {
    console.log(`Servidor en execució a http://localhost:${PORT}`);
});
