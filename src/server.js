const express = require( 'express' );
const mongoose = require( 'mongoose' );
const cors = require( 'cors' );
const path = require( 'path' );

const routes = require( './routes' );

const app = express( );

mongoose.connect( 'mongodb+srv://cipriano:cipriano@omnistack-raqxk.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} )

// Tipos de rotas:
// GET, POST, PUT, DELETE

// `req.query` == Acessar query params via GET ( para filtros )
// `req.params` == Acecssar route params via PUT ( para edição, delete )
// `req.body` == Acessar corpo da requisição via POST ( para criação, edição )

app.use( cors( 'http://localhost:3000' ) );
app.use( express.json( ) );
app.use( '/files', express.static( path.resolve( __dirname, '..', 'uploads' )));
app.use( routes );

app.listen(3333);