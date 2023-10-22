const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');

const {
    PORT,
    SECRET,
    NODE_ENV,
    HATCH_SCRATCHER_ADDRESS,
    DB_CONNECTION_STRING,
    VALID_IPS,
} = process.env;

// Config
const app = express()
app.use(express.json())
const sess = {
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {},
    store: MongoStore.create({
        mongoUrl: DB_CONNECTION_STRING,
        mongoOptions: {
            tlsCAFile: path.resolve('./ca-certificate.crt'),
        }
    }),
}

if (NODE_ENV === 'production') {
    app.set('trust proxy', 1);
    sess.cookie.secure = true;
    sess.cookie.sameSite = 'none';
}

app.use(session(sess));

// app.use((req, res, next) => {
//     console.log(app.get('trust proxy'), req.hostname, req.socket.remoteAddress, req.ip);
//     console.log(JSON.parse(VALID_IPS));
//     if (JSON.parse(VALID_IPS).includes(req.ip)) {
//         next()
//     } else {
//         res.sendStatus(401);
//     }
// })

app.get('/', (req, res) => { res.send('o7 reporting for duty') })

// Hatch Scratcher
app.use(
    '/hatchscratcher',
    cors({
        origin: HATCH_SCRATCHER_ADDRESS,
        credentials: true
    }),
    require('./hatchscratcher').router
)


// Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

