const { MongoClient } = require('mongodb');
const path = require('path');
const { DB_CONNECTION_STRING } = process.env

const cert = path.resolve('./ca-certificate.crt')

const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, tlsCAFile: cert });

exports.client = client
