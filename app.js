// const express = require('express');
// const app = express();
// const port = 8080;

// app.get('/', (req, res) => res.send('Hello, World!'));

// app.listen(port, () => {
//   console.log(`App running at http://localhost:${port}`);
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const font = process.env.FONT || 'Arial, sans-serif';
  const backgroundColor = process.env.BACKGROUND_COLOR || '#0000FF';

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
