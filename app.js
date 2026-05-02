const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Ruta principal que mostrará nuestro mensaje
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>William Ricardo Castañaza Romero Carnet 0907-21-11816</h1>
        <p>Esta aplicación se desplegó automáticamente desde GitHub.</p>
        <p>Versión: 1.0</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});