const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || 'blue';

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Blue-Green Demo</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background: ${VERSION === 'blue' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
                    color: white;
                }
                .container {
                    text-align: center;
                    padding: 50px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                }
                h1 { font-size: 4em; margin: 0; }
                p { font-size: 1.5em; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${VERSION.toUpperCase()} Version</h1>
                <p>Hostname: ${require('os').hostname()}</p>
                <p>Current Time: ${new Date().toLocaleString()}</p>
            </div>
        </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', version: VERSION });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} - Version: ${VERSION}`);
});