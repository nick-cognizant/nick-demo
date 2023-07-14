const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const font = process.env.FONT || 'Arial, sans-serif';
  const backgroundColor = process.env.BACKGROUND_COLOR || '#f0f0f0'; //#ADD8E6 (blue) #f0f0f0 (white)

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                background-color: ${backgroundColor}; /* this is the background color */
                font-family: ${font}; /* this is the font */
            }
        </style>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
    </html>
  `);
});

const port = 8080;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});
