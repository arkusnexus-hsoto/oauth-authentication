const { OAuth2Client } = require('google-auth-library');
const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

const client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT,
});

app.get('/', (req, res) => {
    res.send('Running...');
});

app.get('/auth', (req, res) => {
    const url = client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/userinfo.profile'],
    });
    res.redirect(url);
});

app.get('/callback', async (req, res) => {
    const code = req.query.code;
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    res.json(tokens);
});

app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
});
